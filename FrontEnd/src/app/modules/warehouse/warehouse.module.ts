import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseComponent } from './warehouse.component';
import { LayoutModule } from '../layout/layout.module';
import { CreateWarehouseComponent } from './create-warehouse/create-warehouse.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';


@NgModule({
  declarations: [WarehouseComponent, CreateWarehouseComponent, WarehouseListComponent],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  
    
  ]
})
export class WarehouseModule { }
