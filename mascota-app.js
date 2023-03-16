import { v4 as miId } from 'uuid'
import { Mascota, Perro } from './models/index'
import formRaw from './Templates/form-mascotas.html?raw'


/**
 * Gestionar los eventos del formulario
 * @param {HTMLFormElement} element 
 */
function manipulacionFormulario(element) {
  element.addEventListener('submit', (e) => {
    e.preventDefault()


    //Validacion de datos
    const nombre = element.nombre.value.trim()
    const microchip = element.microchip.value.trim()
    const tipo = element.tipo.value.trim()
    const genero = element.genero.value
    const edad = Number(element.edad.value)

    // Instanciar la clase y cargar datos
    const p1 = new Mascota({
      type: tipo,
      name: nombre,
      microchip,
      id: miId(),
      age: edad,
      sexo: genero,
    })


    //Mostar datos
    element.querySelector('#content').innerHTML = p1.getData()

    //Prueba Perro
    const perro = new Perro({ nombre: 'Lassyyy', microchip: '123456789012345', id: miId() }, { raza: 'Pastor Aleman' })


  })
  element.querySelector('#rango-edad').addEventListener('input', (e) => {
    const input = e.target
    document.querySelector('#edad').value = input.value
  })

  element['tipo-mascota'].addEventListener('change', e => {
    const select = e.target
    const divElement = element.querySelector('#otros-campos')
    if (select.value === 'perro') {
      // Muestro campos
      divElement.classList.remove('oculto')
    } else {
      // Oculto campos
      divElement.classList.add('oculto')
    }
  })
}


/**
 * Punto de entrada de la aplicación
 * @param {HTMLDivElement} rootElement 
 */
export function mascotaApp(rootElement) {
  if (!rootElement) throw new Error('Elemento raiz no encontrado')
  rootElement.innerHTML = '<h1>Mascotas</h1>'
  rootElement.innerHTML += formRaw
  manipulacionFormulario(rootElement.querySelector('#myForm'))
}