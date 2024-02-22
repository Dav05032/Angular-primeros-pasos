import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>

  `
})

export class counterComponents{
  public title: string = 'Hola mundo';
  public counter: number = 10;

  increaseBy(value: number): void{
    this.counter += value
  }

  decreaseBy(value: number): void{
    this.counter -= value
  }

  reset(valueReset: number = 10): void{
    this.counter = valueReset;
  }

}
