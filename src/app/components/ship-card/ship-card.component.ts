import { Component, OnInit, Input } from '@angular/core';
import { Ship } from '../../classes/ship';

@Component({
  selector: 'app-ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.scss']
})
export class ShipCardComponent implements OnInit {

  @Input() ship: Ship = new Ship(
    'Executor',
    'Executor-class star dreadnought',
    'Kuat Drive Yards, Fondor Shipyards',
    '1143350000',
    '19000',
    'n/a',
    '279144',
    '38000',
    '250000000',
    '6 years',
    '2.0',
    '40',
    'Star dreadnought',
    '../../../assets/test.jpg'
  );

  constructor() { }

  ngOnInit() {
  }

}
