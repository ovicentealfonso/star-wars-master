import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: User = null;
  private userList: User[] = [];

  constructor(private _router: Router) { }

  /**
   * Devuelve true si el usuario esta identificado y
   * false en caso contrario.
   */
  isLogged(): boolean {
    this.loadStorage();
    if (this.user !== null) {
      return true;
    }
    return false;
  }

  /**
   * Comprueba los datos de acceso a la aplicación
   * @param userName Usuario
   * @param password Contraseña
   */
  login(userName: string, password: string) {
    // Cargamos el local Storage
    this.loadStorage();
    // @ts-ignore Se intenta obtener el usuario que tenga los datos del login
    this.user = this.userList.find(u => u._userName === userName && u._password === password );
    // Se comprueba si se ha encontrado el usuario del login
    if (this.user !== undefined && this.user !== null) {
      console.log('Usuario identificado');
      // Guardamos los datos en el local storage
      localStorage.setItem('user', JSON.stringify(this.user));
      // Se redirige el navegador
      this._router.navigate(['/ships']);
    } else {
      // Si no se encuentra al usuario (Login fallido)
      alert('Usuario incorrecto');
    }
  }

  /**
   * Carga el usuario y el listado de usuarios
   */
  loadStorage() {
    if ( localStorage.getItem('user') ) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    if ( localStorage.getItem('users') ) {
      this.userList = JSON.parse(localStorage.getItem('users'));
    }
  }

  /**
   * Registra un usuario nuevo
   * @param firstName Nombre
   * @param lastName Apellido
   * @param userName Usuario
   * @param password Contraseña
   */
  signUp(firstName: string, lastName: string, userName: string, password: string) {
    // Cargamos el local storage
    this.loadStorage();
    // Se crea el usuario
    this.user = new User(
      firstName,
      lastName,
      userName,
      password,
      this.userList.length + 1
    );
    // Se introduce el nuevo usuario
    this.userList.push(this.user);
    // Guardamos los datos en el local storage
    localStorage.setItem('user', JSON.stringify(this.user));
    localStorage.setItem('users', JSON.stringify(this.userList));
    // Redirige a la página con el listado de naves
    this._router.navigate(['/ships']);
  }
}
