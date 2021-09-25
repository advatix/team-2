import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinRoutingModule } from './bin-routing.module';
import { BinComponent } from './bin.component';
import { CreateBinComponent } from './create-bin/create-bin.component';
import { BinListComponent } from './bin-list/bin-list.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BinComponent, CreateBinComponent, BinListComponent],
  imports: [
    CommonModule,
    BinRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BinModule { }
