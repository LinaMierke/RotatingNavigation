//declaro las ocntantes aqui d elo que voy a utilizar en el document
const open = document.getElementById('open') // selecciono los que tienen id
const close = document.getElementById('close')
const container = document.querySelector(".container") // aca selecciono los q tiene clase

// aca le agrego un event listener, osea q cuando hago click se le va a agregar una clase al q tiene la clase de container se le va a agregar el "show-nav"
open.addEventListener("click", () => container.classList.add('show-nav')) 

// aqui es lo contrario, seleccionamos con el click y cuando se de click va a suceder la funcion, osea la clase de container se le va a quitar la propiedad de "show-nav"
close.addEventListener("click", () => container.classList.remove('show-nav'))

