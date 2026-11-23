
async function displayAnalysis(distractions, mentalHealth, sleepQuality, sleepDeficiency) {
    const response = await fetch("analysis.json");
    const analysis = await response.json();
    const analysisDiv1 = document.getElementById("analysisDiv1");
    const analysisDiv2 = document.getElementById("analysisDiv2");
    const analysisDiv3 = document.getElementById("analysisDiv3");

    if (distractions < 0) {
        analysisDiv1.textContent = analysis.lowDistraction[0];
        analysisDiv2.textContent = analysis.lowDistraction[1];
        analysisDiv3.textContent = analysis.lowDistraction[2];
    }

    if (mentalHealth < 0) {
        analysisDiv.textContent = analysis.lowMentalHealth[0];
    }

    if (sleepQuality < 0) {
        analysisDiv.textContent = analysis.lowSleepQuality[0];
    }

    if (sleepDeficiency < 0) {
        analysisDiv.textContent = analysis.lowSleepDeficiency[0];
    }
}



 
 const supabaseClient = supabase.createClient(
    "https://kobdgillcqzvewigpuxg.supabase.co",
    "sb_publishable_lPeE6Kk2OsNJcojj73mG8w_lYsyUAIX")
 

async function loadUserAccount() {
    // 1. Get the currently logged-in user
    const { data: { user } } = await supabaseClient.auth.getUser();

    const welcomeMessage = document.getElementById("welcomeMessage");
    const authLinks = document.getElementById("authLinks");
    const logoutButton = document.getElementById("logoutButton");
    const userTable = document.getElementById("userResultsTable");
    const tableBody = document.getElementById("resultsTableBody");

    if (user) {
        // 2. Access their Display Name and Email
        const displayName = user.user_metadata.display_name || "User";
        const email = user.email;

        authLinks.style.display = "none";
        logoutButton.style.display = "block";
        userTable.style.display = "table"; // Unhide the table

        // 3. Fetch only this user's rows (enforced by your RLS policy)
        const { data, error } = await supabaseClient
            .from("calcWeights")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error loading history:", error.message);
            return;
        }

        // 4. Build a table row for each saved quiz
        tableBody.innerHTML = "";
        data.forEach(row => {
            const date = new Date(row.created_at).toLocaleDateString();
            tableBody.innerHTML += `
                <tr>
                    <td>${date}</td>
                    <td>${row.hours}</td>
                    <td>${row.distractionsWeight}</td>
                    <td>${row.mentalHealthWeight}</td>
                    <td>${row.sleepQualityWeight}</td>
                    <td>${row.sleepDeficiencyWeight}</td>
                </tr>
            `;
        });
    } else {
        // Not logged in: keep the table hidden
        welcomeMessage.textContent = "Log in to track your sleep history.";
        userTable.style.display = "none";
    }
}

async function handleLogout() {
    await supabaseClient.auth.signOut();
    window.location.reload();
}

loadUserAccount();
    

    const weights = JSON.parse(localStorage.getItem("weights"));
    const distractionDiv = document.getElementById("distractionsDiv");
    const mentalHealthDiv= document.getElementById("mentalHealthDiv");
    const sleepQualityDiv = document.getElementById("sleepQualityDiv");
    const sleepDeficiencyDiv = document.getElementById("sleepDeficiencyDiv");
    const hours = Number(localStorage.getItem("sleepHours"));

    alreadySent = JSON.parse(localStorage.getItem("alreadySent"));

if (weights) {

    let distractions = weights.w1 + weights.w2 + weights.w3;
    let mentalHealth = weights.w4 + weights.w5 + weights.w6;
    let sleepQuality = weights.w7 + weights.w8 + weights.w9;
    let sleepDeficiency = weights.w10 + weights.w11 + weights.w12;

    distractionDiv.textContent = distractions;
    mentalHealthDiv.textContent = mentalHealth;
    sleepQualityDiv.textContent = sleepQuality;
    sleepDeficiencyDiv.textContent = sleepDeficiency;

    displayAnalysis(distractions, mentalHealth, sleepQuality, sleepDeficiency);


    async function saveToSupabase() {
        const { error } = await supabaseClient
            .from("calcWeights")
            .insert([{
                hours: hours,
                distractionsWeight: distractions,
                mentalHealthWeight: mentalHealth,
                sleepQualityWeight: sleepQuality,
                sleepDeficiencyWeight: sleepDeficiency
            }]);

        if (error) {
            console.error("Supabase error:", error.message);
        } else {
            console.log("Results saved to Supabase!");
        }
        localStorage.setItem("alreadySent", "true");
    }
    if (alreadySent == false) {
        saveToSupabase();
    }
    
} 

window.addEventListener("load", function () {
      const loader = document.getElementById("loader-wrapper");
      
      loader.classList.add("hidden");
    });

    