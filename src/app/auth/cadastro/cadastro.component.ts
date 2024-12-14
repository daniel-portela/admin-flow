import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  cadastroForm: FormGroup;
  submitted = false;
  cepSuccess: boolean | undefined;
  cepError: boolean | undefined;
  http: any;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      city: ['', Validators.required],
      profession: ['', Validators.required],
      cep: ['', [Validators.required, Validators.maxLength(8)]],
    });
  }

  checkCep() {
    const cep = this.cadastroForm.controls['cep'].value;
    if (cep && cep.length === 8) {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(
        (data: any) => {
          if (data.erro) {
            this.cepError = true;
            this.cepSuccess = false;
          } else {
            this.cepError = false;
            this.cepSuccess = true;
            this.cadastroForm.controls['city'].setValue(data.localidade);
          }
        },
        () => {
          this.cepError = true;
          this.cepSuccess = false;
        }
      );
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
    }
  }
}
