import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.scss']
})
export class BinComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    $('body').addClass('hold-transition skin-blue sidebar-mini  sidebar-collapse collapseSideAll');
  }

}
