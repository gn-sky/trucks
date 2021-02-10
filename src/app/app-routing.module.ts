import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckListComponent } from './truck/truck-list/truck-list.component';

const routes: Routes = [
  { path: '', component: TruckListComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
