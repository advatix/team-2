import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateWarehouseComponent } from './create-warehouse/create-warehouse.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';

import { WarehouseComponent } from './warehouse.component';

const routes: Routes = [
  { path: '', component: WarehouseComponent,children :[
    { path: 'create-warehouse', component: CreateWarehouseComponent},
    { path: 'warehouse-list', component: WarehouseListComponent}
  ]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
