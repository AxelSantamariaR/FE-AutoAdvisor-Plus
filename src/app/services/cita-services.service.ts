import { Injectable } from '@angular/core';
import { ICita } from '../interfaces/icita';

@Injectable({
  providedIn: 'root'
})
export class CitaServicesService {

  constructor() { }

  citas: ICita[] = [
    {
      id: 1, auto: { id: 1, nombre: 'Suzuki ZS' }, nombre: "Juan Pérez", telefono: "0987654321", correo: "juan@example.com",
      hora: "09:00", fecha: new Date(2023, 6, 1), asesor: { id: 5, nombre: 'Javier Mendoza'}, estado: true
    },
    {
      id: 2, auto: { id: 2, nombre: 'Nissan Central' }, nombre: "María Rodríguez", telefono: "0987123456", correo: "maria@example.com",
      hora: "14:00", fecha: new Date(2023, 6, 5), asesor: { id: 7, nombre: 'Luis Hernández'}, estado: true
    },
    {
      id: 3, auto: { id: 3, nombre: 'Ford Explorer' }, nombre: "Carlos Gómez", telefono: "0987654321", correo: "carlos@example.com",
      hora: "11:00", fecha: new Date(2023, 8, 10), asesor: { id: 8, nombre: 'Sara López'}, estado: true
    },
    {
      id: 4, auto: { id: 4, nombre: 'Chevrolet Camaro' },  nombre: "Ana Torres", telefono: "0987123456", correo: "ana@example.com",
      hora: "15:00", fecha: new Date(2023, 10, 15), asesor: { id: 1, nombre: 'Pedro Gómez'}, estado: true
    },
    {
      id: 5, auto: { id: 6, nombre: 'Honda Civic' }, nombre: "Pedro López", telefono: "0987654321", correo: "pedro@example.com",
      hora: "10:00", fecha: new Date(2023, 12, 20), asesor: { id: 3, nombre: 'Carlos López'}, estado: true
    },
    {
      id: 6, auto: { id: 1, nombre: 'BMW Aurora' }, nombre: "Laura Gutiérrez", telefono: "0987123456", correo: "laura@example.com",
      hora: "12:00", fecha: new Date(2023, 6, 25), asesor: { id: 2, nombre: 'Laura Rodríguez'}, estado: true
    },
    {
      id: 7, auto: { id: 1, nombre: 'Ford Mustang GT' }, nombre: "Javier Torres", telefono: "0987654321", correo: "javier@example.com",
      hora: "16:00", fecha: new Date(2023, 6, 30), asesor: { id: 6, nombre: 'Ana Ruiz'}, estado: true
    }
  ];

  getCitas(): ICita[] {
    return this.citas;
  }

  addAsesor(citas: ICita){
    this.citas.push(citas)
  }

  updateCita(cita: ICita) {
    this.citas.forEach(elemento => {
      if (elemento.id === cita.id) {
        Object.assign(elemento, cita);
      }
    });
  }

  deleteCita(id: number){
    this.citas.forEach(elemento => {
      if(elemento.id === id){
        elemento.estado = false
      }
    })
  }
}
