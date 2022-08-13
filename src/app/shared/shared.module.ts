import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MatDialogModule, TranslateModule],
  exports: [HeaderComponent, SearchComponent, MatDialogModule, FooterComponent],
})
export class SharedModule {}
