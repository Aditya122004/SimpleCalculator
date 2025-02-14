function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculate() {
    const display = document.getElementById('display');
    try {
        const expression = display.value.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => clearDisplay(), 1500);
    }
}