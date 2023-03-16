export class Mascota {
  #id = 1
  type = 'Sin definir'
  name = 'Sin nombre'
  microchip = ''
  gender = 'f'
  age = 0


  /**
   * Método constructor donde cargo mascota
   * @param {MascotaLike: object} Mascota
   * @param {string} Mascota.type `Ejemplos: cánido, felino...`
   * @param {string} Mascota.name
   * @param {string} Mascota.microchip
   * @param {number} Mascota.age En número entero
   * @param {string} Mascota.id Identificador único
   * @param {string} Mascota.gender
   */
  constructor({
    tipo = 'canido',
    nombre = 'Desconocido',
    microchip = '',
    edad = 0,
    sexo = 'f',
    id = '' }) {
    this.#id = id
    this.tipo = tipo,
      this.nombre = nombre,
      this.microchip = microchip,
      this.edad = edad,
      this.sexo = sexo
  }
  /**
   * Función que permite meter el nombre de la mascota
   * @param {string} name nombre de la mascota
   */
  setNombre(name) {
    if (typeof name === 'string' && name.length) this.name = name
    else throw new Error('Formato de nombre no válido')
  }

  /** Retorna la edad de la mascota en formato numero
   * @param {number} age
   */
  set age(age) {
    if (Number.isInteger(Number(edad))) this.age = age

  }

  getId() {
    return this.#id
  }

  getData() {
    return {
      ...this,
      id: this.#id
    }
   
  }

}

