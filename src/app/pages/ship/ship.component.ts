import { Component, OnInit, Input } from '@angular/core';
import { Ship } from '../../classes/ship';
import { ActivatedRoute } from '@angular/router';
import { ShipsService } from '../../services/ships.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {

  private ship: Ship;

  constructor(
    private route: ActivatedRoute,
    private shipservice: ShipsService
  ) {}

  ngOnInit() {
    // Obtenemos el identificador de la nave de los parametros de la url
    if (this.route.snapshot.paramMap.get('id') !== null) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      // Obtenemos los datos de la nave
      this.shipservice.getShip(id)
      .then(data => {
        this.ship = new Ship(
          id,
          data.name,
          data.model,
          data.manufacturer,
          data.cost_in_credits,
          data.length,
          data.max_atmosphering_speed,
          data.crew,
          data.passengers,
          data.cargo_capacity,
          data.consumables,
          data.hyperdrive_rating,
          data.mglt,
          data.starship_class
        );
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  

}
