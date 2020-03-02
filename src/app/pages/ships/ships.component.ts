import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  private ships = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor() { }

  ngOnInit() {
  }

}
