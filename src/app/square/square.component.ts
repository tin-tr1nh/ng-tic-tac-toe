import { Component, OnInit, Input } from '@angular/core';

type SquareValue = 'X' | 'O';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{ val }}
    </p>
  `,
  styles: [],
})
export class SquareComponent implements OnInit {
  @Input() val: SquareValue;

  constructor() {}

  ngOnInit(): void {}
}
