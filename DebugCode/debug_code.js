	
function performOperation() {
	// Get user input from input fields
	let num1 = parseInt(document.getElementById('input1').value);
	let num2 = parseInt(document.getElementById('input2').value);
	// Check if inputs are valid numbers
	if (!isNaN(num1) && !isNaN(num2)) {
	// Perform the operation
        let addition = num1 + num2;
        let subtraction = num1 - num2;
        let multiplication = multiply(num1, num2);
        let division = num1 / num2;

        // Display the result
        displayResults(addition, subtraction, multiplication, division);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    //debugger;

    // Multiply the numbers
    return a * b;
}

function displayResults(addition, subtraction, multiplication, division) {
    let resultElement = document.getElementById('addition');
    resultElement.textContent = `The result is: ${addition}`;
    resultElement = document.getElementById('subtraction');
    resultElement.textContent = `The result is: ${subtraction}`;
    resultElement = document.getElementById('multiplication');
    resultElement.textContent = `The result is: ${multiplication}`;
    resultElement = document.getElementById('division');
    resultElement.textContent = `The result is: ${division}`;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}
		
