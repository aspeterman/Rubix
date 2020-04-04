import { Cell } from '../views/cell';
import { Color, PanelPosition } from '../enums'

export class Panel {
  cells: Cell[][];

  constructor(color: Color, position: PanelPosition) {
    this.cells = [
      [new Cell(color, position), new Cell(color, position), new Cell(color, position)],
      [new Cell(color, position), new Cell(color, position), new Cell(color, position)],
      [new Cell(color, position), new Cell(color, position), new Cell(color, position)],
    ];
  }
  startingPosition() {
    this.cells = [
      [this.cells[2][0], this.cells[1][0], this.cells[0][0]],
      [this.cells[2][1], this.cells[1][1], this.cells[0][1]],
      [this.cells[2][2], this.cells[1][2], this.cells[0][2]]
    ];
  }

}