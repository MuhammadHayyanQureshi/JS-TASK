function capitalizeString(){

    const string = document.getElementById("nameInput").value;
    
const capitalized = string.charAt(0).toUpperCase() + string.slice(1);

    document.getElementById("result").innerText = `Hello, ${capitalized}`;
    return;
}