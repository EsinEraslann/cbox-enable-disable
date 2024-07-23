const checkboxes = document.querySelectorAll(".form-check-input");
const submitButton = document.getElementById("submitButton");

function updateSubmitButtonState() {
  const isChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
  submitButton.disabled = !isChecked;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateSubmitButtonState);
});

/* function checkCheckboxes() {
    const checkboxes = document.querySelectorAll('.form-check-input');
    const submitButton = document.getElementById('submitButton');
    const isChecked = [...checkboxes].some(cb => cb.checked);
    submitButton.disabled = !isChecked;
}

const checkboxes = document.querySelectorAll('.form-check-input');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', checkCheckboxes);
}); */

/* const checkboxes = document.querySelectorAll(".form-check-input");
const submitButton = document.getElementById("submitButton");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const isChecked = Array.from(checkboxes).some((cb) => cb.checked);
    submitButton.disabled = !isChecked;
  });
}); */

function filter_check(clas) {
  document.getElementById("butn").disabled =
    document.getElementById(clas).value === "0" ? true : false;
  if (document.getElementById(clas).value == "0") {
    document.getElementById("butn").className += " disable";
  }
}

