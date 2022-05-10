import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { APIService, Tableaulogin, tdatasources, tprojects } from "../API.service";
import { Subscription } from "rxjs";
import { Router } from '@angular/router';
import { API } from 'aws-amplify';
import { NgxSpinnerService } from "ngx-spinner";
import { toUnicode } from "punycode";
declare function move(): any;


@Component({
  selector: 'app-tableaulogin',
  templateUrl: './tableaulogin.component.html',
  styleUrls: ['./tableaulogin.component.css']
})
export class TableauloginComponent implements OnInit, OnDestroy {
  isLoading = false;

  dsid:String="";
  pid:String="";
  response: any;
  tabdis: boolean = false;
  qsdis: boolean = false;
  r2: string = "";
  r3: string = "";
  r4: string = "";
  tp:Array<tprojects>=[];
  qs:Array<tdatasources>=[];
  res2: Array<any> = [];
  res3: Array<any> = [];
  res4: Array<any> = [];
  res5: Array<any> = [];
  public createFormtb: any;
  public createFormqs: any;
  public tbs: Array<Tableaulogin> = [];
  constructor(private api: APIService, private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService) {
    this.createFormtb = FormBuilder;
    this.createFormqs = FormBuilder;
    this.createFormtb = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      sitename: ["", Validators.required],
      siteurl: ["", Validators.required],

    });
    this.createFormqs = this.fb.group({
      awsaccountId: ["", Validators.required],
      name:["",Validators.required]


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
    this.isLoading = true;
    this.tabdis = true;

    this.api.GetMessage(todo.username, todo.password, todo.sitename, todo.siteurl).then((result) => {
      console.log(result.body); console.log(result.body1); console.log(result.body2);
     this.r2=result.body.slice(1,-1);
     /*this.r2=this.r2.slice(1,-1)
    this.res2=this.r2.replace(/],/g, '').split('[');   
    console.log(this.res2[0]);*/
    this.r3=result.body1.slice(1,-1);
    this.r4=result.body2.slice(1,-1);
    this.res2=this.r2.split(",");
    this.res3=this.r3.split(",");
    this.res4=this.r4.split(",");


    this.isLoading = false;
    
     
    })
      .catch((e) => {
        this.isLoading = false;
        this.tabdis = false;
       
        alert("invalid credentials!!!");
        console.log("error creating restaurant...", e);
      });

    this.api
      .CreateTableaulogin(todo)
      .then((event) => {
        console.log("item created!");


      })
      .catch((e) => {
        this.isLoading = false;
        this.tabdis = false;
        alert("invalid credentials!!!")
        console.log("error creating restaurant...", e);
      });
    



  }

  qslogin(event:any) {
    this.qsdis = true;
   var a=event;
   console.log(event);
   return a;
  
    
  }

 
  async onCreateqs(todo: any) {
    move();
  
 /*   this.api.ListTdatasources().then((event) => {
      this.qs = event.items as tdatasources[];
      for (var i=0; i<this.qs.length; i++){
        if(this.qs[i]['name']=="World Indicators"){
         this.dsid=this.qs[i]['id'];
        }
  
      }
      this.api.ListTprojects().then((event)=>{
        this.tp = event.items as tprojects[];
        for(var i=0; i<this.tp.length; i++){
          this.pid=this.tp[i]['id'];
        }
      })
      this.migrate(this.dsid,this.pid,todo.awsaccountId);
     
    });
   */
    this.api.Getquick("98765","987","519510601754").then((result) => {
      console.log(result.body); 
    
    });
  
    setTimeout(() => {
      this.qsdis=true;
      this.router.navigate(["/"]);
    }, 6000);
    
}

migrate(a:any,b:any,c:any){
  
  this.api.Getquick(a,b,c).then((result) => {
    console.log(result.body); 
  
  });

}
   /* this.api
      .CreateQuicksightlogin(todo)
      .then((event) => {
        console.log("item created!");
        this.createFormqs.reset();

      })
      .catch((e) => {

        alert("invalid credentials!!!");
        console.log("error creating restaurant...", e);
      });


  }
  /*async projects(todo:any){
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
     
  console.log(this.res2,this.res3,this.res4,this.res5);}
  )
  
  
  }*/
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
