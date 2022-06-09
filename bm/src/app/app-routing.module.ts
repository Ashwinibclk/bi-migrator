import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauloginComponent } from './tableaulogin/tableaulogin.component';
import { CustomerComponent } from './customer/customer.component';
import { BimprojectComponent } from './bimproject/bimproject.component';
import { AwsloginComponent } from './awslogin/awslogin.component';
const routes: Routes = [
  { path: 'tableaulogin', component: TableauloginComponent },

  { path: 'login', component: BimprojectComponent },
  
  { path: 'sign-up', component: CustomerComponent },
  { path: 'awslogin', component: AwsloginComponent }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
