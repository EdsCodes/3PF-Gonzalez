import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
  
  loginForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['johncodes@gmail.com', [Validators.required, Validators.email]],
      password: ['kalemi123321*', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    if(this.loginForm.invalid){
      alert('Por favor verifique el formulario, no es válido')
    } else {
      const data = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      };
      this.authService.login(data);
    }
  }
}