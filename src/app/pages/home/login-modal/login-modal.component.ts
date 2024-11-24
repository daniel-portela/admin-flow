import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})

export class LoginModalComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return field ? field.invalid && field.touched : false;
  }

  isFieldValid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return field ? field.valid && field.touched : false;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (email === 'teste@teste.com' && password === '123456') {
        console.log('Login bem-sucedido');
        this.loginError = null;
      } else {
        this.loginError = 'E-mail ou senha inválidos';
        this.loginForm.get('password')?.setErrors({ incorrect: true });
      }
    } else {
      Object.keys(this.loginForm.controls).forEach((key) => {
        const control = this.loginForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
}
