
function saveWeights() {
    const q1Weight = document.querySelector('input[name="distraction1"]:checked')?.value;
    const q2Weight = document.querySelector('input[name="distraction2"]:checked')?.value; 
    const q3Weight = document.querySelector('input[name="distraction3"]:checked')?.value; 

    const q4Weight = document.querySelector('input[name="mentalHealth1"]:checked')?.value;
    const q5Weight = document.querySelector('input[name="mentalHealth2"]:checked')?.value; 
    const q6Weight = document.querySelector('input[name="mentalHealth3"]:checked')?.value; 

    const q7Weight = document.querySelector('input[name="sleepQuality1"]:checked')?.value;
    const q8Weight = document.querySelector('input[name="sleepQuality2"]:checked')?.value; 
    const q9Weight = document.querySelector('input[name="sleepQuality3"]:checked')?.value; 

    const q10Weight = document.querySelector('input[name="sleepDeficiency1"]:checked')?.value;
    const q11Weight = document.querySelector('input[name="sleepDeficiency2"]:checked')?.value; 
    const q12Weight = document.querySelector('input[name="sleepDeficiency3"]:checked')?.value; 


    const weights = {
    w1: Number(q1Weight),
    w2: Number(q2Weight),
    w3: Number(q3Weight),

    w4: Number(q4Weight),
    w5: Number(q5Weight),
    w6: Number(q6Weight),

    w7: Number(q7Weight),
    w8: Number(q8Weight),
    w9: Number(q9Weight),

    w10: Number(q10Weight),
    w11: Number(q11Weight),
    w12: Number(q12Weight)
};

localStorage.setItem("weights", JSON.stringify(weights));
localStorage.setItem("alreadySent", "false");
}
