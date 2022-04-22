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
  validateQuantidadeStickers();
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
  const checkReact = document.getElementById("checkbox-react").checked;
  const checkVue = document.getElementById("checkbox-vue").checked;
  const checkAngular = document.getElementById("checkbox-angular").checked;
  const validateButton = document.getElementById("validateButton");

  const checkValidate = checkReact || checkVue || checkAngular;

  validateQuantidadeStickers();
  console.log(checkValidate);
}

function validateQuantidadeStickers() {
  const quantidadeStickers = document.getElementById("quantidade-stickers");
  const validateQuantidadeStickers = parseInt(quantidadeStickers.value) >= 1;
  if (validateQuantidadeStickers === false) {
    quantidadeStickers.classList.add("error");
  } else {
    quantidadeStickers.classList.remove("error");
  }
}

init();
