import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckListComponent } from './truck-list/truck-list.component';

const routes: Routes = [
  { path: '', component: TruckListComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TruckRoutingModule { }
