import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent],
  styles: [`
    h1 {
      color: red;
    }
  `],
  template: `
    <!-- <router-outlet><router-outlet /> -->
    <h1>Curso Angular</h1>
    <div class = "theme-red">
    Antigo: <app-new-component></app-new-component>
    Novo: <app-new-component />
    </div>
  `,
})
export class AppComponent {}

//<router-outlet><router-outlet />
