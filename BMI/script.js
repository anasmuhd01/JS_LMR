function BMI() {
    let weight = document.querySelector('#inp1').value
    let height = document.querySelector('#inp2').value
    let heightinM = height / 100
    let bmi = weight / (heightinM * heightinM)
    console.log(bmi)

    if (bmi <= 18.5) {
        document.querySelector('#result').textContent = `Underweight and your bmi is ${bmi.toFixed(2)}`
    }
    else if (bmi > 18.5 && bmi <= 24.9) {
        document.querySelector('#result').textContent = `Normal and your bmi is ${bmi.toFixed(2)}`

    }
    else if (bmi >= 25 && bmi < 30) {
        document.querySelector('#result').textContent = `Overweight and your bmi is ${bmi.toFixed(2)}`

    }
    else {
        document.querySelector('#result').textContent = `Obese and your bmi is ${bmi.toFixed(2)}`

    }
}