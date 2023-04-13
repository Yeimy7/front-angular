import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './componentes/listar-cliente/listar-cliente.component';
import { ListarVehiculoComponent } from './componentes/listar-vehiculo/listar-vehiculo.component';
import { AgregarVehiculoComponent } from './componentes/agregar-vehiculo/agregar-vehiculo.component';
import { EditarVehiculoComponent } from './componentes/editar-vehiculo/editar-vehiculo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'agregar-cliente'
  },
  {
    path: 'agregar-cliente',
    component: AgregarClienteComponent
  },
  {
    path:'listar-cliente',
    component:ListarClienteComponent
  },
  {
    path:'editar-cliente/:id',
    component:EditarClienteComponent
  },
  {
    path:'cliente/:id/listar-vehiculo',
    component:ListarVehiculoComponent
  },
  {
    path:'cliente/:id/agregar-vehiculo',
    component:AgregarVehiculoComponent
  },
  {
    path:'cliente/:id/editar-vehiculo/:idv',
    component:EditarVehiculoComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
