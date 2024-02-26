function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = '<div class="alert alert-danger">Please enter valid values for weight and height.</div>';
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    var bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    var resultHTML = '<div class="alert alert-success">';
    resultHTML += '<p><strong>Your BMI:</strong> ' + bmi.toFixed(2) + '</p>';
    resultHTML += '<p><strong>Category:</strong> ' + bmiCategory + '</p>';
    resultHTML += '</div>';

    document.getElementById('result').innerHTML = resultHTML;
}
