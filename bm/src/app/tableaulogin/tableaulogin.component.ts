import {Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import {FormBuilder, FormGroup, Validators,ReactiveFormsModule} from "@angular/forms";
import {APIService,  Tableaulogin} from "../API.service";
import { Subscription } from "rxjs";
import {Router} from '@angular/router';
import {API} from 'aws-amplify';
import {HttpClient} from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";  
import { NgxSpinnerModule } from "ngx-spinner";
@Component({
  selector: 'app-tableaulogin',
  templateUrl: './tableaulogin.component.html',
  styleUrls: ['./tableaulogin.component.css']
})
export class TableauloginComponent implements OnInit {
  response:any;
  tabdis:boolean=false;
  res2:Array<any>=[];
  res3:Array<any>=[];
  res4:Array<any>=[];
  res5:Array<any>=[];
  public createFormtb: any;
  public tbs: Array<Tableaulogin> =[];
  constructor(private api: APIService, private fb: FormBuilder, private router: Router,private SpinnerService: NgxSpinnerService){ 
    this.createFormtb=FormBuilder;
    this.createFormtb= this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      sitename: ["", Validators.required],
      siteurl: ["", Validators.required],

    });
  }
  private subscription: Subscription | null = null;
  
 async ngOnInit() {
  this.api.ListTableaulogins().then((event) => {
    this.tbs = event.items as Tableaulogin[];
  });

  
  this.subscription = <Subscription>(
    this.api.OnCreateTableauloginListener.subscribe((event: any) => {
      const newtb = event.value.data.onCreatetb;
      this.tbs = [newtb, ...this.tbs];
    })
  );
}

async onCreatetb(todo: any) {
  this.tabdis=true;
  this.SpinnerService.show();  
  this.api
    .CreateTableaulogin(todo)
    .then((event) => {
      console.log("item created!");
      this.createFormtb.reset();
    })
    .catch((e) => {
      console.log("error creating restaurant...", e);
    });
    this.projects(todo);
    
}

async projects(todo:any){
  const apiName = 'bm';
  const path = '/tableau';
  const myInit = { // OPTIONAL
    headers: {}, // OPTIONAL
    body:{"username": todo.username,
    "password": todo.password,
    "sitename": todo.sitename,
    "siteurl": todo.siteurl}
  };
  
this.response=await API.post(apiName,path,myInit).then(result=>{ this.res2=result.body[0]; this.res3=result.body[1];this.res4=result.body[2];this.res5=result.body[3];
  
  this.SpinnerService.hide();    
console.log(this.res2,this.res3,this.res4,this.res5);}
)
.catch((e) => {
  this.SpinnerService.hide(); 
  this.tabdis=false;   
  //alert("Invalid Credentials!!!")
});

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
