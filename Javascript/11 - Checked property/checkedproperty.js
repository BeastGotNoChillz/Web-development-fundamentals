const Checkbox = document.getElementById("Checkbox");
const Visa = document.getElementById("Visa");
const Mastercard = document.getElementById("Mastercard");
const Esewa = document.getElementById("Esewa");
const submitbtn = document.getElementById("submitbtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submitbtn.onclick = function(){
    if(Checkbox.checked){
        subResult.textContent = `You are subscribed.`;
    }
    else{
        subResult.textContent = `You are not subscribed.`;
    }

    if(Visa.checked){
        paymentResult.textContent = `Visa is your payment option.`;
    }
    else if(Mastercard.checked){
        paymentResult.textContent = `Mastercard is your payment option.`;
    }
    else if(Esewa.checked){
        paymentResult.textContent = `Esewa is your payment option.`;
    }
    else{
        paymentResult.textContent = `No payment option selected.`;
    }
}