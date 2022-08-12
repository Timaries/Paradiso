import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, MatDialogModule],
  exports: [FormsModule, MatDialogModule],
})
export class MaterialModule {}
