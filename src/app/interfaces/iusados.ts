export enum estado { esperando, aceptado, rechazado }

export interface IUsados {
    id:             number,
    nombre:         string,
    telefono:       string,
    correo:         string,
    auto:           string,
    anio:           number,
    precio?:        number,
    descripcion:    string,
    imagen:         string,
    estado:         estado
}
