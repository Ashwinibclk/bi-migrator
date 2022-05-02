import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControlName } from "@angular/forms";
import { APIService, Customer } from "../API.service";
import { Subscription } from "rxjs";
import { Router } from '@angular/router';
import { toUnicode } from "punycode";
import * as internal from "stream";
declare const selectauto: any;
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public createFormtb: any;
  public tbs: Array<Customer> = [];
  public a: any;
  constructor(private api: APIService, private fb: FormBuilder, private router: Router) {
    this.createFormtb = FormBuilder;
    this.createFormtb = this.fb.group({
      DName: ["", Validators.required],
      name: ["", Validators.required],
      Did: ["", Validators.required],
    });
  }
  private subscription: Subscription | null = null;
  async ngOnInit() {
    this.api.ListCustomers().then((event) => {
      this.tbs = event.items as Customer[];
      console.log(this.tbs.length);
    });


    this.subscription = <Subscription>(
      this.api.OnCreateCustomerListener.subscribe((event: any) => {
        const newtb = event.value.data.onCreatetb;
        this.tbs = [newtb, ...this.tbs];
        
      })
    );
    
  }

  public select(event: any) {
    console.log(event.target.value);
    if (event.target.value == "MARKETING") {
      this.createFormtb.Did = selectauto(1);
      console.log(this.createFormtb.Did);
    }

    switch (event.target.value) {
      case "MARKETING": this.createFormtb.patchValue({
        Did: 1
      }); selectauto(1); break;
      case "FINANCE": this.createFormtb.patchValue({
        Did: 2
      }); selectauto(2); break;
      case "HR": this.createFormtb.patchValue({
        Did: 3
      }); selectauto(3);  break;
      case "SALES": this.createFormtb.patchValue({
        Did: 4
      }); selectauto(4);  break;
      case "PURCHASE": this.createFormtb.patchValue({
        Did: 5
      }); selectauto(5);  break;
    }
  }

  funclog() {
    this.router.navigate(['/login'])
  }
  public onCreatetb(todo: any) {
    console.log(this.tbs.length);
    var i;
    for(i=0; i<this.tbs.length; i++){
      if(this.tbs[i].name==todo.name){
        alert ("username already exists..")
      }
    }
    if(todo.name==""){
      alert("UserName required");}
      else if(todo.DName==""){
        alert("Department Name is required");
      }
    
    this.api
      .CreateCustomer(todo)
      .then((event) => {
        console.log("item created!");

        this.createFormtb.reset();
        this.router.navigate(["/login"]);
      })
    /*  .catch((e) => {
        this.router.navigate(["/bimlogin"]);
      });
    */
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
