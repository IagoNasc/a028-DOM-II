const verificaTecla = (event) => {
    if(event.shiftKey) {
        document.getElementById("mensagem").innerHTML = 'SEGURANDO SHIFT!'
    } else {
        document.getElementById("mensagem").innerHTML = ''
    }
}