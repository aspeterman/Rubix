import { Component, OnInit } from '@angular/core';
import { CombineLatestSubscriber } from 'rxjs/internal/observable/combineLatest';
import { Cube } from '../views/cube'

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {
  cube: Cube
  constructor() {
    this.cube = new Cube()
  }


  ngOnInit(): void {
  }

}
