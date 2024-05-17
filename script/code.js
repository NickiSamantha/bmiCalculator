document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.querySelector('.calculateButton');

    calculateButton.addEventListener('click', calculateBMI);

    function calculateBMI() {
        const weight = parseFloat(document.querySelector('.weight').value);
        const height = parseFloat(document.querySelector('.height').value);
        let result;

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            result = 'Enter valid values for weight and height';
        } else {
            const bmi = weight / (height * height);
            result = `Your BMI is ${bmi.toFixed(2)}`;
        }

        document.querySelector('.result').innerText = result;
    }
});

