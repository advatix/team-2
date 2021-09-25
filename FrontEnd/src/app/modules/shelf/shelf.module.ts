import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShelfRoutingModule } from './shelf-routing.module';
import { ShelfComponent } from './shelf.component';
import { CreateShelfComponent } from './create-shelf/create-shelf.component';
import { ShelfListComponent } from './shelf-list/shelf-list.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ShelfComponent, CreateShelfComponent, ShelfListComponent],
  imports: [
    CommonModule,
    ShelfRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShelfModule { }
