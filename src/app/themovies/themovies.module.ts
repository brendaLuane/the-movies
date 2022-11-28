import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { ThemoviesRoutingModule } from './themovies-routing.module';
import { HomeComponent } from './home/home.component';
import { PessoaComponent } from './page/pessoa/pessoa.component';

@NgModule({
  declarations: [
    HomeComponent,
    PessoaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ThemoviesRoutingModule,
    NgxPaginationModule ,
    CoreModule
  ]
})
export class ThemoviesModule { }
