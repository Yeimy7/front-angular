import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';
import { Vehiculo } from './Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = 'http://localhost:8000/api/clientes/';
  APIV:string='http://localhost:8000/api/vehiculos/'
  constructor(private clienteHttp: HttpClient) { }

  AgregarCliente(datosCliente: Cliente): Observable<any> {
    return this.clienteHttp.post(this.API, datosCliente);
  }

  ObtenerClientes(){
    return this.clienteHttp.get(this.API);
  }

  EliminarCliente(id:any): Observable<any> {
    return this.clienteHttp.delete(this.API+id);
  }
  ObtenerCliente(id:any): Observable<any> {
    return this.clienteHttp.get(this.API+id);
  }
  EditarCliente(id:any, datosCliente: any): Observable<any> {
    return this.clienteHttp.put(this.API+id, datosCliente);
  }
  ObtenerVehiculos(id:any){
    return this.clienteHttp.get(this.API+id);
  }
  EliminarVehiculo(id:any): Observable<any> {
    return this.clienteHttp.delete(this.APIV+id);
  }
  AgregarVehiculo(datosVehiculo: Vehiculo): Observable<any> {
    return this.clienteHttp.post(this.APIV, datosVehiculo);
  }
  ObtenerVehiculo(id:any): Observable<any> {
    return this.clienteHttp.get(this.APIV+id);
  }
  EditarVehiculo(id:any, datosVehiculo: any): Observable<any> {
    return this.clienteHttp.put(this.APIV+id, datosVehiculo);
  }

}
