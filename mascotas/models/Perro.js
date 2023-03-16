import { Mascota } from './Mascota'

export class Perro extends Mascota {
  raza
  alimentacion
  peso

  /**
   * Metodo constructor Datos iniciales de la clase Perro
   * @param {Like<Perro>} Perro De la clase Mascota
   * @param {string} Perro.tipo `Ejemplos: cánido, felino...`
   * @param {string} Perro.nombre
   * @param {string} Perro.microchip
   * @param {number} Perro.edad En número entero
   * @param {string} Perro.id Identificador único
     @param {string} Perro.raza
     @param {string} Perro.alimentacion
     @param {number} Perro.peso
     @param {number} Perro.sexo
   */
  constructor ({
    tipo = 'canido',
    nombre = 'Desconocido',
    microchip = '',
    edad = 0,
    sexo = 'f',
    id = '',
    raza = '',
    alimentacion = '',
    peso = 0
  }) {
    super({ nombre, sexo, tipo, microchip, edad, id })
    this.raza = raza,
    this.alimentacion = alimentacion,
    this.peso = peso,

  }

  getId(){

  }

  /**
   * Retorna todas las propiedades de las clase públicas o privadas
   * @returns  {Object}
   */
  getData() {
    return {
      ...this,
      id: this.getId()
    }
  }

}

