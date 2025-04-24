const newelement = document.getElementById('newelement');
const buttons = document.querySelectorAll('.button');
let storage = ""; // Keeps track of the current input

function updateDisplay(value) {
    newelement.textContent = value;
}

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;

        // Number buttons and "00" handling
        if (buttonId === 'one' || buttonId === 'two' || buttonId === 'three' || buttonId === 'four' ||
            buttonId === 'five' || buttonId === 'six' || buttonId === 'seven' || buttonId === 'eight' ||
            buttonId === 'nine' || buttonId === 'zero' || buttonId === 'doublezero') {

            if (storage === "0") storage = ""; // Reset storage if 0 is at the beginning
            if (buttonId === 'doublezero') {
                storage += "00";
            } else {
                storage += button.textContent;
            }
            updateDisplay(storage);

        } 
        // Operators (+, -, *, /, %)
        else if (buttonId === 'plus' || buttonId === 'minus' || buttonId === 'multiply' || 
                 buttonId === 'devide' || buttonId === 'percentage') {
            if (storage !== "" && !/[+\-*/%]$/.test(storage)) { // Prevent multiple operators in a row
                storage += button.textContent;
                updateDisplay(storage);
            }

        } 
        // Equal button "="
        else if (buttonId === 'square') {
            try {
                // Evaluate the expression
                const result = math.evaluate(storage);
                storage = result.toString();
                updateDisplay(storage);
            } catch (error) {
                updateDisplay("Error");
                storage = ""; // Reset on error
            }

        } 
        // Clear button "C"
        else if (buttonId === 'clear') {
            storage = "";
            updateDisplay("0");
        }
    });
});
