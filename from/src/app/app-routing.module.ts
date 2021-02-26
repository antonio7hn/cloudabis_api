import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChangeActiveDeviceComponent } from './components/change-active-device/change-active-device.component';
import { ChangeIdComponent } from './components/change-id/change-id.component';
import { DeleteIdComponent } from './components/delete-id/delete-id.component';
import { HomeComponent } from './components/home/home.component';
import { IdentifyComponent } from './components/identify/identify.component';
import { IsRegisteredComponent } from './components/is-registered/is-registered.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateComponent } from './components/update/update.component';
import { VerifyComponent } from './components/verify/verify.component';

const routes: Routes = [
  {path:'isRegister',component:IsRegisteredComponent},
  {path:'changeID',component:ChangeIdComponent},
  {path:'deleteID',component:DeleteIdComponent},
  {path:'register',component:RegisterComponent},
  {path:'identify',component:IdentifyComponent},
  {path:'verify',component:VerifyComponent},
  {path:'update',component:UpdateComponent},
  {path:'activeDevice',component:ChangeActiveDeviceComponent},
  {path:'',component: HomeComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
