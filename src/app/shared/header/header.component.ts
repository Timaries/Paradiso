import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { PopupComponent } from 'src/app/auth/popup/popup.component';
import { RegistrationComponent } from 'src/app/auth/registration/registration.component';

@Component({
  selector: 'paradiso-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public dialogRef: MatDialog) {}
  openDialog() {
    this.dialogRef.open(PopupComponent);
  }
}
