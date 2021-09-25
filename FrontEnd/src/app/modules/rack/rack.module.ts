import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RackRoutingModule } from './rack-routing.module';
import { RackComponent } from './rack.component';
import { RackListComponent } from './rack-list/rack-list.component';
import { CreateRackComponent } from './create-rack/create-rack.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RackComponent, RackListComponent, CreateRackComponent],
  imports: [
    CommonModule,
    RackRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RackModule { }
