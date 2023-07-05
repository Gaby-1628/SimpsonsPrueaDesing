/* --------------------------------------------------- */
/* --------- Funcion HELPER (Utilitaria) AJAX -------- */
/* --------------------------------------------------- */

function ajax(url, metodo = "GET") { // <= Parametro por defecto
    const xhr = new XMLHttpRequest() /* 1. Creo la instancia */
    xhr.open(metodo, url) /* 2. Configuro la instancia */
    xhr.send() /* 4. Hago la peticion */

    return xhr
}