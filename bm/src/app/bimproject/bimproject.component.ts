import {Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import {FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormControl} from "@angular/forms";
import {APIService,  BIMProject,Customer} from "../API.service";
import { Subscription } from "rxjs";
import { BIPlatform } from "../API.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-bimproject',
  templateUrl: './bimproject.component.html',
  styleUrls: ['./bimproject.component.css']
})



export class BimprojectComponent implements OnInit {
  public createFormtb: any;
  public tbs: Array<BIMProject> =[];
  public tbs1: Array<Customer> =[];
  public val:Number=0;
  
  constructor(private api: APIService, private fb: FormBuilder, private router: Router) {
    this.createFormtb=FormBuilder;
    this.createFormtb= this.fb.group({
      Pname: ["", Validators.required],
      DName:["",Validators.required],
      UserName: ["", Validators.required],
      source: ["", Validators.required],
      destination:["",Validators.required],
      
    });
   }
   private subscription: Subscription | null = null;
   async ngOnInit() {
    this.api.ListBIMProjects().then((event) => {
      this.tbs = event.items as BIMProject[];
    });

    this.api.ListCustomers().then((event) => {
      this.tbs1 = event.items as Customer[];
      console.log(this.tbs1.length);
    });
  
    
    this.subscription = <Subscription>(
      this.api.OnCreateBIMProjectListener.subscribe((event: any) => {
        const newtb = event.value.data.onCreatetb;
        this.tbs = [newtb, ...this.tbs];
      })
    );
  }

  funcsign(){
    this.router.navigate(["/sign-up"]);
  }
  
  public onCreatetb(todo: any) {
var i;
for(i=0; i<this.tbs1.length; i++){
  if(this.tbs1[i].name==todo.UserName && this.tbs1[i].DName
    ==todo.DName){
    this.val=1;
    this.api
    .CreateBIMProject(todo)
    .then((event) => {
      console.log("item created!");
      this.router.navigate(["/tableaulogin"]);
      this.createFormtb.get('destination').value;
      this.createFormtb.reset();
    })
    .catch((e) => {
      console.log("error creating restaurant...", e);
    });
    
  }
  
 
}
if(this.val==0){
  alert("invalid credentials!!!");
  this.createFormtb.reset();
}


   
  }
  
  /*public onDelete(username:any){
    this.api.DeleteTableaulogin(username).then((event)=>{
      console.log("item deleted!")
    });
  }
  
  public onUpdate(id:any){
    this.api.UpdateTableaulogin(id).then((event)=>{
      console.log("item updated!");
    })
  }
  */
  
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
    
  }

}
