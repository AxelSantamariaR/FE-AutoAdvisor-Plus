export interface ICita {
    id:         number,
    auto:       Auto,
    nombre:     string,
    telefono:   string,
    correo:     string,
    hora:       string,
    fecha:      Date,
    asesor:     Asesor,
    estado:     boolean
}


export interface Asesor {
    id:         number,
    nombre:     string
}

export interface Auto {
    id:         number,
    nombre:     string
}