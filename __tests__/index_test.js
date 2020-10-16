var Jugador  = require('../src/Jugador.js');
assert = require('assert');
jugador_nuevo = new Jugador(1,'Tania','Defensa',0);

describe('Test Nombre Jugador',() => {
  test('Comprobar Nombre', () => {
      expect(jugador_nuevo.getNombre()).toBe('Tania');
  }); 
});

describe('Test Id Jugador',() => {
  test('Comprobar Id', () => {
      expect(jugador_nuevo.getId()).toBe(1);
  }); 
});

describe('Test Posición Jugador',() => {
  test('Comprobar Posición', () => {
     expect(jugador_nuevo.getPosicion()).toBe('Defensa');
  }); 
});
describe('Test Puntuación Jugador',() => {
  test('Comprobar Puntuación', () => {
    expect(jugador_nuevo.getPuntuacion()).toBe(0);
  }); 
});

describe('Test Cambio Nombre Jugador', () => {
  test('Asignar nombre', () => {
    jugador_nuevo.setNombre('Juan');
    expect(jugador_nuevo.getNombre()).toBe('Juan');
  });
});
describe('Test Cambio  Posicion', () => {
  test('Asignar Posicion', () => {
    jugador_nuevo.setPosicion('Delantero');
    expect(jugador_nuevo.getPosicion()).toBe('Delantero');
  });
});
describe('Test Cambio  Puntación', () => {
  test('Asignar Puntación', () => {
    jugador_nuevo.setPuntuacion(10);
    expect(jugador_nuevo.getPuntuacion()).toBe(10);
  });
});
