import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShelfComponent } from './shelf.component';

const routes: Routes = [{ path: '', component: ShelfComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShelfRoutingModule { }
