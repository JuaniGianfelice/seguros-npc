const modalBtn = document.getElementById("modalBtn");
const backHome = document.getElementById("back");
const modal = document.querySelector(".modal");
const contactForm = document.getElementById("contactForm");
const insuranceSelect = document.getElementById("insurance");
const planElement = document.querySelector(".modal-content h1");
const importElement = document.querySelector(".modal-content h3");

const prices = {
  Básico: 500,
  Intermedio: 1000,
  Premium: 1500,
};

modalBtn.addEventListener("click", () => {
  modal.classList.add("active");
  updateModalContent();
});

backHome.addEventListener("click", () => {
  modal.classList.remove("active");
  resetForm();
});

insuranceSelect.addEventListener("change", () => {
  updateModalContent();
});

const resetForm = () => {
  contactForm.reset();
}

const updateModalContent = () => {
  const optionSeleccionada = insuranceSelect.value;
  const precio = prices[optionSeleccionada];

  if (optionSeleccionada && precio !== undefined) {
    planElement.textContent = `Plan ${optionSeleccionada}`;
    importElement.textContent = `Importe: $${precio}`;
  } else {
    planElement.textContent = "";
    importElement.textContent = "";
  }
}

