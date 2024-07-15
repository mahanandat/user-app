import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routeData } from './app.routes';

const routes: Routes = routeData;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
