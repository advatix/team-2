import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloorRoutingModule } from './floor-routing.module';
import { FloorComponent } from './floor.component';
import { CreateFloorComponent } from './create-floor/create-floor.component';
import { FloorListComponent } from './floor-list/floor-list.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FloorComponent, CreateFloorComponent, FloorListComponent],
  imports: [
    CommonModule,
    FloorRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FloorModule { }
