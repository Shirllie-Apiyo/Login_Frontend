import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoginComponent } from './add-login/add-login.component';

const routes: Routes = [
  { path: 'add', component: AddLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
