import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRackComponent } from './create-rack/create-rack.component';
import { RackListComponent } from './rack-list/rack-list.component';

import { RackComponent } from './rack.component';

const routes: Routes = [
  { path: '', component: RackComponent,children :[
    { path: 'create-rack', component: CreateRackComponent},
    { path: 'rack-list', component: RackListComponent}
  ]  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RackRoutingModule { }
