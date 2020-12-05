function CalculateTip() {
    let amount= document.getElementById("amount").value;
    let percent = document.getElementById("percent").value;
    return document.getElementById('tip').innerHTML = (amount * percent)/100;    
}