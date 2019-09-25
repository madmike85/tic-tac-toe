class TicTacToe {
  constructor() {
    this.game = [[null, null, null], [null, null, null], [null, null, null]];
    this.player = 'x';
    this.turns = 9;
  }

  getCurrentPlayerSymbol() {
    return this.player;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.game[rowIndex][columnIndex]) {
      this.game[rowIndex][columnIndex] = this.player;
      this.player = this.player === 'x' ? 'o' : 'x';
      this.turns--;
      if (this.turns < 0) this.turns = 0;
    }
  }

  isFinished() {
    return Boolean(this.getWinner()) || this.noMoreTurns();
  }

  findWinner(player) {
    if (
      (this.game[0][0] === player && this.game[0][1] === player && this.game[0][2] === player) ||
      (this.game[1][0] === player && this.game[1][1] === player && this.game[1][2] === player) ||
      (this.game[2][0] === player && this.game[2][1] === player && this.game[2][2] === player) ||
      (this.game[0][0] === player && this.game[1][0] === player && this.game[2][0] === player) ||
      (this.game[0][1] === player && this.game[1][1] === player && this.game[2][1] === player) ||
      (this.game[0][2] === player && this.game[1][2] === player && this.game[2][2] === player) ||
      (this.game[0][0] === player && this.game[1][1] === player && this.game[2][2] === player) ||
      (this.game[0][2] === player && this.game[1][1] === player && this.game[2][0] === player)
    ) {
      return player;
    }
    return false;
  }

  getWinner() {
    if (this.findWinner('x')) return 'x';
    else if (this.findWinner('o')) return 'o';
    else return null;
  }

  noMoreTurns() {
    return this.turns === 0;
  }

  isDraw() {
    return this.isFinished() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.game[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
