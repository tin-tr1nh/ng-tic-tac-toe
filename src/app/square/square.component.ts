import { Component, OnInit, Input } from '@angular/core';

type SquareValue = 'X' | 'O';

@Component({
  selector: 'app-square',
  template: `
    <span>
      {{ val }}
    </span>
  `,
  styles: [],
})
export class SquareComponent implements OnInit {
  @Input() val: SquareValue;

  constructor() {}

  ngOnInit(): void {}
}
