import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { DbService } from '../../servicios/db.service';
import { Producto } from '../../models/producto';
import { Categoria } from '../../models/categoria';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.page.html',
  styleUrls: ['./editarproducto.page.scss'],
})
export class EditarProductoPage implements OnInit {
  
  productos: Producto[] = [];
  categorias: Categoria[] = [];
  producto: Producto = {
    id_producto: 0,
    Nombre: '',
    Precio: 0,
    Descripcion: '',
    Imagen: new Blob(), // Inicializamos como un Blob vacío
  };
  imagenURL: string | ArrayBuffer | null = null; // Para mostrar la imagen en la interfaz

  constructor(
    private dbService: DbService, 
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadProductos();
    this.loadCategorias();
  }

  async loadProductos() {
    this.productos = await this.dbService.getProductos();
  }

  async loadCategorias() {
    this.categorias = await this.dbService.getCategorias();
  }

  // Función para validar el precio
  validatePrecio(producto: Producto) {
    if (producto.Precio < 0) {
      producto.Precio = 0; // Establecer el precio a 0 si es negativo
      this.showToast('El precio no puede ser negativo.');
    }
  }

  async takePicture(producto: any) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64 // Imagen en formato Base64
    });
  
    const base64Image = 'data:image/jpeg;base64,' + image.base64String;
    producto.Imagen = base64Image; // Asigna la imagen al producto
  }
  
  // Actualiza la imagen en la vista previa
  setImagenURL(imagen: Blob | undefined) {
    if (imagen && imagen.size > 0) {
      this.imagenURL = URL.createObjectURL(imagen);
    } else {
      this.imagenURL = null;
    }

  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  async confirmAddProducto() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas añadir un nuevo producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Añadir',
          handler: () => {
            this.addProducto();
          },
        },
      ],
    });

    await alert.present();
  }

  async addProducto() {
    const nuevoProducto: Producto = {
      id_producto: 0, // El ID se autogenera en la base de datos
      Nombre: this.producto.Nombre || 'Nuevo Producto',
      Precio: this.producto.Precio || 0,
      Descripcion: this.producto.Descripcion || 'Descripción del Producto',
      Imagen: this.producto.Imagen // Ahora manejamos la imagen como Blob
    };

    await this.dbService.addProducto(nuevoProducto);
    this.loadProductos();
  }

  async confirmUpdateProducto(producto: Producto) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas guardar los cambios?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Guardar',
          handler: () => {
            this.updateProducto(producto);
          },
        },
      ],
    });

    await alert.present();
  }

  async updateProducto(producto: Producto) {
    await this.dbService.updateProducto(producto);
    this.loadProductos();
  }

  async confirmDeleteProducto(producto: Producto) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas eliminar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteProducto(producto.id_producto);
          },
        },
      ],
    });

    await alert.present();
  }

  async openCamera() {
    const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64 // Asegúrate de que sea Base64
    });

    const base64Image = 'data:image/jpeg;base64,' + image.base64String;
    this.producto.Imagen = base64Image; // Guarda la imagen en formato Base64
}

async guardarProducto() {
    const producto = {
        id_producto: this.producto.id_producto,
        Nombre: this.producto.Nombre,
        Descripcion: this.producto.Descripcion,
        Precio: this.producto.Precio,
        Imagen: this.producto.Imagen, // Asegúrate de que este campo esté en formato Base64
    };

    await this.dbService.updateProducto(producto);
    
}

  async deleteProducto(id_producto: number) {
    await this.dbService.deleteProducto(id_producto);
    this.loadProductos();
  }
}
