import { mascotaToModel, perroToModel } from './mascotas/mappers/localMascotaToModel'


export function renderizarMascota(dataValue, tipo) {
  let mascota = (tipo === 'mascota')
    ? mascotaToModel(dataValue)
    : perroToModel(dataValue)
    const renderEL = document.querySelector('#content')
    renderEL.innerHTML = `id: ${mascota.getId()}<br>`
    renderEL.innerHTML += `nombre: ${mascota.nombre}<br>`
    renderEL.innerHTML += mascota.raza ? `Peso: ${mascota.raza}` :``
    renderEL.innerHTML += mascota.alimentacion ? `Peso: ${mascota.alimentacion}` :``
    renderEL.innerHTML += mascota.peso ? `Peso: ${mascota.peso}` :``

}