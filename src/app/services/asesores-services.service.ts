import { Injectable } from '@angular/core';
import { IAsesores } from '../interfaces/iasesores';

@Injectable({
  providedIn: 'root'
})
export class AsesoresServicesService {

  constructor() { }

  asesores: IAsesores[] = [
    {
      id: 1, nombres: "Pedro Gómez",
      descripcion: "Experto en asesoramiento de compra y venta de autos usados. Con más de 10 años de experiencia, puedo ayudarte a encontrar el auto perfecto para tus necesidades y obtener el mejor precio en tu venta. Contáctame para una asesoría personalizada.",
      aniosExperiencia: 10, especialidad: "Compra y venta de autos usados", idiomas: "Español, Inglés",
      fechaNac: new Date(1985, 6, 20), correo: "pedro@example.com", telefono: "0987654321",  imagen: "imagen1", estado: true
    },
    {
      id: 2, nombres: "Laura Rodríguez",
      descripcion: "Especialista en financiamiento de autos nuevos. Conoce todas las opciones disponibles para obtener el mejor préstamo o leasing de acuerdo a tus necesidades y capacidad de pago. Ponte en contacto y te guiaré en el proceso de adquirir tu nuevo vehículo.",
      aniosExperiencia: 8, especialidad: "Financiamiento de autos nuevos", idiomas: "Español",
      fechaNac: new Date(1990, 9, 15), correo: "laura@example.com", telefono: "0987123456",  imagen: "imagen2", estado: true
    },
    {
      id: 3, nombres: "Carlos López",
      descripcion: "Asesor especializado en autos clásicos y de colección. Con amplio conocimiento en restauración y valoración de vehículos antiguos, puedo ayudarte a encontrar el auto vintage de tus sueños. Contáctame para obtener asesoramiento personalizado y experto en autos clásicos.",
      aniosExperiencia: 12, especialidad: "Autos clásicos y de colección", idiomas: "Español, Inglés",
      fechaNac: new Date(1978, 4, 10), correo: "carlos@example.com", telefono: "0987123456",  imagen: "imagen3", estado: true
    },
    {
      id: 4, nombres: "María Torres",
      descripcion: "Especialista en asesoramiento de autos de lujo. Con amplia experiencia en el mercado de vehículos premium, puedo ayudarte a encontrar el auto de lujo que se adapte a tus gustos y necesidades. Contáctame para obtener un servicio exclusivo y personalizado.",
      aniosExperiencia: 10, especialidad: "Autos de lujo", idiomas: "Español, Inglés",
      fechaNac: new Date(1984, 8, 25), correo: "maria@example.com", telefono: "0987654321",  imagen: "imagen4", estado: true
    },
    {
      id: 5, nombres: "Javier Mendoza",
      descripcion: "Asesor especializado en autos deportivos y de alto rendimiento. Apasionado por los motores potentes y el diseño aerodinámico, puedo ayudarte a encontrar el auto deportivo que despierte tu espíritu de velocidad. Contáctame para una asesoría enfocada en autos deportivos.",
      aniosExperiencia: 6, especialidad: "Autos deportivos", idiomas: "Español",
      fechaNac: new Date(1992, 3, 5), correo: "javier@example.com", telefono: "0987123456",  imagen: "imagen5", estado: true
    },
    {
      id: 6, nombres: "Ana Ruiz",
      descripcion: "Experta en asesoramiento de autos familiares y SUV. Conoce las últimas tendencias en vehículos espaciosos y seguros para toda la familia. Puedo ayudarte a encontrar el auto perfecto para tus viajes y aventuras familiares. Contáctame para obtener una asesoría especializada.",
      aniosExperiencia: 8, especialidad: "Autos familiares y SUV", idiomas: "Español, Inglés",
      fechaNac: new Date(1987, 7, 12), correo: "ana@example.com", telefono: "0987654321",  imagen: "imagen6", estado: true
    },
    {
      id: 7, nombres: "Luis Hernández",
      descripcion: "Especialista en asesoramiento de autos eléctricos y ecológicos. Conoce las ventajas de la movilidad sostenible y te guiará en la elección del auto eléctrico que se ajuste a tus necesidades y estilo de vida. Contáctame para obtener asesoramiento en autos ecológicos.",
      aniosExperiencia: 4, especialidad: "Autos eléctricos y ecológicos", idiomas: "Español",
      fechaNac: new Date(1995, 1, 18), correo: "luis@example.com", telefono: "0987123456",  imagen: "imagen7", estado: true
    },
    {
      id: 8, nombres: "Sara López",
      descripcion: "Experta en asesoramiento de autos utilitarios y comerciales. Con amplia experiencia en vehículos para empresas y emprendedores, puedo ayudarte a encontrar el auto adecuado para tu negocio. Contáctame para obtener una asesoría especializada en autos utilitarios y comerciales.",
      aniosExperiencia: 10, especialidad: "Autos utilitarios y comerciales", idiomas: "Español",
      fechaNac: new Date(1982, 11, 30), correo: "sara@example.com", telefono: "0987654321",  imagen: "imagen8", estado: true
    }
  ];

  getAsesores(): IAsesores[] {
    return this.asesores;
  }

  addAsesor(asesor: IAsesores){
    this.asesores.push(asesor)
  }

  updateAsesor(asesor: IAsesores) {
    this.asesores.forEach(elemento => {
      if (elemento.id === asesor.id) {
        Object.assign(elemento, asesor);
      }
    });
  }

  deleteAsesor(id: number){
    this.asesores.forEach(elemento => {
      if(elemento.id === id){
        elemento.estado = false
      }
    })
  }
  
}
