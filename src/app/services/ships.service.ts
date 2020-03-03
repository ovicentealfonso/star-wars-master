import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(private http: HttpClient) { }

  /**
   * Devuelve una promesa con el listado con los datos de las naves.
   * Opcionalmente, se puede enviar el identificador de una pagina del listado
   * para recibir los datos de las naves pertenecientes a dicha pagina
   * @param nextPage Número de página (optional)
   */
  public getShips(nextPage?: string): Promise<any> {
    return new Promise( (resolve, reject) => {
      // Declaramos la url a la que hay que realizar la petición
      let url = '';
      if (nextPage !== undefined && nextPage !== null) {
        url = nextPage;
      } else {
        url = environment.shipInfoServerURL;
      }
      // Realizamos la petición al servidor
      this.http.get(url).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  /**
   * Devuelve una promesa con los datos del id de nave proporcionado
   * @param shipId Identificador de la nave
   */
  public getShip(shipId: number): Promise<any> {
    return new Promise( (resolve, reject) => {
      // Declaramos la url a la que hay que realizar la petición
      const url = `${ environment.shipInfoServerURL}` + shipId;
      // Realizamos la petición al servidor
      this.http.get(url).subscribe((data: any) => {
        resolve(data);
      });
    });
  }
}
