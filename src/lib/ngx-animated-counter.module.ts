import {NgModule} from '@angular/core';
import {NgxAnimatedCounterComponent} from './ngx-animated-counter.component';
import {NgxAnimatedCounterDirective} from './ngx-animated-counter.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [NgxAnimatedCounterComponent, NgxAnimatedCounterDirective],
  imports: [CommonModule],
  providers: [],
  exports: [NgxAnimatedCounterComponent]
})
export class NgxAnimatedCounterModule {
}
