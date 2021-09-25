import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinRoutingModule } from './bin-routing.module';
import { BinComponent } from './bin.component';
import { CreateBinComponent } from './create-bin/create-bin.component';
import { BinListComponent } from './bin-list/bin-list.component';


@NgModule({
  declarations: [BinComponent, CreateBinComponent, BinListComponent],
  imports: [
    CommonModule,
    BinRoutingModule
  ]
})
export class BinModule { }
