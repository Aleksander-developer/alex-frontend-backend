import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Servizi } from './servizi';

const routes: Routes = [
  { path: '', component: Servizi }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ServiziRoutingModule { }
