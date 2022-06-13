import { Component, OnInit } from '@angular/core';
/**
 * CounterComponent
 */
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  /**
   * Intial count is set to 0
   */
  public count: number = 0;

  /**
   * constructor is put into use to inject dependencies into the component class.
   */
  constructor() { }

  /**
   * ngOnInit is invoked only once when the directive is instantiated.
   */
  ngOnInit(): void {
  }

  /**
   * increment method
   * @returns number
   */
  increment(): number {
    this.count += 1;
    return this.count;
  }

  /**
   * decrement method
   * @returns number
   */
  decrement(): number {
    this.count -= 1;
    return this.count;
  }

  /**
   * reset method
   * @returns number
   */
  reset(): number {
    this.count = 0;
    return this.count;
  }

}
