export function mascotaApp (rootElement) {
if (!rootElement) throw new Error('Elemento raiz no encontrado')
rootElement.innerHTML = '<h1>Mascotas</h1>'
}