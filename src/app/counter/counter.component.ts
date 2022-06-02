import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment(): number {
    this.count += 1;
    return this.count;
  }

  decrement(): number {
    this.count -= 1;
    return this.count;
  }

  reset(): number {
    this.count = 0;
    return this.count;
  }

}
