import { Component, OnInit } from '@angular/core';
import { ShipsService } from '../../services/ships.service';
import { Ship } from '../../classes/ship';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  private ships: Ship[] = [];
  private nextPage: string = null;

  constructor(private shipservice: ShipsService) { }

  ngOnInit() {
    this.getShips();
  }

  /**
   * Obtiene el listado de naves correspondientes a una página del proveedor
   * de información y la almacena en la variable local.
   * De manera opcional se puede mandar la url a una página concreta.
   * @param page URL con la página concreta de la que se quiere obtener la información (opcional)
   */
  private getShips(page?: string) {
    // Realizamos una petición para obtener los datos de las naves
    this.shipservice.getShips(page)
      .then(shipData => {
        console.log(shipData);
        this.nextPage = shipData.next;
        for (const ship of shipData.results) {
          this.ships.push(this.createShip(ship));
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  /**
   * Se crea un objeto de tipo Ship a raiz de la información obtenido
   * en formato JSON
   * @param shipData Información de la nave en formato JSON
   */
  private createShip(shipData: any): Ship {
    // Obtenemos el identificador de la nave
    const id = shipData.url.match(/\d+/)[0];
    console.log('Nave:' + id);
    // Se crea el objeto nave y se devuelve
    return new Ship(
      id,
      shipData.name,
      shipData.model,
      shipData.manufacturer,
      shipData.cost_in_credits,
      shipData.length,
      shipData.max_atmosphering_speed,
      shipData.crew,
      shipData.passengers,
      shipData.cargo_capacity,
      shipData.consumables,
      shipData.hyperdrive_rating,
      shipData.mglt,
      shipData.starship_class
    );
  }

  /**
   * Se obtiene la información de la siguiente página
   */
  public getMore() {
    if (this.nextPage !== null) {
      this.getShips(this.nextPage);
    }
  }

}
