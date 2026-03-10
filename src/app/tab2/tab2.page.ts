import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonList, IonItem, IonLabel, 
  IonFooter, IonButton, IonIcon, IonThumbnail,
  IonCard
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; 
import { CartService } from '../services/cart'; 
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { trashOutline, cartOutline, cardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonList, IonItem, IonLabel, 
    IonFooter, IonButton, CommonModule, RouterModule,
    IonIcon, IonThumbnail, IonCard
  ]
})
export class Tab2Page {

  constructor(public cartService: CartService) {
    // REGISTRAMOS LOS ICONOS
    addIcons({ trashOutline, cartOutline, cardOutline });
  }

  get total() {
    return this.cartService.getCarrito().reduce((acc, prod) => acc + prod.precio, 0);
  }

  finalizarCompra() {
    alert('¡Compra realizada con éxito! Gracias por confiar en Tech Store.');
  }
}