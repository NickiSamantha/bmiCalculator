
document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid values for height and weight.');
        return;
    }

    let bmi = calculateBMI(height, weight);
    let category = getBMICategory(bmi);

    document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(1)}, which means you are ${category}.`;
});

function calculateBMI(height, weight) {
   
    height = height / 100;
    return weight / (height * height);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'underweight';
    } else if (bmi < 24.9) {
        return 'normal weight';
    } else if (bmi < 29.9) {
        return 'overweight';
    } else {
        return 'obese';
    }
}

;

