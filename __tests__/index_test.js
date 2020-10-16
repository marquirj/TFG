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