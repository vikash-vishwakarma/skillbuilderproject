import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
import {RegistrationComponent} from './registration/registration.component';
import { LoginComponent } from './login/login.component';


const routes :Routes=[
   { path: '',  redirectTo: '/login', pathMatch: 'full' },
 {path:'signup', component:RegistrationComponent},
 {path:'login', component:LoginComponent}
 
]
@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
// export const routingComponent =[signup]
