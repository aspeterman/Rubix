import { Panel } from '../views/panel';
import { Color, PanelPosition } from '../enums'

export class Cube {
  top: Panel;
  bottom: Panel;
  left: Panel;
  right: Panel;
  front: Panel;
  back: Panel;
  constructor() {

  }
  generateCube() {
    return(
    this.top = new Panel(Color.Red, PanelPosition.Top),
    this.bottom = new Panel(Color.Orange, PanelPosition.Bottom),
    this.left = new Panel(Color.Green, PanelPosition.Left),
    this.right = new Panel(Color.Blue, PanelPosition.Right),
    this.front = new Panel(Color.Yellow, PanelPosition.Front),
    this.back = new Panel(Color.White, PanelPosition.Back)
    )
  }
}