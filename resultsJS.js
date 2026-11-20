 const weights = JSON.parse(localStorage.getItem("weights"));
    const distractionDiv = document.getElementById("distractionsDiv");
    const mentalHealthDiv= document.getElementById("mentalHealthDiv");
    const sleepQualityDiv = document.getElementById("sleepQualityDiv");
    const sleepDeficiencyDiv = document.getElementById("sleepDeficiencyDiv");

    let distractions = weights.w1 + weights.w2 + weights.w3;
    let mentalHealth = weights.w4 + weights.w5 + weights.w6;
    let sleepQuality = weights.w7 + weights.w8 + weights.w9;
    let sleepDeficiency = weights.w10 + weights.w11 + weights.w12;

    distractionDiv.textContent = distractions;
    mentalHealthDiv.textContent = mentalHealth;
    sleepQualityDiv.textContent = sleepQuality;
    sleepDeficiencyDiv.textContent = sleepDeficiency;