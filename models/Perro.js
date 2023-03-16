import { Mascota } from './Mascota'

export class Perro extends Mascota {
  raza
  alimentacion
  peso

  /**
   * Metodo constructor Datos iniciales de la clase Perro
   * @param {MascotaLike: object} mascota De la clase Mascota
   * @param {PerroLike: } Perro
     @param {string} Perro.raza
     @param {string} Perro.alimentacion
     @param {number} Perro.peso
   */
  constructor(Mascota = {}, { raza = 'Desconocida', alimentacion = '', peso = 0 }) {
    super(Mascota)
    this.raza = raza
    this.alimentacion = alimentacion
    this.peso = peso

  }


  getData() {
    return `
  <ul>
    <li><strong>Codigo</strong> ${this.getId()}</li>
    <li><strong>Nombre</strong> ${this.nombre}</li>
    <li><strong>Tipo</strong> ${this.tipo}</li>
    <li><strong>Microchip</strong> ${this.microchip}</li>
    <li><strong>Edad</strong> ${this.edad}</li>
    <li><strong>Sexo</strong> ${this.sexo === 'f' ? 'Hembra' : 'Macho'}</li>
    <li><strong>Raza</strong> ${this.raza}</li>
    <li><strong>Alimentacion</strong> ${this.alimentacion}</li>
    <li><strong>Peso</strong> ${this.peso}</li>
  </ul>
    `
  }

}

