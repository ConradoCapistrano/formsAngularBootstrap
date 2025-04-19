import { Routes } from '@angular/router';
import { MuralComponent } from './pages/mural/mural.component';
import { CriarFormularioComponent } from './pages/criar-formulario/criar-formulario.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mural',
    pathMatch: 'full'
  },
  {
    path: 'criar-formulario',
    loadComponent: () => import('./pages/criar-formulario/criar-formulario.component').then(m => m.CriarFormularioComponent)
  },
  {
    path: 'mural',
    component: MuralComponent
  },
  {
    path: 'editar-formulario/:id',
    loadComponent: () => import('./pages/editar-formulario/editar-formulario.component').then(m => m.EditarFormularioComponent)
  }
]