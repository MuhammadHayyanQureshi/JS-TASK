function convertAgeToDays(){
    const years = document.getElementById("ageinput").value;

    const days = years * 365;
                document.getElementById('ageResult').innerText = `Your age in days is: ${days}`;
}

function calBMI(){
    const height = parseFloat(document.getElementById("heightInput").value);
    const weight = parseFloat(document.getElementById("poundInput").value);

    const heightInMeter = (height / 100) 

                        const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

                document.getElementById('bmiResult').innerText = `Your BMI: ${bmi}`;
}

function capitalizeString(){

    const string = document.getElementById("nameInput").value;
    
const capitalized = string.charAt(0).toUpperCase() + string.slice(1);

    document.getElementById("strResult").innerText = `Hello, ${capitalized}`;
    return;
}

const numbersArray = [1, 2, 2.5 ,3 ,4 ,4.5 ,5 ,5.5];

function findNum(){
    
const inputNumber = parseInt(document.getElementById('userInput').value);

    const Checker = numbersArray.find(num => num > inputNumber);
    const type = Number.isInteger(Checker) ? "integer" : "Decimal";
 
                document.getElementById('fndResult').innerText = Checker !== undefined ? `Next number is: ${Checker} and is ${type}` : 'No next number found';
                return;
}

function convertHoursToSeconds(){
    const numberOfHour = document.getElementById("hourInput").value;
    const input  = numberOfHour;

    const seconds = numberOfHour * 3600;
                document.getElementById('hourResult').innerText = `${numberOfHour} hour in seconds is: ${seconds}`;
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