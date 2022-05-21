import { Component, OnDestroy, OnInit ,ChangeDetectorRef, Attribute} from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Subscription } from 'rxjs';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {APIService, BIMProject,comments, tptds} from "./API.service";
import { Router,NavigationStart } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit , OnDestroy {
  title = 'bm';
  user: CognitoUserInterface | undefined;
  authState: any;
  aws:boolean=false;
  response:any;
  res1:any;
  res2:Array<any>=[];
  j:any;
  i:any;
  public tbss:Array<BIMProject>=[];
  count:any;
  showapp:any;
  show:boolean=false;
  logcred:boolean=false;
  public tbs: Array<tptds> =[];
  
  public tbs1: Array<comments> =[];
  /* declare restaurants variable */
  public createFormaws: any;
  public createFormtb1: any;
  constructor( private api: APIService, private fb: FormBuilder, private ref: ChangeDetectorRef, private router:Router) {
    this.createFormtb1=FormBuilder;
    this.createFormtb1= this.fb.group({
      comments: ["", Validators.required]
      
    });
    this.createFormaws=FormBuilder;
    this.createFormaws= this.fb.group({
      access: ["", Validators.required],
      secret: ["", Validators.required],
      username:["", Validators.required]
    });

    this.showapp=Boolean;
router.events.forEach((event)=>{
  if(event instanceof NavigationStart){
    this.showapp = event.url !=="/tableaulogin" && event.url !=="/quicksightlogin" && event.url !=="/sign-up" && event.url !=="/department" && event.url !=="/login" && event.url !=="/datasets" && event.url !=="/tableau" && event.url !=="/quicksight"
  }
})
  };
  
  private subscription: Subscription | null = null;

  async ngOnInit() {
    this.api.ListTptds().then((event) => {
      this.tbs = event.items as tptds[];

    //this.res1=this.getData1();
    //console.log(this.res1);  
      
    

      
    });
  
  
    this.subscription = <Subscription>(
      this.api.OnCreateBIMProjectListener.subscribe((event: any) => {
        const newtb = event.value.data.onCreatetb;
        this.tbs = [newtb, ...this.tbs];
      })
    );
    this.api.ListComments().then((event) => {
      this.tbs1 = event.items as comments[];
    });
  
    
    this.subscription = <Subscription>(
      this.api.OnCreateCommentsListener.subscribe((event: any) => {
        const newtb = event.value.data.onCreatetb1;
        this.tbs1 = [newtb, ...this.tbs1];
      })
    );
    onAuthUIStateChange((authState, authData) => {
      this.authState=AuthState;
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      
      this.ref.detectChanges();
      console.log(this.user);
    })
  }

  showm(){
    this.aws=true;
    
  }
    
  method(){
    this.logcred=false;
    this.router.navigate(["\sign-up"]);
  }
  
  public onCreatetb1(todo: any) {
    this.api
      .CreateComments(todo)
      .then((event) => {
        console.log("item created!");
        this.createFormtb1.reset();
        this.ngOnInit();
      })
      .catch((e) => {
        console.log("error creating restaurant...", e);
      });
      
  }

  public oncreateaws(todo: any) {
    this.api.Getaws(todo.access,todo.secret,todo.username).then((event)=>{
      alert("authenticated to aws");
      this.createFormaws.reset();
      this.aws=false;
      this.router.navigate(["\sign-up"]);
    })
      .catch((e) => {
        alert("invalid credentials")
        console.log("error creating restaurant...", e);
      });
      
  }
  
  
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
    console.log(this.user);
    return onAuthUIStateChange;
  }
}
