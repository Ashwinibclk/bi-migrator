import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import awsconfig from '../aws-exports';
import { Amplify } from 'aws-amplify';
import { CustomerComponent } from './customer/customer.component';
import { TableauloginComponent } from './tableaulogin/tableaulogin.component';
import { BimprojectComponent } from './bimproject/bimproject.component';
import { NgxSpinnerModule ,NgxSpinnerService} from 'ngx-spinner';
Amplify.configure(awsconfig);


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TableauloginComponent,
    BimprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AmplifyUIAngularModule,
    NgxSpinnerModule
    
  ],
  exports: [
    
    NgxSpinnerModule]
,
schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
