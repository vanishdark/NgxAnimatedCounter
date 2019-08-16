import {Directive, EventEmitter, Input, Output} from '@angular/core';

@Directive({
  selector: '[ngxACounter]'
})
export class NgxAnimatedCounterDirective {

  @Output() countChange = new EventEmitter<number>();
  @Output() countEnd = new EventEmitter();

  private _timer: any;
  private _duration: number;
  private _countTo: number;
  private _countFrom: number;
  private _step: number;

  /**
   * Duration of animation
   * @param duration - set duration in millisecond
   */
  @Input() set duration(duration: number) {
    this._duration = duration;
    this.run();
  }

  /**
   * Any start number
   * @param countTo - set countTo by number
   */
  @Input() set countTo(countTo: number) {
    this._countTo = countTo;
    this.run();
  }

  /**
   * Any end number
   * @param countFrom - set countFrom by number
   */
  @Input() set countFrom(countFrom: number) {
    this._countFrom = countFrom;
    this.run();
  }

  /**
   * How fast counter is updated
   * @param step - set step in millisecond
   */
  @Input() set step(step: number) {
    this._step = step;
    this.run();
  }

  run() {
    const _this = this;
    clearInterval(_this._timer);

    if (isNaN(_this._duration)) {
      return false;
    }

    if (isNaN(_this._step)) {
      return false;
    }

    if (isNaN(_this._countFrom)) {
      return false;
    }

    if (isNaN(_this._countTo)) {
      return false;
    }

    if (_this._step <= 0) {
      console.warn('Step tem de ser maior que 0.');
      return false;
    }
    if (_this._duration <= 0) {
      console.warn('Duration tem de ser maior que 0.');
      return false;
    }

    if (_this._step > _this._duration * 1000) {
      console.warn('Step tem de ser menor ou igual que a Duration.');
    }

    let intermediate = _this._countFrom;
    const increment = Math.round(Math.abs(_this._countTo - _this._countFrom) / ((_this._duration * 1000) / _this._step));

    _this.countChange.emit(intermediate);

    _this._timer = setInterval(function() {
      if (_this._countTo < _this._countFrom) {
        if (intermediate <= _this._countTo) {
          clearInterval(_this._timer);
          _this.countChange.emit(_this._countTo);
          _this.countEnd.emit();
        } else {
          _this.countChange.emit(intermediate);
          intermediate -= increment;
        }
      } else {
        if (intermediate >= _this._countTo) {
          clearInterval(_this._timer);
          _this.countChange.emit(_this._countTo);
          _this.countEnd.emit();
        } else {
          _this.countChange.emit(intermediate);
          intermediate += increment;
        }
      }
    }, _this._step);
  }
}
