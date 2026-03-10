import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'; // IMPORTAMOS STORAGE

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carrito: any[] = [];
  private _storage: Storage | null = null; // VARIABLE PARA EL DISCO DURO

  constructor(private storage: Storage) {
    this.init(); // INICIALIZAMOS AL EMPEZAR
  }

  // FUNCIÓN ASÍNCRONA PARA ARRANCAR EL MOTOR DE GUARDADO
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    // CARGAMOS LO QUE HUBIERA GUARDADO DE ANTES
    const guardado = await this._storage.get('CARRITO_KEY');
    this.carrito = guardado || [];
  }

  getCarrito() {
    return this.carrito;
  }

  // GUARDAMOS Y ADEMÁS ESCRIBIMOS EN EL DISCO
  async agregarProducto(producto: any) {
    this.carrito.push(producto);
    await this._storage?.set('CARRITO_KEY', this.carrito); // GUARDA EN MEMORIA FÍSICA
    console.log('GUARDADO EN DISCO DURO');
  }


  async eliminarProducto(index: number) {
    // ELIMINAMOS EL PRODUCTO SEGÚN SU POSICIÓN EN LA LISTA
    this.carrito.splice(index, 1);
    
    // ACTUALIZAMOS EL DISCO DURO PARA QUE EL CAMBIO SEA PERMANENTE
    await this._storage?.set('CARRITO_KEY', this.carrito);
    console.log('PRODUCTO ELIMINADO Y DISCO ACTUALIZADO');
  }
  
}