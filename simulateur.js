function afficherOptionsParticulier() {
    const type = document.getElementById("type").value;
    const optionsIFI = document.getElementById("options-ifi");

    if (type === "particulier") {
        optionsIFI.style.display = "inline-block";
    } else {
        optionsIFI.style.display = "none";
    }
}

function calculer() {
    const type = document.getElementById("type").value;
    const montant = parseFloat(document.getElementById("montant").value);

    if (isNaN(montant) || montant <= 0) {
        alert("Veuillez entrer un montant valide.");
        return;
    }

    let tauxReduction = 0;
    let phraseInfo = "";

    if (type === "entreprise") {
        tauxReduction = 0.60;
        phraseInfo = "Dans la limite de 20.000€ ou de 5‰ du chiffre d'affaires si ce dernier montant est plus élevé.";
    } else {
        const ifi = document.getElementById("ifi").value;
        if (ifi === "avec") {
            tauxReduction = 0.75;
            phraseInfo = "Dans la limite de 50.000€.";
        } else {
            tauxReduction = 0.66;
            phraseInfo = "Dans la limite de 20% du revenu imposable.";
        }
    }

    const reduction = montant * tauxReduction;
    const coutReel = montant - reduction;

    document.getElementById("reduction").textContent =
    `Réduction fiscale estimée : ${reduction.toFixed(2)} €`;
document.getElementById("info-text").textContent = phraseInfo;
document.getElementById("cout").textContent =
    `Coût réel du don après réduction : ${coutReel.toFixed(2)} €`;
}

window.onload = afficherOptionsParticulier;