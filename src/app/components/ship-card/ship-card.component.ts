import { Component, OnInit, Input } from '@angular/core';
import { Ship } from '../../classes/ship';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.scss']
})
export class ShipCardComponent implements OnInit {

  @Input() ship: Ship;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  /**
   * Redirecciona el navegador a la página con los detalles de la nave
   */
  public showDetails() {
    this._router.navigate(['/ship', this.ship.id]);
  }

}
