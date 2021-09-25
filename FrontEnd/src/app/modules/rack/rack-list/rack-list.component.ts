import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';
declare var jQuery: any;
@Component({
  selector: 'app-rack-list',
  templateUrl: './rack-list.component.html',
  styleUrls: ['./rack-list.component.scss']
})
export class RackListComponent implements OnInit {

  wareHouseData: any;
  createWarehouseForm: FormGroup;
  issubmitted: boolean;
  editDataById: any;
  showMsg:any;
  createFloorForm: FormGroup;

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
      floorWarehouseId: new FormControl(0),
      floorName: new FormControl('',Validators.required),
    });

    this.issubmitted=false;
   }

  ngOnInit() {
    this.getFloorData();
  }


  get createFloorFormControl() {
    return this.createFloorForm.controls;
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
        "floorWarehouseId": 0,
        "floorName": this.createFloorForm.get('floorName').value,
        "floorId":this.editDataById.floorId,
    }
    if(this.createFloorForm.valid && this.issubmitted){
    this.service.addFloor(formData).subscribe(data =>{
      this.showMsg = "SuccessFully Updated";
      this.getFloorData();
    });
    }
  }

  editFloor(item){
    this.service.getFloorListById(item.floorId).subscribe(data => {
      this.editDataById = data;
      this.editDataById = this.editDataById.responseObject;
      let dim = this.editDataById.floorDimension.split('X');
      
      this.createFloorForm.patchValue({
        
        "maxRacks": this.editDataById.maxRacks,
        "length": dim[0],
        "width": dim[1],
        "height": dim[2],
        "floorFlag": 1,
        "floorWarehouseId": this.editDataById.floorId,
        "floorName": this.editDataById.floorName,
      })
    });
    
  }

  deleteFloor(item){
    if (confirm("Are you sure you want to delete this ?")) {
      this.service.deleteFloor(item.floorId).subscribe(data=>{
        this.getFloorData();
    })
    } else {
      
    }
   
  }
  getFloorData() {
    this.service.getFloorList().subscribe((data) => {
     this.wareHouseData = data;
     this.wareHouseData = this.wareHouseData.responseObject;
      },
      err => {
        console.log('err', err);
      }
    );
  }

  
}