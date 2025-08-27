
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
