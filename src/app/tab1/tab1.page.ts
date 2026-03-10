import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CartService } from '../services/cart';

// 1. IMPORTAMOS TODAS LAS PIEZAS NUEVAS DE IONIC
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButton, IonIcon, IonCard, IonCardHeader, 
  IonCardTitle, IonCardSubtitle, IonCardContent,
  IonGrid, IonRow, IonCol, IonBadge
} from '@ionic/angular/standalone'; 

import { addIcons } from 'ionicons';
import { cartOutline, addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  // 2. LE DECIMOS A ANGULAR QUE ESTÁ AUTORIZADO A USARLAS
  imports: [
    CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButton, IonIcon, IonCard, IonCardHeader, 
    IonCardTitle, IonCardSubtitle, IonCardContent,
    IonGrid, IonRow, IonCol, IonBadge
  ],
})
export class Tab1Page {
  // CATÁLOGO CON IMÁGENES REALES
  productos = [
    { id: 1, nombre: 'Portátil Gamer RTX', precio: 1200, foto: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=500&auto=format&fit=crop' },
    { id: 2, nombre: 'Ratón Pro Wireless', precio: 50, foto: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=500&auto=format&fit=crop' },
    { id: 3, nombre: 'Teclado Mecánico RGB', precio: 80, foto: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=500&auto=format&fit=crop' },
    { id: 4, nombre: 'Monitor Curvo 144Hz', precio: 250, foto: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500&auto=format&fit=crop' }
  ];

  constructor(public cartService: CartService) {
    // REGISTRAMOS LOS ICONOS BONITOS
    addIcons({ cartOutline, addCircleOutline });
  }

  agregarAlCarrito(producto: any) {
    this.cartService.agregarProducto(producto);
  }
}