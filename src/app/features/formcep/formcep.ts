import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CepService } from '../../core/services/cep-services';
import { Cep } from '../../shared/models/cep-model';
@Component({
  selector: 'app-formcep',
  imports: [ReactiveFormsModule],
  templateUrl: './formcep.html',
  styleUrl: './formcep.css',
})
export class Formcep {
  private cepService = inject(CepService);
  cepControl = new FormControl('', [Validators.required, Validators.pattern(/^\d{8}$/)]);
  endereco = signal<Cep | null>(null);
  loading = signal(false);
  erro = signal<string>('');
  buscar() {
    if (this.cepControl.invalid) {
      this.erro.set('Digite um CEP válido com 8 números.');
      return;
    }
    this.loading.set(true);
    this.erro.set('');
    this.endereco.set(null);
    const cep = this.cepControl.value!;
    this.cepService.buscarCep(cep).subscribe({
      next: (resposta) => {
        this.loading.set(false);
        if (resposta.erro) {
          this.erro.set('CEP não encontrado.');
          return;
        }
        this.endereco.set(resposta);
      },
      error: () => {
        this.loading.set(false);
        this.erro.set('Erro ao consultar API.');
      },
    });
  }
}
