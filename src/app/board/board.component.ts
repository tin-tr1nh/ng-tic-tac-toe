import { Component, OnInit } from '@angular/core';

const BoardSize = 3;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  public boardValues: String[];
  public oIsNext: Boolean;
  public winner: String;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.boardValues = Array(9).fill('');
    this.oIsNext = false;
    this.winner = null;
  }

  get player() {
    return this.oIsNext ? 'O' : 'X';
  }

  makeMove(position: number) {
    if (this.boardValues[position] === '') {
      this.boardValues[position] = this.player;
      this.oIsNext = !this.oIsNext;
      let winner = this.calculateWinner(this.boardValues);

      if (winner !== false) {
        this.winner = winner;
      }
    }
  }

  calculateWinner(boardValues: String[]) {
    let winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of winLines) {
      let [i, j, k] = line;

      if (
        this.boardValues[i] !== '' &&
        this.boardValues[i] == this.boardValues[j] &&
        this.boardValues[j] === this.boardValues[k]
      ) {
        return this.boardValues[i];
      }
    }

    return false;
  }
}
