class Mascota {
  #id
  tipo
  nombre
  microchip
  sexo
  edad

  constructor(type = 'canido', name = 'Desconocido', microchip = '', age = 0) {
    this.#id = new Date()
    this.tipo = type
    this.nombre = name
    this.microchip = microchip
    this.edad = age
  }

  setNombre(name) {
    if (typeof name === 'string' && name.length) this.nombre = name
    else throw new Error('Formato de nombre no válido')
  }

  set age(edad) {
    if (Number.isInteger(Number(edad))) this.edad = edad 
   
  }

  getData() {
    return `
  <ul>
    <li><strong>Codigo</strong>${this.#id}</li>
    <li><strong>Nombre</strong>${this.nombre}</li>
    <li><strong>Tipo</strong>${this.tipo}</li>
    <li><strong>Microchip</strong>${this.microchip}</li>
    <li><strong>Edad</strong>${this.edad}</li>
    <li><strong>Sexo</strong>${this.sexo === 'f' ? 'Hembra' : 'Macho'}</li>
  </ul>
    `
  }



}