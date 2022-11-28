import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { PessoaInfoComponent } from './components/pessoa-info/pessoa-info.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    PessoaInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class CoreModule { }
