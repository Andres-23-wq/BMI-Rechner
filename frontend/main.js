document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the "Calculate BMI" button
    document.getElementById('calculateBtn').addEventListener('click', calculateAndDisplayBMI);
});

// Function to calculate BMI and display result
function calculateAndDisplayBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultElement = document.getElementById('result');
    const bmiOutput = document.getElementById('bmi-output');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultElement.textContent = "Bitte geben Sie gültige Werte für Gewicht und Größe ein.";
        bmiOutput.textContent = "";
        return;
    }

    const bmi = calculateBMI(weight, height);
    resultElement.textContent = "Your BMI is: " + bmi;
    
    }


// Function to calculate BMI
function calculateBMI(weight, height) {
    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmi = Math.round(weight / (heightInMeters * heightInMeters));

    return bmi;
}

