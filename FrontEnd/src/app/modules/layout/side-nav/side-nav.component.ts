import {Component, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

declare var $;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  userData : any;

  constructor(private loginService : LoginService) {
  }

  ngOnInit() {
    this.userData = this.loginService.getUserData();
    console.log(this.userData)
    
    $(document).ready(() => {
      $('.sidebar-menu').tree();
    });

    this.userData = this.loginService.getUserData();
  }

}
