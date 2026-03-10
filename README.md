# 🛒 E-Shop Lite

Una aplicación móvil híbrida construida con **Ionic** y **Angular** que simula una tienda de tecnología con un carrito de compras funcional. 

## 🛠️ Tecnologías y Lenguajes Utilizados

Este proyecto utiliza el stack moderno de desarrollo web aplicado a móviles:

* **HTML5:** Para estructurar la interfaz de usuario (tarjetas, listas, botones).
* **SCSS (CSS):** Para los estilos visuales específicos (aunque Ionic ya provee un diseño nativo excelente por defecto).
* **TypeScript:** El lenguaje principal para la lógica. Es un superconjunto de JavaScript que añade tipado estricto, lo que nos ayuda a evitar errores antes de ejecutar la app.
* **Angular (v19+):** El framework base. En este proyecto utilizamos la arquitectura de **Standalone Components**, lo que significa que cada página gestiona sus propias dependencias sin necesidad de usar los antiguos `NgModules`.
* **Ionic Framework:** La librería de componentes UI que hace que la web parezca una app nativa (iOS y Android).
* **Ionic Storage:** Una base de datos local (basada en IndexedDB) para guardar los datos del carrito de forma persistente.

---

## 🏗️ Cómo funciona internamente

La aplicación sigue un patrón de diseño basado en servicios para compartir información entre diferentes pantallas.

1.  **Cart Service (`cart.service.ts`):** Es el "cerebro" central. Mantiene un array con los productos que el usuario va añadiendo. Además, se conecta al almacenamiento del dispositivo para guardar y cargar los datos cada vez que se abre la app.
2.  **Tab 1 (Tienda):** Se encarga de mostrar el catálogo de productos usando una rejilla (`ion-grid`) y tarjetas (`ion-card`). Al pulsar "Añadir al carrito", envía el producto al `Cart Service`.
3.  **Tab 2 (Carrito):** Está "suscrita" al `Cart Service`. Muestra los productos añadidos, calcula el total sumando los precios, y permite eliminar productos de la lista actualizando la base de datos local en tiempo real.

---

## 🗂️ Estructura del Proyecto (Template por defecto)

El proyecto se generó usando la plantilla de **Tabs** (Pestañas) de Ionic. Las partes más importantes son:

* `src/index.html`: El punto de entrada principal de la web.
* `src/main.ts`: Donde arranca la aplicación de Angular.
* `src/app/app.component.ts`: El componente raíz que envuelve toda la app.
* `src/app/app.routes.ts`: El mapa de navegación. Define qué componente cargar según la URL.
* `src/app/tabs/`: Contiene la barra de navegación inferior (TabBar) que conecta Tab1 y Tab2.

---

## 🚀 Pasos que seguimos para construir el proyecto

1.  **Inicialización:** Creamos el proyecto con la CLI de Ionic usando el comando `ionic start EShopLite tabs --type=angular --standalone`.
2.  **Instalación del Storage:** Añadimos `@ionic/storage-angular` e importamos sus proveedores en `main.ts` para habilitar el guardado de datos.
3.  **Creación del Servicio:** Programamos `CartService` con las funciones `init()`, `getCarrito()`, `agregarProducto()` y `eliminarProducto()`.
4.  **Diseño de la Tienda (Tab 1):** * Definimos un array de objetos (productos) con IDs, nombres, precios y URLs de imágenes reales.
    * Diseñamos la interfaz usando `<ion-grid>`, `<ion-row>`, `<ion-col>` para hacerla responsive, e `<ion-card>` para mostrar cada producto de forma atractiva.
5.  **Diseño del Carrito (Tab 2):**
    * Implementamos lógica condicional (`*ngIf`) para mostrar un mensaje amigable si el carrito está vacío.
    * Usamos `<ion-list>` y `<ion-item>` para mostrar los productos añadidos.
    * Añadimos un botón de borrado rápido (`ion-icon` de papelera) conectado a la función de eliminar.
    * Creamos un footer (`<ion-footer>`) fijo en la parte inferior que calcula dinámicamente el precio total de la compra.
6.  **Resolución de Dependencias:** Aprendimos que en Angular Standalone, cada etiqueta nueva de Ionic usada en el HTML (como `ion-card` o `ion-badge`) debe importarse explícitamente en el array `imports: []` del archivo TypeScript del componente.

---

## 💻 Cómo ejecutar el proyecto

Para correr este proyecto en tu entorno local, abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
ionic serve
