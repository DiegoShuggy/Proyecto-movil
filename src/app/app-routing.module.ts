import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },

  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/agregar/agregar.module').then(m => m.AgregarPageModule)
  },
  {
    path: 'categoria1',
    loadChildren: () => import('./pages/categoria1/categoria1.module').then( m => m.Categoria1PageModule)
  },
  {
    path: 'categoria2',
    loadChildren: () => import('./pages/categoria2/categoria2.module').then( m => m.Categoria2PageModule)
  },
  {
    path: 'categoria3',
    loadChildren: () => import('./pages/categoria3/categoria3.module').then( m => m.Categoria3PageModule)
  },
  {
    path: 'producto1',
    loadChildren: () => import('./pages/producto1/producto1.module').then( m => m.Producto1PageModule)
  },
  
  
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
    { path: 'products/categoria1', loadChildren: () => import('./pages/categoria1/categoria1.module').then(m => m.Categoria1PageModule) },
    { path: 'products/categoria2', loadChildren: () => import('./pages/categoria2/categoria2.module').then(m => m.Categoria2PageModule) },
    { path: 'products/categoria3', loadChildren: () => import('./pages/categoria3/categoria3.module').then(m => m.Categoria3PageModule) },
    

  {
    path: 'gestion-categorias',
    loadChildren: () => import('./pages/gestion-categorias/gestion-categorias.module').then( m => m.GestionCategoriasPageModule)
  },
  
  {
    path: 'gestion-productos',
    loadChildren: () => import('./pages/gestion-productos/gestion-productos.module').then( m => m.GestionProductosPageModule)
  },

  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./pages/address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./pages/pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'confirmacion',
    loadChildren: () => import('./pages/confirmacion/confirmacion.module').then( m => m.ConfirmacionPageModule)
  },
  {
    path: 'seguimiento',
    loadChildren: () => import('./pages/seguimiento/seguimiento.module').then( m => m.SeguimientoPageModule)
  },

  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },

  {
    path: 'recuperarc',
    loadChildren: () => import('./pages/recuperarc/recuperarc.module').then( m => m.RecuperarcPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'editarproducto',
    loadChildren: () => import('./pages/editarproducto/editarproducto.module').then( m => m.EditarProductoPageModule)
  },
  {
    path: 'editarcategoria',
    loadChildren: () => import('./pages/editarcategoria/editarcategoria.module').then( m => m.EditarcategoriaPageModule)
  },

  {
    path: 'favoritos',
    loadChildren: () => import('./pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },

  {
    path: 'categoria/:id', loadChildren: () => import('./pages/categoria/categoria.module').then(m => m.CategoriaPageModule)
  },

  {
    path: 'productos/:id',
    loadChildren: () => import('./pages/productos/productos.module').then(m => m.ProductosPageModule)
  },

  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundPageModule)
  },
  




 

 

 



 






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
