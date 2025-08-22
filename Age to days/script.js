function convertAgeToDays(){
    const years = document.getElementById("ageinput").value;

    const days = years * 365;
                document.getElementById('result').innerText = `Your age in days is: ${days}`;
}