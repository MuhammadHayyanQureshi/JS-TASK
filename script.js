


function convertAgeToDays(){
    const years = document.getElementById("ageinput").value;

    if( years <= 0){
        document.getElementById('ageResult').innerText = `Invalid`;
    } else {
    const days = years * 365;
                document.getElementById('ageResult').innerText = `Your age in days is: ${days}`;
    }
}

function calBMI(){
    const height = parseFloat(document.getElementById("heightInput").value);
    const weight = parseFloat(document.getElementById("poundInput").value);
    const heightInMeter = (height / 100) 

    if(height <= 0, weight <= 0){
                document.getElementById('bmiResult').innerText = `Invalid`;
    } else{
        
                        const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

                document.getElementById('bmiResult').innerText = `Your BMI: ${bmi}`;
    }
}



function capitalizeString(){

    const fullname = document.getElementById("nameInput").value;
    const names = fullname.split(' ');

                let capitalizedNames = [];
                for(let i = 0; i < names.length; i++){
                                    capitalizedNames.push(names[i].charAt(0).toUpperCase() + names[i].slice(1).toLowerCase());
                }

                document.getElementById('strResult').innerHTML = capitalizedNames.join(' ');
}

const numbersArray = [1, 2, 2.5 ,3 ,4 ,4.5 ,5 ,5.5];


function findNum(){
    const input = document.getElementById('userInput').value;
    let number = parseFloat(input);
    if(Number.isInteger(number)){
        number += 1;
    } else {
        number += 0.1;
    }

    document.getElementById('numResult').innerHTML = `${number}`
    return;
}


function convertHoursToSeconds(){
    const numberOfHour = document.getElementById("hourInput").value;
    const input  = numberOfHour;

    if(numberOfHour < 0){
                        document.getElementById('hourResult').innerText = `Invalid, Try again`;
    }else{
         const seconds = numberOfHour * 3600;
                document.getElementById('hourResult').innerText = `${numberOfHour} hour in seconds is: ${seconds}`;
    }
   
}

  function generateArray() {
            const arrayLength = Math.floor(Math.random() * 10) + 1;
            const randomArray = Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 100));
            document.getElementById('arrayOutput').innerText = `Random Array: [${randomArray.join(', ')}]`;
            return randomArray;
        }
 function SelectFunc() {
                const randomArr = generateArray(10);
                const firstNum = randomArr[0];
                const lastNum = randomArr[randomArr.length-1];

                document.getElementById('selectResult').innerHTML = `${firstNum} and ${lastNum}`
                return randomArr;
               }

   document.addEventListener("DOMContentLoaded", function() {
            const inputBox = document.getElementById('ftInput');
                        const secInput = document.getElementById('scInput');
            const resultBox = document.getElementById('resultBox');

        
            inputBox.addEventListener('input', calculate);
            secInput.addEventListener('input', calculate);
                        

            function calculate(){
                const valueFt = parseInt(inputBox.value);
                const valueSec = parseInt(secInput.value);
                resultBox.value = isNaN(valueFt + valueSec) ? 'NaN' : valueFt + valueSec;
            }
        });