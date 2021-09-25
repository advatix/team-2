import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShelfRoutingModule } from './shelf-routing.module';
import { ShelfComponent } from './shelf.component';
import { CreateShelfComponent } from './create-shelf/create-shelf.component';
import { ShelfListComponent } from './shelf-list/shelf-list.component';


@NgModule({
  declarations: [ShelfComponent, CreateShelfComponent, ShelfListComponent],
  imports: [
    CommonModule,
    ShelfRoutingModule
  ]
})
export class ShelfModule { }
