import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';
@Component({
  selector: 'app-create-floor',
  templateUrl: './create-floor.component.html',
  styleUrls: ['./create-floor.component.scss']
})
export class CreateFloorComponent implements OnInit {
  createFloorForm: FormGroup;
  issubmitted: boolean;
  showMsg: any;
  wareHouseData: any;
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private service:WarehouseService
    
  ) {
    this.createFloorForm = this.fb.group({
      
      maxRacks: new FormControl('',[Validators.required]),
      length: new FormControl('', [Validators.required]),
      width: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      floorFlag: new FormControl(1),
      floorWarehouseId: new FormControl('',Validators.required),
      floorName: new FormControl('',Validators.required),
    });

    this.issubmitted=false;

   }

  ngOnInit() {
    this.getWarehouseData();
  }

  get createFloorFormControl() {
    return this.createFloorForm.controls;
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

  submitFloor(){
    this.issubmitted=true;
    let formData = {
  
        "maxRacks": this.createFloorForm.get('maxRacks').value,
        "floorDimension": this.createFloorForm.get('length').value+'X'+this.createFloorForm.get('width').value+'X'+this.createFloorForm.get('height').value,
        "warehouseFlag": 1,
        "floorWarehouseId": this.createFloorForm.get('floorWarehouseId').value,
        "floorName": this.createFloorForm.get('floorName').value,
    }
  
    if(this.createFloorForm.valid && this.issubmitted){
    this.service.addFloor(formData).subscribe(data =>{
      this.showMsg = "SuccessFully Created";
    });
    }
  }
}