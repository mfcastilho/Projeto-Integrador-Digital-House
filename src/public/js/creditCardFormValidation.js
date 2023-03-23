const numberCardInput = document.querySelector("#number_card");
const securityCodeInput = document.querySelector("#security_code")

numberCardInput.addEventListener("input", ()=>{

    let numberCard = numberCardInput.value;

    numberCard = numberCard.replace(/\D/g, "");

    numberCard = numberCard.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");

    numberCardInput.value = numberCard;

    const validCardNumber = numberCard.replace(/\s/g, "").length == 16;
    // numberCardInput.value = validCardNumber

    numberCardInput.classList.toggle("invalid-card", !validCardNumber);
});

