import { Component } from '@angular/core';
import { Empleado } from './empleado.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados : any[]=[
    new Empleado("Facundo","Archondo", "Presidente",7500),
    new Empleado("Ana","Rodano", "Presidenta",7500),
    new Empleado("Richard","Perez", "Profesor",4500),
    new Empleado("Raul","Sinaloa", "Jefe",6500),
  ];
  cuadroNombre : string = "";
  cuadroApellido : string = "";
  cuadroCargo : string = "";
  cuadroSalario : number = 0;

  agregarEmpleado(){
    let nuevoEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo , this.cuadroSalario)
    this.empleados.push(nuevoEmpleado);
  }


}
