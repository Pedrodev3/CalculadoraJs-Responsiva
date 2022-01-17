// Para aparecer os numeros e chaves

function insert(num) {
    const number = document.getElementById('total').innerHTML;
    document.getElementById('total').innerHTML = number + num;
}

// Botão para apagar tudo

function clean() {
    document.getElementById('total').innerHTML = '';
}

// Botão para deletar o último dígito

function del() {
    let total = document.getElementById('total').innerHTML;
    document.getElementById('total').innerHTML = total.substring(0, total.length - 1);
}

// Calcular e gerar resultado

