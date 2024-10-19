import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { DbService } from '../../servicios/db.service';
import { Producto } from '../../models/producto';
import { Categoria } from '../../models/categoria';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

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

  // Función para capturar o seleccionar una imagen
  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl, // Obtenemos la imagen como Data URL
        source: CameraSource.Prompt, // Opción de seleccionar de cámara o galería
      });

      if (image.dataUrl) {
        const response = await fetch(image.dataUrl);
        const blob = await response.blob();
        this.producto.Imagen = blob; // Asigna el Blob al campo de la imagen
        this.setImagenURL(blob); // Actualiza la vista
      } else {
        console.error('No se pudo obtener la URL de la imagen');
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
      const toast = await this.toastController.create({
        message: 'Error al tomar la foto.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }

  // Actualiza la imagen en la vista previa
  setImagenURL(imagen: Blob | undefined) {
    if (imagen && imagen.size > 0) {
      this.imagenURL = URL.createObjectURL(imagen);
    } else {
      this.imagenURL = null;
    }
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

  async deleteProducto(id_producto: number) {
    await this.dbService.deleteProducto(id_producto);
    this.loadProductos();
  }
}
