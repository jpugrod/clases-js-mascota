export class Mascota {
  #id = 1
  tipo = 'Sin definir'
  nombre = 'Sin nombre'
  microchip = ''
  sexo = 'f'
  edad = 0

  
  /**
   * Método constructor donde cargo mascota
   * @param {MascotaLike: object} Mascota
   * @param {string} Mascota.type `Ejemplos: cánido, felino...`
   * @param {string} Mascota.name
   * @param {string} Mascota.microchip
   * @param {number} Mascota.edad En número entero
   * @param {string} Mascota.id Identificador único
   */
  constructor({ type = 'canido', name = 'Desconocido', microchip = '', age = 0, sexo = 'f', id = '' } ) {
    this.#id = id
    this.tipo = type,
    this.nombre = name,
    this.microchip = microchip,
    this.edad = age,
    this.sexo = sexo
  }
  /**
   * Función que permite meter el nombre de la mascota
   * @param {string} name nombre de la mascota
   */
  setNombre(name) {
    if (typeof name === 'string' && name.length) this.nombre = name
    else throw new Error('Formato de nombre no válido')
  }

  /** Retorna la edad de la mascota en formato numero
   * @param {number} edad
   */
  set age(edad) {
    if (Number.isInteger(Number(edad))) this.edad = edad

  }

  getId(){
    return this.#id
  }

  getData() {
    return `
  <ul>
    <li><strong>Codigo</strong> ${this.#id}</li>
    <li><strong>Nombre</strong> ${this.nombre}</li>
    <li><strong>Tipo</strong> ${this.tipo}</li>
    <li><strong>Microchip</strong> ${this.microchip}</li>
    <li><strong>Edad</strong> ${this.edad}</li>
    <li><strong>Sexo</strong> ${this.sexo === 'f' ? 'Hembra' : 'Macho'}</li>
  </ul>
    `
  }

}

