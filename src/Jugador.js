class Jugador {
    constructor(id, nombre, posicion, puntuacion){
        this.id = id;
        this.nombre = nombre;
        this.posicion = posicion;
        this.puntuacion = puntuacion;
    }


    getId() {
        return this.id;
    }
    getNombre(){
        return this.nombre;
    }
    getPosicion(){
        return this.posicion;
    }
    getPuntuacion(){
        return this.puntuacion;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }
    setPosicion(pos){
        this.posicion = pos;
    }
    setPuntuacion(punt){
        this.puntuacion = punt;
    }
}
module.exports = Jugador;