import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {APIService, BIMProject,comments, tptds} from "../API.service";
import { Router,NavigationStart } from "@angular/router";

@Component({
  selector: 'app-awslogin',
  templateUrl: './awslogin.component.html',
  styleUrls: ['./awslogin.component.css']
})
export class AwsloginComponent implements OnInit {
  public createFormaws: any;
  public chec:boolean=false;
  constructor(private api: APIService, private fb: FormBuilder, private router: Router) { 
    this.createFormaws=FormBuilder;
    this.createFormaws= this.fb.group({
      access: ["", Validators.required],
      secret: ["", Validators.required],
      username:["", Validators.required],
      awsaccountId:["",Validators.required]
    });

  }

  ngOnInit(): void {
  }

  public oncreateaws(todo: any) {
    if(this.chec==true){
    this.api.Getaws(todo.access,todo.secret,todo.username,todo.awsaccountId).then((event)=>{
      alert("Authenticated to AWS and Created Policies");
      this.createFormaws.reset();
      
      this.router.navigate(["\sign-up"]);
    })
      .catch((e) => {
        alert("invalid credentials")
        console.log("error creating restaurant...", e);
      });
    }
    if(this.chec==false){
      alert("Creating policies is mandatory please check!!!")
    }
      
  }
  check(){
    this.chec=true;
  }

}
