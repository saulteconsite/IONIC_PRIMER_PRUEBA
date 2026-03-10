import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone'; // IMPORTAMOS LA ESTRATEGIA QUE TE FALTABA

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage-angular';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, // ESTO YA NO TENDRÁ ERROR ROJO
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), // MAPA DE RUTAS ACTIVO
    importProvidersFrom(IonicStorageModule.forRoot()) // MOTOR DE ALMACENAMIENTO
  ],
});