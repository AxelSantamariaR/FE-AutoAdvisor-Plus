import { Injectable } from '@angular/core';
import { IUsados, estado } from '../interfaces/iusados';

@Injectable({
  providedIn: 'root'
})
export class UsadosServicesService {

  constructor() { }

  usados: IUsados[] = [
    {
      id: 1, nombre: "Pedro", telefono: "0983746577", correo: "pedro@example.com", auto: "Chevrolet Cruze",
      anio: 2017, precio: 12000, descripcion: "El vehículo está en buen estado general y tiene bajo kilometraje.",
      imagen: "imagen1", estado: estado.esperando
    },
    {
      id: 2, nombre: "Laura", telefono: "0988121234", correo: "laura@example.com", auto: "Ford Focus",
      anio: 2015, precio: 10000, descripcion: "El vehículo ha sido bien mantenido y cuenta con historial de servicio completo.",
      imagen: "imagen2", estado: estado.rechazado
    },
    {
      id: 3, nombre: "Carlos", telefono: "0900812122", correo: "carlos@example.com", auto: "Volkswagen Golf",
      anio: 2016, precio: 11000, descripcion: "El vehículo está en excelente condición mecánica y tiene un interior impecable.",
      imagen: "imagen3", estado: estado.esperando
    },
    {
      id: 4, nombre: "María", telefono: "0909909898", correo: "maria@example.com", auto: "Toyota Camry",
      anio: 2014, precio: 9000, descripcion: "El vehículo ha sido propiedad de un solo dueño y se ha utilizado principalmente en carreteras.",
      imagen: "imagen4", estado: estado.esperando
    },
    {
      id: 5, nombre: "Javier", telefono: "0912342318", correo: "javier@example.com", auto: "Honda Accord",
      anio: 2013, precio: 8500, descripcion: "El vehículo tiene un motor potente y ofrece un manejo suave y cómodo.",
      imagen: "imagen5", estado: estado.aceptado
    },
    {
      id: 6, nombre: "Ana", telefono: "0988982345", correo: "ana@example.com", auto: "Nissan Sentra",
      anio: 2017, precio: 11000, descripcion: "El vehículo ha sido recientemente inspeccionado y cuenta con neumáticos nuevos.",
      imagen: "imagen6", estado: estado.esperando
    },
    {
      id: 7, nombre: "Luis", telefono: "0988292839", correo: "luis@example.com", auto: "Hyundai Elantra",
      anio: 2015, precio: 9500, descripcion: "El vehículo tiene un diseño moderno y cuenta con características de seguridad avanzadas.",
      imagen: "imagen7", estado: estado.esperando
    },
    {
      id: 8, nombre: "Sara", telefono: "0922812933", correo: "sara@example.com", auto: "Kia Optima",
      anio: 2016, precio: 10500, descripcion: "El vehículo ha sido bien cuidado y ofrece un excelente rendimiento en carretera.",
      imagen: "imagen8", estado: estado.rechazado
    }
  ];

  getUsados(): IUsados[]{
    return this.usados
  }

  addUsados(usados: IUsados){
    this.usados.push(usados)
  }

  acceptarUsados(id: number) {
    this.usados.forEach(elemento => {
      if (elemento.id === id) {
        elemento.estado = estado.aceptado
      }
    });
  }

  rechazarUsados(id: number){
    this.usados.forEach(elemento => {
      if(elemento.id === id){
        elemento.estado = estado.rechazado
      }
    })
  }
  
}
