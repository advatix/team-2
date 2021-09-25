import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFloorComponent } from './create-floor/create-floor.component';
import { FloorListComponent } from './floor-list/floor-list.component';

import { FloorComponent } from './floor.component';

const routes: Routes = [
  { path: '', component: FloorComponent,children :[
    { path: 'create-floor', component: CreateFloorComponent},
    { path: 'floor-list', component: FloorListComponent}
  ]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloorRoutingModule { }
