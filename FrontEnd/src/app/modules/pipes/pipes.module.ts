import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatereplacePipe } from './datereplace.pipe';
import { TimereplacePipe } from './timereplace.pipe';
import { FirstcharPipe } from './firstchar.pipe';
import { SafePipe } from './safe.pipe';
import { FilenamePipe } from './filename.pipe';
import { ImageNamePipe } from './imagename.pipe';
import { PhonePipe } from './phone.pipe';



@NgModule({
  declarations: [DatereplacePipe, TimereplacePipe, FirstcharPipe, SafePipe, FilenamePipe, ImageNamePipe, PhonePipe],
  imports: [
    CommonModule
  ],
  exports : [
    DatereplacePipe,
    TimereplacePipe,
    FirstcharPipe,
    SafePipe,
    FilenamePipe,
    ImageNamePipe,
    PhonePipe
  ]
})
export class PipesModule { }
