import {Component, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userData : any;
  userLocation : any;
  constructor(private keycloakService: KeycloakService, private loginService:LoginService, private router:Router, private commonService : CommonService) {
  }

  ngOnInit() {
    this.userData = this.loginService.getUserData();
    this.userLocation = this.commonService.getUserLocationData();
    if(this.userLocation.location=='all'){
      this.userLocation.warehouse = 'all'; 
    }
    
    if(!this.userData.firstName){
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.loginService.ssoLogout().subscribe(
      data => {
        localStorage.removeItem("token");
        localStorage.removeItem("ssoToken");
        localStorage.removeItem("userLocationData");
        this.loginService.setUserData('');
        this.commonService.setUserLocationData('');
        this.keycloakService.logout(window.location.origin + environment.BASE_URL);
      }
    )
  }

  updateLocation(location){
    if(location){
      this.userLocation.warehouse = location=='all'?'':location;
      this.userLocation.location = location;
      this.commonService.setUserLocationData(JSON.stringify(this.userLocation));
      setTimeout(() => {
        if (this.userData.role == 16) {
          this.router.navigate(['/packing/ship']);
        } else if (this.userData.role == 15) {
          this.router.navigate(['/packing/pack']);
        } else {
          let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);
          // this.router.navigate(['/orders/viewAllOrders']);
        }
      }, 1000);
    } else {
      this.router.navigate(['/']);
    }
  }

}
