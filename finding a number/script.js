const numbersArray = [1, 2, 2.5 ,3 ,4 ,4.5 ,5 ,5.5];

function findNum(){
    
const inputNumber = parseInt(document.getElementById('userInput').value);

    const Checker = numbersArray.find(num => num > inputNumber);
    const type = Number.isInteger(Checker) ? "integer" : "Decimal";
 
                document.getElementById('result').innerText = Checker !== undefined ? `Next number is: ${Checker} and is ${type}` : 'No next number found';
                return;
}
