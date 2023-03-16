import { mascotaToModel, perroToModel } from "../mappers/localMascotaToModel"


mascotaToModel
export function renderizarMascota(dataValue, tipo) {
  let mascota = (tipo === 'mascota')
    ? mascotaToModel(dataValue)
    : perroToModel(dataValue)

  const { id, nombre, raza, alimentacion, peso } = mascota.getData()
  const renderEL = document.querySelector('#content')
  renderEL.innerHTML = `id: ${getId()}<br>`
  renderEL.innerHTML += `nombre: ${nombre}<br>`
  renderEL.innerHTML += mascota.raza ? `Peso: ${raza}<br>` : ''
  renderEL.innerHTML += mascota.alimentacion ? `Peso: ${alimentacion}<br>` : ''
  renderEL.innerHTML += mascota.peso ? `Peso: ${peso}<br>` : ''
}






