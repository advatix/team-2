import {Directive, ElementRef, Input, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[inputFocus]'
})
export class InputFocusDirective {
  @Input('inputFocus') params: string;
  constructor(private el: ElementRef){
  }
  ngOnInit(){
     if(this.params){
      setTimeout(() => { this.el.nativeElement.focus(); }, 500);
     }
  }
}