import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateShelfComponent } from './create-shelf/create-shelf.component';
import { ShelfListComponent } from './shelf-list/shelf-list.component';

import { ShelfComponent } from './shelf.component';

const routes: Routes = [
  { path: '', component: ShelfComponent,children :[
    { path: 'create-shelf', component: CreateShelfComponent},
    { path: 'shelf-list', component: ShelfListComponent}
  ]  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShelfRoutingModule { }
