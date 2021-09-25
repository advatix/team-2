import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  loginUser(postdata){
    return this.http.post(environment.WEBSERVICE_URL + 'user/userLogin', postdata);
  }

  setUserData(userData) {
    localStorage.setItem('userData', userData );
  }

  getUserData() {
    let userData = localStorage.getItem('userData');
    return (userData) ? JSON.parse(userData) : {};
  }

  getWmsToken(ssoToken){
    return this.http.post(environment.WEBSERVICE_URL + '/sso/userLogin', {"token" : ssoToken});
  }

  ssoLogout(){
    let cuser = this.getUserData();
    return this.http.put(environment.WEBSERVICE_URL + '/sso/logOutById?id=' + cuser.keycloakUserId, []);
  }

  updatePassword(postdata){
    return this.http.post(environment.WEBSERVICE_URL + '/sso/updatePassword', postdata);
  }

  forgotPassword(userName){
    return this.http.get(environment.WEBSERVICE_URL + '/user/forgotPassword?userName=' + userName);
  }

  changePassword(postdata){
    return this.http.post(environment.WEBSERVICE_URL + '/user/changePassword', postdata);
  }

}
