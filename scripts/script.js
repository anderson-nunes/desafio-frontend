function diminuir() {
  const event = new Event("input");
  const quantidade = document.getElementById("quantidade-stickers");
  const value = parseInt(quantidade.value) || 0;
  if (value > 0) {
    quantidade.value = value - 1;
    quantidade.dispatchEvent(event);
  }
}

function aumentar() {
  const event = new Event("input");

  const quantidade = document.getElementById("quantidade-stickers");
  const value = parseInt(quantidade.value) || 0;
  quantidade.value = value + 1;

  quantidade.dispatchEvent(event);
}

function init() {
  const button = document.getElementById("counter-diminuir");
  const input = document.querySelector("#quantidade-stickers");

  input.addEventListener("input", function () {
    if (parseInt(input.value) === 0) {
      button.setAttribute("disabled", "disabled");
    } else {
      button.removeAttribute("disabled");
    }
  });
}

function validarForm() {
  const react = document.getElementById("checkbox-react");
  const vue = document.getElementById("checkbox-vue");
  const angular = document.getElementById("checkbox-angular");

  const quantidadeStickers = document.getElementById("quantidade-stickers");

  console.log("hello");
}

init();
