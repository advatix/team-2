import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinListComponent } from './bin-list/bin-list.component';

import { BinComponent } from './bin.component';
import { CreateBinComponent } from './create-bin/create-bin.component';

const routes: Routes = [
  { path: '', component: BinComponent,children :[
    { path: 'create-bin', component: CreateBinComponent},
    { path: 'bin-list', component: BinListComponent}
  ]  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BinRoutingModule { }
