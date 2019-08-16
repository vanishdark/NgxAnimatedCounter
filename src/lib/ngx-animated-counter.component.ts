import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListModel} from './models/list.model';

@Component({
  selector: 'ngx-a-counter',
  templateUrl: 'ngx-animated-counter.html',
  styleUrls: ['ngx-animated-counter.scss']
})
export class NgxAnimatedCounterComponent implements OnInit {

  @Output() countChange = new EventEmitter();
  @Output() countEnd = new EventEmitter();

  @Input() duration: number;
  @Input() step: number;
  @Input() list: ListModel[] = [];
  @Input() alignBlock: 'center' | 'left';
  @Input() theme: 'cantaloupe' | 'clump' | 'kind' | 'grass';
  isToCenter = false;
  color: string;

  constructor() {
  }

  ngOnInit() {
    this.checkAlignment();
    this.checkTheme();
  }

  onCountEndFinish($event: any) {
    this.countEnd.emit($event);
    console.log($event, 'finish count');
  }

  private checkAlignment() {
    switch (this.alignBlock) {
      case 'center':
        this.isToCenter = true;
        break;
      case 'left':
        this.isToCenter = false;
        break;
      default:
        this.isToCenter = false;
    }
  }

  private checkTheme() {
    switch (this.theme) {
      case 'cantaloupe':
        this.color = 'cantaloupe';
        break;
      case 'clump':
        this.color = 'clump';
        break;
      case 'kind':
        this.color = 'kind';
        break;
      case 'grass':
        this.color = 'grass';
        break;
      default:
        this.color = 'clump';
        break;
    }
  }
}
