import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent],
  template: `
    <!-- <router-outlet><router-outlet /> -->
    <h1>Curso Angular</h1>
    Antigo: <app-new-component></app-new-component>
    Novo: <app-new-component />
  `,
})
export class AppComponent {}

//<router-outlet><router-outlet />
