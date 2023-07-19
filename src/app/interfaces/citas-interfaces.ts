export interface ICita {
    id_Cita:            number,
    auto:               string,
    nombresCliente:     string,
    telefono:           string,
    correo:             string,
    hora:               string,
    fecha:              Date,
    nombresAsesor:      string,
    estado:             boolean
}

export interface ICitaPost {
    asesorId_Asesor:    number,
    horarioId_Horario:  number,
    autoId_Auto:        number,
    nombresCliente:     string,
    telefono:           string,
    correo:             string,
    fecha:              Date
}

export interface ICitaPut {
    id_Cita:            number,
    Id_Horario:         number,
    fecha:              Date
}
