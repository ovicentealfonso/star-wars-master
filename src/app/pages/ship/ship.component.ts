import { Component, OnInit, Input } from '@angular/core';
import { Ship } from '../../classes/ship';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {

  private ship: Ship = new Ship(
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

  constructor(private route: ActivatedRoute) {
    // Obtenemos el identificador de la nave de los parametros de la url
    if (this.route.snapshot.paramMap.get('id') !== null) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      console.log(id);
    }
  }

  ngOnInit() {
  }

  

}
