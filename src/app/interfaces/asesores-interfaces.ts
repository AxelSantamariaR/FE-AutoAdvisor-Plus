export interface IAsesor {
    id_Asesor?:         number,
    nombres:            string,
    descripcion:        string,
    aniosExperiencia:   number,
    especialidad:       number,
    idiomas:            string,
    fechaNac:           Date,
    correo:             string,
    telefono:           string,
    imagen:             string,
    estado?:            boolean
}
