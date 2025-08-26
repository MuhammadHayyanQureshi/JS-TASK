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