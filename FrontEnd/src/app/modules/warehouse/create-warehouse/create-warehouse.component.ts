import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';
@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.scss']
})
export class CreateWarehouseComponent implements OnInit {
  createWarehouseForm: FormGroup;
  issubmitted: boolean;
  showMsg: any;
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private service:WarehouseService
    
  ) {
    this.createWarehouseForm = this.fb.group({
      address: new FormControl('',[Validators.required]),
      maxFloors: new FormControl('',[Validators.required]),
      length: new FormControl('', [Validators.required]),
      width: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      warehouseFlag: new FormControl(1),
      warehouseId: new FormControl(0),
      warehouseName: new FormControl('',Validators.required),
    });

    this.issubmitted=false;

   }

  ngOnInit() {
    
  }

  get createWarehouseFormControl() {
    return this.createWarehouseForm.controls;
  }

  keypress(event){
    var k;  
   k = event.charCode;  //         k = event.keyCode;  (Both can be used)
   return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)); 
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  submitWarehouse(){
    this.issubmitted=true;
    let formData = {
        "address": this.createWarehouseForm.get('address').value,
        "maxFloors": this.createWarehouseForm.get('maxFloors').value,
        "warehouseDimension": this.createWarehouseForm.get('length').value+'X'+this.createWarehouseForm.get('width').value+'X'+this.createWarehouseForm.get('height').value,
        "warehouseFlag": 1,
        "warehouseId": 0,
        "warehouseName": this.createWarehouseForm.get('warehouseName').value,
    }
    if(this.createWarehouseForm.valid && this.issubmitted){
    this.service.addWarehouse(formData).subscribe(data =>{
      this.showMsg = "SuccessFully Created";
    });
    }
  }
}