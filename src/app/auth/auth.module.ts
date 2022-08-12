import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PopupComponent } from './popup/popup.component';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    PopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopupComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AuthModule { }
