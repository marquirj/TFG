class Jugador {
    constructor(id, nombre, posicion, puntuacion){
        this.id = id;
        this.nombre = nombre;
        this.posicion = posicion;
        this.puntuacion = puntuacion;
    }

    get nombre(){
        return this.nombre;
    }
    get posicion(){
        return this.posicion;
    }
    get puntuacion(){
        return this.puntuacion;
    }

    set nombre(nombre){
        this.nombre = nombre;
    }
    set posicion(pos){
        this.posicion = pos;
    }
    set puntuacion(punt){
        this.puntuacion = punt;
    }
}
