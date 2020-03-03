import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthenticationService) {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  /**
   * Registra una nuevo usuario
   */
  register() {
    const firstName = this.registerForm.value.firstName;
    const lastName = this.registerForm.value.lastName;
    const userName = this.registerForm.value.userName;
    const password = this.registerForm.value.password;
    this.authService.signUp(firstName, lastName, userName, password);
  }

}
