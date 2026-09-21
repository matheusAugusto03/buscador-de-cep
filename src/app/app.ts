import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formcep } from './features/formcep/formcep';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formcep],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('buscadordecep');
}
