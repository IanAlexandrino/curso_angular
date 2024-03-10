import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent ],
  styles: [`
    h1 {
      color: red;
    }
  `],
  template: `
    <!-- <router-outlet><router-outlet /> -->
    <h1>Curso Angular</h1>
    <app-template-binding />
    <!-- <div class = "theme-red">
    Antigo: <app-new-component></app-new-component>
    Novo: <app-new-component />
    </div> -->
  `,
})
export class AppComponent {}

//<router-outlet><router-outlet />
