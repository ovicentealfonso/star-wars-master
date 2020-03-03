import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private _router: Router
  ) { }

  canActivate(): boolean {
    console.log('Login Guard');
    if ( this.authService.isLogged() ) {
      console.log('Login Guard OK');
      return true;
    } else {
      console.log('Login Guard Not Passed');
      this._router.navigate(['/login']);
      return false;
    }
  }

}
