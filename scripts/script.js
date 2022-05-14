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

function validateCheckobx() {
  const checkReact = document.getElementById("checkbox-react");
  const checkVue = document.getElementById("checkbox-vue");
  const checkAngular = document.getElementById("checkbox-angular");
  const fieldsetElement = document.querySelector(".fieldset");

  const checkValidate =
    checkReact.checked || checkVue.checked || checkAngular.checked;

  if (!checkValidate) {
    fieldsetElement.classList.add("error");
    return false;
  } else {
    fieldsetElement.classList.remove("error");
    return true;
  }
}

function validateQuantidadeStickers() {
  const quantidadeStickers = document.getElementById("quantidade-stickers");
  const validateQuantidadeStickers = parseInt(quantidadeStickers.value) >= 1;
  if (validateQuantidadeStickers === false) {
    quantidadeStickers.classList.add("error");
    return false;
  } else {
    quantidadeStickers.classList.remove("error");
    return true;
  }
}

function validarForm() {
  const message = document.getElementById("msg");
  const validateQt = validateQuantidadeStickers();
  const validateCheck = validateCheckobx();

  if (validateQt && validateCheck) {
    message.innerHTML = "Dados enviados!!!";
  } else {
    message.innerHTML = "";
  }
}

function init() {
  const button = document.getElementById("counter-diminuir");
  const input = document.querySelector("#quantidade-stickers");
  const checkboxes = document.querySelectorAll(".checkbox");

  input.addEventListener("input", function () {
    if (parseInt(input.value) === 0) {
      button.setAttribute("disabled", "disabled");
    } else {
      button.removeAttribute("disabled");
    }

    validateQuantidadeStickers();
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      validateCheckobx();
    });
  });
}

init();
