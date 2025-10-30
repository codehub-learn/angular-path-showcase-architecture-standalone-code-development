import {Component, inject, Inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/core/header/header/header';
import {
  ExampleServiceWithRequiredAuthorization
} from './components/shared/services/example-service-with-required-authorization';
import {BACKEND_API_KEY, APP_CONFIG, REMOTE_CONFIG} from './init/tokens';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-path-showcase-architecture-standalone-code-development');
  BACKEND_API_KEY = inject(BACKEND_API_KEY);
  APP_CONFIG = inject(APP_CONFIG);
  REMOTE_CONFIG = inject(REMOTE_CONFIG);

  constructor() {
    console.error(`key: ${this.BACKEND_API_KEY}`)
    console.error(`title: ${this.APP_CONFIG.title}`)
    console.error(`REMOTE_CONFIG: ${this.REMOTE_CONFIG}`)
  }
}
