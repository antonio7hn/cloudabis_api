import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IsRegisteredComponent } from './components/is-registered/is-registered.component';
import { ChangeIdComponent } from './components/change-id/change-id.component';
import { DeleteIdComponent } from './components/delete-id/delete-id.component';
import { RegisterComponent } from './components/register/register.component';
import { IdentifyComponent } from './components/identify/identify.component';
import { VerifyComponent } from './components/verify/verify.component';
import { UpdateComponent } from './components/update/update.component';
import { ChangeActiveDeviceComponent } from './components/change-active-device/change-active-device.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IsRegisteredComponent,
    ChangeIdComponent,
    DeleteIdComponent,
    RegisterComponent,
    IdentifyComponent,
    VerifyComponent,
    UpdateComponent,
    ChangeActiveDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
