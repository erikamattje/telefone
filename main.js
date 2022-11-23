const listaTeclado = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (let i = 0; i < listaTeclado.length; i++){
    const tecla = listaTeclado[i];

    tecla.onclick = function() {
        inputTel.value = inputTel.value + tecla.value;        
    }

}

