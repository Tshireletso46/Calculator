// Clears all the values entered or calculated by setting the result input value to an empty string.
function clearScreen() {
    document.getElementById("result").value = "";
}

// Appends the provided value to the current content of the result input.
function display(value) {
    document.getElementById("result").value += value;
}

// Function to evaluate the mathematical expression and display the result on the calculator screen.
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);

    
    // Set the result input value to the calculated result, updating the screen.
    document.getElementById("result").value = q;
}
