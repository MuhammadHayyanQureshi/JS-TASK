function calBMI(){
    const height = parseFloat(document.getElementById("heightInput").value);
    const weight = parseFloat(document.getElementById("poundInput").value);

    const heightInMeter = (height / 100) 

                        const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

                document.getElementById('result').innerText = `Your BMI: ${bmi}`;
}