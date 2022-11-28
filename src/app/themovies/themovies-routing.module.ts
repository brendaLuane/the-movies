import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PessoaComponent } from './page/pessoa/pessoa.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'pessoa',
    component: PessoaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemoviesRoutingModule { }
