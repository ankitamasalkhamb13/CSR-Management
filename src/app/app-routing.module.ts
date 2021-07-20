import { ViewEventsComponent } from './view-events/view-events.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CreateeventComponent } from './createevent/createevent.component';

const routes: Routes = [
  
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"create-event",component:CreateeventComponent},
  {path:"view-event",component:ViewEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
