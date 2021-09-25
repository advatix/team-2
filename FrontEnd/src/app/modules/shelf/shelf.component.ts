import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    $('body').addClass('hold-transition skin-blue sidebar-mini  sidebar-collapse collapseSideAll');
  }

}
