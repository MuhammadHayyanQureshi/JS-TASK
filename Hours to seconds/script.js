function convertHoursToSeconds(){
    const numberOfHour = document.getElementById("hourInput").value;
    const input  = numberOfHour;

    const seconds = numberOfHour * 3600;
                document.getElementById('result').innerText = `${numberOfHour} hour in seconds is: ${seconds}`;
}