import { Component, OnInit } from '@angular/core';

const BoardSize = 3;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public boardValues : String[][];


  constructor() {
    this.boardValues = [];
    for(let i = 0; i < BoardSize; i++) {
      this.boardValues[i] = [];
      for (let j = 0; j < BoardSize; j++) {
        this.boardValues[i].push(Math.random() > 0.5 ? 'X' : 'O');
      }
    }
  }

  ngOnInit(): void {
  }

}
