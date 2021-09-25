import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

constructor(private http: HttpClient) { }

addWarehouse(data){
  return this.http.post<any>(environment.WEBSERVICE_URL + '/warehouse/save', data);
}
getWarehouseList(){
  return this.http.get<any>(environment.WEBSERVICE_URL + '/warehouse/list');
}

getWarehouseListById(id){
  return this.http.get<any>(environment.WEBSERVICE_URL + '/warehouse/getById/'+id);
}
deleteWarehouse(id){
  return this.http.delete<any>(environment.WEBSERVICE_URL + '/warehouse/delete/'+id);
}

/////////////////floor/////////////////////

addFloor(data){
  return this.http.post<any>(environment.WEBSERVICE_URL + '/floor/save', data);
}
getFloorList(){
  return this.http.get<any>(environment.WEBSERVICE_URL + '/floor/list');
}

getFloorListById(id){
  return this.http.get<any>(environment.WEBSERVICE_URL + '/floor/getById/'+id);
}
deleteFloor(id){
  return this.http.delete<any>(environment.WEBSERVICE_URL + '/floor/delete/'+id);
}
}
