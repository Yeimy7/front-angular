import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../servicio/crud.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  Clientes: any;
  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerClientes().subscribe(respuesta => {
      console.log(respuesta);
      this.Clientes = respuesta;
    })
  }
  borrarCliente(id: any, iControl: any) {
    console.log(id);
    console.log(iControl)
    if(window.confirm("Desea eliminar al cliente?")){
      this.crudService.EliminarCliente(id).subscribe(respuesta => {
        console.log(respuesta);
        this.Clientes!.splice(iControl, 1)
      });
    }
    
  }

}
