
const checkboxes = document.querySelectorAll('.form-check-input');
const submitButton = document.getElementById('submitButton');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const isChecked = Array.from(checkboxes).some(cb => cb.checked);
        submitButton.disabled = !isChecked;
    });
});

