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
  
  {
    path: 'producto2',
    loadChildren: () => import('./pages/producto2/producto2.module').then( m => m.Producto2PageModule)
  },
  {
    path: 'producto3',
    loadChildren: () => import('./pages/producto3/producto3.module').then( m => m.Producto3PageModule)
  },
  {
    path: 'producto4',
    loadChildren: () => import('./pages/producto4/producto4.module').then( m => m.Producto4PageModule)
  },
  {
    path: 'producto5',
    loadChildren: () => import('./pages/producto5/producto5.module').then( m => m.Producto5PageModule)
  },

  {
    path: 'home-admin',
    loadChildren: () => import('./pages/home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
  },
  {
    path: 'producto6',
    loadChildren: () => import('./pages/producto6/producto6.module').then( m => m.Producto6PageModule)
  },
  {
    path: 'producto7',
    loadChildren: () => import('./pages/producto7/producto7.module').then( m => m.Producto7PageModule)
  },
  {
    path: 'producto8',
    loadChildren: () => import('./pages/producto8/producto8.module').then( m => m.Producto8PageModule)
  },
  {
    path: 'producto9',
    loadChildren: () => import('./pages/producto9/producto9.module').then( m => m.Producto9PageModule)
  },
  {
    path: 'producto10',
    loadChildren: () => import('./pages/producto10/producto10.module').then( m => m.Producto10PageModule)
  },
  {
    path: 'producto11',
    loadChildren: () => import('./pages/producto11/producto11.module').then( m => m.Producto11PageModule)
  },
  {
    path: 'producto12',
    loadChildren: () => import('./pages/producto12/producto12.module').then( m => m.Producto12PageModule)
  },
  {
    path: 'producto13',
    loadChildren: () => import('./pages/producto13/producto13.module').then( m => m.Producto13PageModule)
  },
  {
    path: 'producto14',
    loadChildren: () => import('./pages/producto14/producto14.module').then( m => m.Producto14PageModule)
  },
  {
    path: 'producto15',
    loadChildren: () => import('./pages/producto15/producto15.module').then( m => m.Producto15PageModule)
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
