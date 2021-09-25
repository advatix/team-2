import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { saveAs } from 'file-saver';
import { timestamp } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  subdomain : any;
  constructor(private http: HttpClient, private titleService: Title) { }

  getLocationList() {
    return this.http.post(environment.WEBSERVICE_URL + '/user/getWmsUserShipperList?accountId=', []);
  }

  getInventoryStageList() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getInventoryStageList');
  }

  getMasterStockTypes() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getMasterStockTypes');
  }

  getUserList(postData) {
    return this.http.post(environment.WEBSERVICE_URL + '/user/getUserListNew?pageNumber=0&pageSize=100', postData);
  }

  getLocationDropDownList(packageType, stockType, productIsDamage, removeLocationBarcode, productCategory, warehouseLocation) {
    stockType = (stockType == 3) ? 2 : stockType;
    return this.http.get(environment.WEBSERVICE_URL + '/location/getLocationDropDownList?packageType=' + packageType + '&stockType=' + stockType + '&productIsDamage=' + productIsDamage + '&removeLocationBarcode=' + removeLocationBarcode + '&productCategory=' + productCategory + '&warehouseLocation=' + warehouseLocation);
  }

  reserveCapacity(packageType, stockType, productIsDamage, oldLocationId, newLocationId) {
    stockType = (stockType == 3) ? 2 : stockType;
    return this.http.put(environment.WEBSERVICE_URL + '/location/reserveCapacity?packageType=' + packageType + '&stockType=' + stockType + '&productIsDamage=' + productIsDamage + '&oldLocationId=' + oldLocationId + '&newLocationId=' + newLocationId, []);
  }

  releaseCapacity() {
    return this.http.put(environment.WEBSERVICE_URL + '/location/releaseCapacity', []);
  }

  getPickUpContainerList() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getMasterOrderPickUpContainerList');
  }

  getPickUpStatusList() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getMasterOrderPickUpStatusList');
  }

  getPickUpTypeList() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getMasterOrderPickUpTypeList');
  }

  setTitle(title) {
    var domain = window.location.hostname;
    this.subdomain = 'XPDEL';
    if (domain.indexOf('.') < 0 || domain.split('.')[0] === 'example' || domain.split('.')[0] === '34' || domain.split('.')[0] === 'www') {

    } else {
      this.subdomain = domain.split('.')[0];
    }
    this.titleService.setTitle(this.subdomain.toUpperCase() + (title ? " || " + title.toUpperCase() : ''));
  }

  formatTiemStamp(dt) {
    return `${(dt.getMonth() + 1).toString().padStart(2, '0')}-${dt.getDate().toString().padStart(2, '0')}-${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;
  }

  formatDate(dt) {
    if (dt && dt instanceof Date) {
      return `${(dt.getMonth() + 1).toString().padStart(2, '0')}-${dt.getDate().toString().padStart(2, '0')}-${dt.getFullYear().toString().padStart(4, '0')}`;
    } else {
      return dt;
    }
  }

  formatDate2(dt) {
    if (dt) {
      return `${dt.getFullYear().toString().padStart(4, '0')}-${(dt.getMonth() + 1).toString().padStart(2, '0')}-${dt.getDate().toString().padStart(2, '0')}`;
    } else {
      return '';
    }
  }

  formatDate3(dt) {
    if (dt && dt instanceof Date) {
      return `${(dt.getMonth() + 1).toString().padStart(2, '0')}-${dt.getFullYear().toString().padStart(4, '0')}`;
    } else {
      return dt;
    }
  }
  formatDate4(dt) {
    if (dt && dt instanceof Date) {
      return `${dt.getDate().toString().padStart(2, '0')}-${(dt.getMonth() + 1).toString().padStart(2, '0')}-${dt.getFullYear().toString().padStart(4, '0')}`;
    } else {
      return dt;
    }
  }
  formatDate6(dt) {
    if (dt && dt instanceof Date) {
      return `1-${(dt.getMonth() + 1).toString().padStart(2, '0')}-${dt.getFullYear().toString().padStart(4, '0')}`;
    } else {
      return dt;
    }
  }

  getTiemStamp(datestring) {
    var dt = datestring.replace(/-/g, '/').substr(0, 19);
    return Date.parse(dt);
  }

  getAllCategories() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getTicketMasterCategoryList');
  }

  getTicketMasterStatusList() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getTicketMasterStatusList');
  }

  postFile(fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(environment.WEBSERVICE_URL + '/uploads/uploadFileGetUrl', formData);
  }

  getAllLocationDropDownList(WAREHOUSE_ID) {
    return this.http.get(environment.WEBSERVICE_URL + '/location/getAllLocationDropDownList?WAREHOUSE_ID=' + WAREHOUSE_ID);
  }

  getOrdersData(postData, pageNumber, pageSize) {
    return this.http.post(environment.WEBSERVICE_URL + '/order/getAllOrders?pageNumber=' + pageNumber + '&pageSize=' + pageSize, postData);
  }

  getPartnersList() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getPartnersList');
  }

  getpartnerlocationdetails(partnerId) {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getPartnerLocationDetails/' + "" + partnerId);
  }

  getOrderTypes() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getOrderTypes');
  }

   getShipmentMethod(shipmentMethod) {
    return this.http.post(environment.WEBSERVICE_URL + '/config/getShipmentMethodByCarrier?carrierName=' +shipmentMethod,"");
  }

  formatTime(dt) {
    if (dt && dt instanceof Date) {
      return `${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;
    } else {
      return '';
    }
  }

  getorderTiemStamp(datestring, timestring) {
    if (datestring) {
      var dt = datestring.replace(/-/g, '/').substr(0, 10) + " " + timestring;
      if (dt) {
        return new Date(dt);
      }
    }
  }

  getCycleCountReasons() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getCycleCountReasons');
  }

  getAllProductAttributes(productCategoryId) {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getAllProductAttributes?productCategoryId=' + productCategoryId);
  }

  getAllPackages() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getPackageTypesList');
  }

  getAllAttributeInputTypes() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getAllAttributeInputTypes');
  }

  convertDateTime(str) {
    var month, day, year, hours, minutes, seconds;
    var date = new Date(str);
    month = ("0" + (date.getMonth() + 1)).slice(-2);
    day = ("0" + date.getDate()).slice(-2);
    hours = ("0" + date.getHours()).slice(-2);
    minutes = ("0" + date.getMinutes()).slice(-2);
    seconds = ("0" + date.getSeconds()).slice(-2);

    var mySQLDate = [date.getFullYear(), month, day].join("-");
    var mySQLTime = [hours, minutes, seconds].join(":");
    return mySQLDate + "T" + mySQLTime + "Z";
  }

  getAllPartners() {
    return this.http.get(environment.WEBSERVICE_URL + '/account/getAccountNames');
  }

  getAllClosePoExceptionList() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getAllClosePoExceptionList');
  }

  getProductDetail(id, accountId) {
    return this.http.get(environment.WEBSERVICE_URL + "/product/findBySku?skuNumber=" + encodeURIComponent(id) + "&accountId=" + accountId);
  }

  getAllBoxTypes() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getAllBoxTypes');
  }

  getVersions() {
    return this.http.get(environment.WEBSERVICE_URL + '/release/versions/wms');
  }

  getContainerTypeList(){
    return this.http.get(environment.WEBSERVICE_URL + "/config/getMasterContainerTypeList");
  }

  getProductCategoryList(){
    return this.http.get(environment.WEBSERVICE_URL + "/config/getProductCategories");
  }

  getAreaTypeList(){
    return this.http.get(environment.WEBSERVICE_URL + "/config/getAreaTypeList");
  }

  getStateListByCountryCode(countryCode) {
    return this.http.get(environment.WEBSERVICE_URL + "/config/getStateListByCountryCode?countryCode=" + countryCode);
  }

  getStateListByCountryId(countryId) {
    return this.http.get(environment.WEBSERVICE_URL + "/config/getStateList?countryId=" + countryId);
  }

  getCityListByStateCode(stateCode, countryCode) {
    return this.http.get(environment.WEBSERVICE_URL + "/config/getCityListByStateCode?stateCode=" + stateCode + '&countryCode=' + countryCode);
  }

  getCityListByStateId(stateCode, countryCode) {
    return this.http.get(environment.WEBSERVICE_URL + "/config/getCityList?stateId=" + stateCode);
  }

  getAllSkuNumbers(formData,product="",sort="") {
    return this.http.post<any>(environment.WEBSERVICE_URL + '/product/getAllSkuNumbers?sortingColumn='+product+"&direction="+sort, formData);
  }

  downloadFile(data: any, filename) {
    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(data[0]);
    let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');
    var blob = new Blob([csvArray], { type: 'text/csv' })
    var ts = new Date();
    filename = filename + "_" + this.formatFilenameTiemStamp(ts) || "downlad";
    saveAs(blob, filename + ".csv");
  }

  formatFilenameTiemStamp(dt) {
    return `${(dt.getMonth() + 1).toString().padStart(2, '0')}-${dt.getDate().toString().padStart(2, '0')}-${dt.getFullYear().toString().padStart(4, '0')}_${dt.getHours().toString().padStart(2, '0')}_${dt.getMinutes().toString().padStart(2, '0')}_${dt.getSeconds().toString().padStart(2, '0')}`;
  }

  datereplace(value: String): any {
    if (value) {
      let regex = new RegExp('-', 'g');
      return value.toString().slice(0, 10).replace(regex, '/');
    }
  }

  getUserData() {
    let userData = localStorage.getItem('userData');
    return (userData) ? JSON.parse(userData) : {};
  }

  getCompanyNamesList() {
    return this.http.get(environment.WEBSERVICE_URL + "/config/getCompanyNamesList");
  }

  getAllPOStatus() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getAllPOStatus');
  }

  getAllLOB(customerId="") {
    var userData = this.getUserData();
    return this.http.get(environment.WEBSERVICE_URL + '/config/getAllLOB?customerId='+customerId);
  }

  getAllExceptionsListForPack() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getAllExceptionsListForPack');
  }

  autoPrint(myModal) {
    var innerContents = document.getElementById(myModal).innerHTML;
    var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
    setTimeout(() => {
      popupWinindow.close();
    }, 9000);
  }

  trackOrder(orderNumber, trackingId,statusIn='') {
    return this.http.get(environment.WEBSERVICE_URL + '/order/getOrderTracking?orderNumber=' + orderNumber + '&trackingId=' + trackingId+'&statusIn='+statusIn);
  }

  commandPrinter(url){
    return this.http.post('http://localhost:9000/print', url);
  }

  setUserLocationData(userLocationData) {
    localStorage.setItem('userLocationData', userLocationData );
  }

  getUserLocationData() {
    let userLocationData = localStorage.getItem('userLocationData');
    return (userLocationData) ? JSON.parse(userLocationData) : {};
  }

  getAllAsnTypes() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getAllAsnTypes');
  }

  getOrderCancelReasons() {
    return this.http.get(environment.WEBSERVICE_URL + '/config/getOrderCancelReasons');
  }

  dateSort(date){
    if(date){
      var s = date.toString().slice(0, 10).split('-');
      return s[2] +""+ s[0] +""+ s[1];
    } else {
      return '';
    }
  }

  getOrderContainerList(orderNumber) {
    return this.http.post(environment.WEBSERVICE_URL + '/order/getOrderContainerList?orderNumber=' + orderNumber, []);
  }
  getCustomerContract(accountName){
    return this.http.get(environment.WEBSERVICE_URL + '/config/getCustomerContract/' + accountName);
  }


  getAllCompanyInfoList(customerId,companyName='') {
    return this.http.get(environment.WEBSERVICE_URL + "/companyInfo/getAllCompanyInfoList?customerId="+customerId+'&companyName='+companyName);
  }

  getAllCompany(data,pageNumber,pageSize) {
    return this.http.post(environment.WEBSERVICE_URL + '/companyInfo/getAll?pageNumber=' + pageNumber + '&pageSize=' + pageSize,data);
  }

  createcompanyinfo(data)
  {
    return this.http.post(environment.WEBSERVICE_URL + '/companyInfo/syncCompanyInfo', data)
  }

  

}
