import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';
declare var jQuery: any;
@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit {

  wareHouseData: any;
  createWarehouseForm: FormGroup;
  issubmitted: boolean;
  editDataById: any;
  showMsg:any;
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
    this.getWarehouseData();
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
        "warehouseId": this.editDataById.warehouseId,
        "warehouseName": this.createWarehouseForm.get('warehouseName').value,
    }
    if(this.createWarehouseForm.valid && this.issubmitted){
    this.service.addWarehouse(formData).subscribe(data =>{
      this.getWarehouseData();
      this.showMsg = "SuccessFully Updated";
    });
    }
  }

  editWarehouse(item){
    this.service.getWarehouseListById(item.warehouseId).subscribe(data => {
      this.editDataById = data;
      this.editDataById = this.editDataById.responseObject;
      let dim = this.editDataById.warehouseDimension.split('X');
      
      this.createWarehouseForm.patchValue({
        "address": this.editDataById.address,
        "maxFloors": this.editDataById.maxFloors,
        "length": dim[0],
        "width": dim[1],
        "height": dim[2],
        "warehouseFlag": 1,
        "warehouseId": this.editDataById.warehouseId,
        "warehouseName": this.editDataById.warehouseName,
      })
    });
    
  }

  deleteWarehouse(item){
    if (confirm("Are you sure you want to delete this ?")) {
      this.service.deleteWarehouse(item.warehouseId).subscribe(data=>{
        this.getWarehouseData();
    })
    } else {
      
    }
   
  }
  getWarehouseData() {
    this.service.getWarehouseList().subscribe((data) => {
     this.wareHouseData = data;
     this.wareHouseData = this.wareHouseData.responseObject;
      },
      err => {
        console.log('err', err);
      }
    );
  }

  
}