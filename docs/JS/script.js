// Para aparecer os numeros e chaves

function insert(num) {
  const number = document.getElementById("total").innerHTML;
  let x = document.getElementById("total").textContent = number + num;
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Botão para apagar tudo

function clean() {
  document.getElementById("total").textContent = "";
}

// Botão para deletar o último dígito

function del() {
  let total = document.getElementById("total").innerHTML;
  document.getElementById("total").innerHTML = total.substring(
    0,
    total.length - 1
  );
}

// Botão para gerar Raiz Quadrada

function sqrt() {
  document.getElementById("total").textContent = eval(
    Math.sqrt(total.textContent)
  );
}

// Botões para gerar Potências

// Elevado a 2
function elevated2() {
  document.getElementById("total").innerHTML = eval(
    Math.pow(total.innerHTML, 2)
  );
}

// Elevado a 10
function elevated10() {
  document.getElementById("total").textContent = eval(
    Math.pow(total.textContent, 10)
  );
}

// Calcular e gerar resultado

function calcular() {
  if (total.textContent != "Error") {
    document.getElementById("total").textContent = eval(total.textContent);
  }
}






