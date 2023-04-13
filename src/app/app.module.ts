import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './componentes/listar-cliente/listar-cliente.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarVehiculoComponent } from './componentes/listar-vehiculo/listar-vehiculo.component';
import { EditarVehiculoComponent } from './componentes/editar-vehiculo/editar-vehiculo.component';
import { AgregarVehiculoComponent } from './componentes/agregar-vehiculo/agregar-vehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    ListarClienteComponent,
    ListarVehiculoComponent,
    EditarVehiculoComponent,
    AgregarVehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
