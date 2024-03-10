import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <!-- <router-outlet><router-outlet /> -->
    <h1>Curso Angular</h1>
    <h2>Components</h2>
  `,
})
export class AppComponent {}

//<router-outlet><router-outlet />
