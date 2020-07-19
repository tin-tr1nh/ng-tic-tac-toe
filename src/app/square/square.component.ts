import { Component, OnInit, Input } from '@angular/core';

type SquareValue = 'X' | 'O';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!val"> {{ val }} </button>
    <button nbButton hero status='success' *ngIf="val === 'X'"> {{ val }} </button>
    <button nbButton hero status='info' *ngIf="val === 'O'"> {{ val }} </button>
  `,
  styles: [
    `
    button {
      font-size: 50px !important;
      display: block;
      width: 100%;
      height: 100%;
    }
    `
  ],
})
export class SquareComponent implements OnInit {
  @Input() val: SquareValue;

  constructor() {}

  ngOnInit(): void {}
}
