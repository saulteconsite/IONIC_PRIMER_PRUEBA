import { Component } from '@angular/core';
// ESTO ES CLAVE: DEBE VENIR DE /standalone, NO DE @ionic/angular a secas
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}