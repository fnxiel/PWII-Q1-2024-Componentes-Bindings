import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ContadorComponent } from './app/contador/contador.component'
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContadorComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-contador/>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
