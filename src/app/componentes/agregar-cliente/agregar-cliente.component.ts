import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../servicio/crud.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  formularioClientes: FormGroup;

  constructor(
    public formulario: FormBuilder,
    private crudService: CrudService,
    private ruteador:Router

  ) {
    this.formularioClientes = this.formulario.group({
      nombre: [''],
      paterno: [''],
      materno: [''],
      tipoDoc: [''],
      docIdentidad: [''],
      fecNacimiento: [''],
      genero: ['']

    })
  }

  ngOnInit(): void {
  }
  enviarDatos(): any {
    console.log('me presionaste')
    console.log(this.formularioClientes.value);
    this.crudService.AgregarCliente(this.formularioClientes.value).subscribe(respuesta=>{
      this.ruteador.navigateByUrl('/listar-cliente');
    });
  }

}
