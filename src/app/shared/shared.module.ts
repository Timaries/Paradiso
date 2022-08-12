import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [HeaderComponent, SearchComponent],
  imports: [CommonModule, RouterModule, FormsModule, MatDialogModule],
  exports: [HeaderComponent, SearchComponent, FormsModule, MatDialogModule],
})
export class SharedModule {}
