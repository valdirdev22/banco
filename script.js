document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calcForm');
    const valueInput = document.getElementById('valueInput');
    const resultDisplay = document.getElementById('result');

    // Recuperar o valor armazenado no Local Storage (se existir)
    let total = parseFloat(localStorage.getItem('total')) || 0;
    resultDisplay.textContent = total;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = parseFloat(valueInput.value);

        if (!isNaN(value)) {
            total += value;
            localStorage.setItem('total', total);
            resultDisplay.textContent = total;
            valueInput.value = '';
        }
    });
});
