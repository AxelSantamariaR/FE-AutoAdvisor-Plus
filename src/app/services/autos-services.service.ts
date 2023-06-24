import { Injectable } from '@angular/core';
import { IAutos } from '../interfaces/iautos';

@Injectable({
  providedIn: 'root'
})
export class AutosServicesService {

  constructor() { }

  autos: IAutos[] = [
    { id: 1, nombre: "Suzuki ZS", descripcion: "Auto compacto de diseño moderno y excelente rendimiento en la ciudad.",
      marca: "Suzuki", tipo: "Compacto", anio: 2023, edicion: "Edición Especial",
      precio: 25000, imagen: "imagen1", estado: true },
      
    { id: 2, nombre: "Nissan Central", descripcion: "Auto sedán espacioso con tecnología avanzada y gran confort de manejo.",
      marca: "Nissan", tipo: "Sedán", anio: 2023, edicion: "Edición Limitada",
      precio: 30000, imagen: "imagen2", estado: true },
      
    { id: 3, nombre: "Ford Explorer", descripcion: "SUV versátil y potente con capacidad para toda la familia y aventuras al aire libre.",
      marca: "Ford", tipo: "SUV", anio: 2023, edicion: "Edición Platinum",
      precio: 45000, imagen: "imagen3", estado: true },
      
    { id: 4, nombre: "Chevrolet Camaro", descripcion: "Auto deportivo icónico con un diseño llamativo y un motor de alto rendimiento.",
      marca: "Chevrolet", tipo: "Deportivo", anio: 2023, edicion: "Edición RS",
      precio: 40000, imagen: "imagen4", estado: true },
      
    { id: 5, nombre: "Toyota RAV4", descripcion: "SUV compacto con un estilo audaz y una excelente eficiencia en el consumo de combustible.",
      marca: "Toyota", tipo: "SUV", anio: 2023, edicion: "Edición Adventure",
      precio: 35000, imagen: "imagen5", estado: true },
      
    { id: 6, nombre: "Honda Civic", descripcion: "Auto sedán confiable y económico con un diseño aerodinámico y avanzada tecnología.",
      marca: "Honda", tipo: "Sedán", anio: 2023, edicion: "Edición LX",
      precio: 28000, imagen: "imagen6", estado: true },
      
    { id: 7, nombre: "Mazda CX-5", descripcion: "SUV elegante con un interior de lujo y rendimiento dinámico en cualquier terreno.",
      marca: "Mazda", tipo: "SUV", anio: 2023, edicion: "Edición Signature",
      precio: 38000, imagen: "imagen7", estado: true },
      
    { id: 8, nombre: "Volkswagen Golf", descripcion: "Auto compacto con un equilibrio perfecto entre estilo, rendimiento y comodidad.",
      marca: "Volkswagen", tipo: "Compacto", anio: 2023, edicion: "Edición Highline",
      precio: 32000, imagen: "imagen8", estado: true },
    
    { id: 9, nombre: "Ford Thunder", descripcion: "Un sedán elegante con un potente motor y comodidades de lujo.", 
      marca: "Ford", tipo: "Sedán", anio: 2022, edicion: "Edición Deluxe", 
      precio: 30000, imagen: "imagen9", estado: true },

    { id: 10, nombre: "Chevrolet Blaze", descripcion: "Un SUV versátil con capacidad para toda la familia y tecnología avanzada.", 
      marca: "Chevrolet", tipo: "SUV", anio: 2022, edicion: "Edición Premier", 
      precio: 32000, imagen: "imagen10", estado: true },
      
    { id: 11, nombre: "BMW Aurora", descripcion: "Un vehículo deportivo de lujo con líneas aerodinámicas y un rendimiento excepcional.", 
      marca: "BMW", tipo: "Deportivo", anio: 2022, edicion: "Edición Especial M", 
      precio: 60000, imagen: "imagen11", estado: true },
      
    { id: 12, nombre: "Toyota Veloce", descripcion: "Un hatchback ágil y eficiente en combustible, perfecto para la vida urbana.", 
      marca: "Toyota", tipo: "Hatchback", anio: 2022, edicion: "Edición Sport", 
      precio: 24000, imagen: "imagen12", estado: true },
      
    { id: 13, nombre: "Nissan Serene", descripcion: "Un sedán elegante y sofisticado con características de seguridad de vanguardia.", 
      marca: "Nissan", tipo: "Sedán", anio: 2022, edicion: "Edición Platinum", 
      precio: 28000, imagen: "imagen13", estado: true },

    { id: 14, nombre: "Honda Accord", descripcion: "Un sedán espacioso y cómodo con tecnología avanzada y gran eficiencia de combustible.", 
      marca: "Honda", tipo: "Sedán", anio: 2021, edicion: "Edición LX", 
      precio: 28000, imagen: "imagen14", estado: true },

    { id: 15, nombre: "Toyota RAV4", descripcion: "Un SUV compacto con tracción en las cuatro ruedas y amplio espacio de carga.", 
      marca: "Toyota", tipo: "SUV", anio: 2021, edicion: "Edición XLE",  
      precio: 32000, imagen: "imagen15", estado: true },

    { id: 16, nombre: "Ford Mustang GT", descripcion: "Un icónico automóvil deportivo con un potente motor y diseño aerodinámico.", 
      marca: "Ford", tipo: "Deportivo", anio: 2021, edicion: "Edición Premium", 
      precio: 45000, imagen: "imagen16", estado: true },

    { id: 17, nombre: "Chevrolet Silverado", descripcion: "Una camioneta pickup resistente y versátil con capacidad de remolque y carga excepcionales.",
      marca: "Chevrolet", tipo: "Camioneta", anio: 2021, edicion: "Edición LTZ", 
      precio: 38000, imagen: "imagen17", estado: true },

    { id: 18, nombre: "Ford Mustang", descripcion: "Un clásico automóvil deportivo con un diseño icónico y un potente motor V8.", 
      marca: "Ford", tipo: "Deportivo", anio: 2019, edicion: "Edición GT", 
      precio: 40000, imagen: "imagen18", estado: true },

    { id: 19, nombre: "Toyota Camry", descripcion: "Un sedán confiable y espacioso con características de seguridad destacadas.", 
      marca: "Toyota", tipo: "Sedán", anio: 2020, edicion: "Edición LE", 
      precio: 28000, imagen: "imagen19", estado: true },
      
    { id: 20, nombre: "Chevrolet Tahoe", descripcion: "Un SUV grande y potente con capacidad para toda la familia y versatilidad off-road.", 
      marca: "Chevrolet", tipo: "SUV", anio: 2015, edicion: "Edición LT", 
      precio: 35000, imagen: "imagen20", estado: true },
      
    { id: 21, nombre: "Volkswagen Beetle", descripcion: "Un automóvil compacto y retro con estilo único y divertido de conducir.", 
      marca: "Volkswagen", tipo: "Compacto", anio: 2005, edicion: "Edición Final", 
      precio: 15000, imagen: "imagen21", estado: true },
      
    { id: 22, nombre: "BMW X5", descripcion: "Un SUV de lujo con un rendimiento excepcional y comodidades de alta gama.", 
      marca: "BMW", tipo: "SUV", anio: 2018, edicion: "Edición M50i", 
      precio: 60000, imagen: "imagen22", estado: true },
      
    { id: 23, nombre: "Honda Civic", descripcion: "Un sedán compacto y económico con una reputación confiable y buena eficiencia de combustible.", 
      marca: "Honda", tipo: "Sedán", anio: 2012, edicion: "Edición EX", 
      precio: 18000, imagen: "imagen23", estado: true },
      
    { id: 24, nombre: "Mercedes-Benz C-Class", descripcion: "Una berlina de lujo con elegancia y tecnología avanzada.", 
      marca: "Mercedes-Benz", tipo: "Berlina", anio: 2017, edicion: "Edición AMG", 
      precio: 45000, imagen: "imagen24", estado: true },
      
    { id: 25, nombre: "Nissan Frontier", descripcion: "Una camioneta pickup resistente y versátil con capacidad de carga excepcional.", 
      marca: "Nissan", tipo: "Camioneta", anio: 2014, edicion: "Edición PRO-4X", 
      precio: 25000, imagen: "imagen25", estado: true },
      
    { id: 26, nombre: "Subaru Impreza", descripcion: "Un hatchback ágil, ideal para condiciones de conducción difíciles.", 
      marca: "Subaru", tipo: "Hatchback", anio: 2013, edicion: "Edición WRX", 
      precio: 22000, imagen: "imagen26", estado: true }
  ];

  getAutos(): IAutos[]{
    return this.autos
  }

  getAutosAntiguos(): IAutos[]{
    let autosList: IAutos[] = [];
    this.autos.forEach(elemento => {
      if(elemento.anio !== 2023 && elemento.anio !== 2022){
        autosList.push(elemento)
      }
    });
    return autosList
  }

  getAutosAnios(anio: number): IAutos[]{
    let autosList: IAutos[] = [];
    this.autos.forEach(elemento => {
      if(elemento.anio === anio){
        autosList.push(elemento)
      }
    });
    return autosList
  }

  searchId(id: number): IAutos {
    let auto!: IAutos;
    this.autos.forEach(elemento => {
      if (elemento.id == id) {
        auto = elemento;
      }
    });
    return auto;
  }

  searchAutos(nombre: string): IAutos[] {
    let autosList: IAutos[] = [];
    this.autos.forEach(elemento => {
      if (elemento.nombre.toLowerCase().includes(nombre.toLowerCase())) {
        autosList.push(elemento);
      }
    });
    return autosList;
  }

  addAuto(auto: IAutos){
    this.autos.push(auto)
  }

  updateAuto(auto: IAutos) {
    this.autos.forEach(elemento => {
      if (elemento.id === auto.id) {
        Object.assign(elemento, auto);
      }
    });
  }

  deleteAuto(id: number){
    this.autos.forEach(elemento => {
      if(elemento.id === id){
        elemento.estado = false
      }
    })
  }
  
}