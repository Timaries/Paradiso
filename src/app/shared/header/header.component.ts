import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/auth/popup/popup.component';

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
