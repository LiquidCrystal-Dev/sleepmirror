const supabaseClient = supabase.createClient(
    "https://kobdgillcqzvewigpuxg.supabase.co",
    "sb_publishable_lPeE6Kk2OsNJcojj73mG8w_lYsyUAIX"
);

async function loadAnalytics() {
    // 1. Fetch all saved rows from calcWeights
    const { data, error } = await supabaseClient
        .from("calcWeights")
        .select("hours, distractionsWeight, mentalHealthWeight, sleepQualityWeight, sleepDeficiencyWeight");

    if (error) {
        console.error("Error loading analytics:", error.message);
        return;
    }

    const totalEntriesEl = document.getElementById("totalEntries");

    // 2. Handle empty database state
    if (!data || data.length === 0) {
        if (totalEntriesEl) totalEntriesEl.textContent = "0";
        return;
    }

    // 3. Sum every column across all rows
    let totalHours = 0;
    let totalDistractions = 0;
    let totalMentalHealth = 0;
    let totalSleepQuality = 0;
    let totalSleepDeficiency = 0;

    data.forEach(row => {
        totalHours += Number(row.hours) || 0;
        totalDistractions += Number(row.distractionsWeight) || 0;
        totalMentalHealth += Number(row.mentalHealthWeight) || 0;
        totalSleepQuality += Number(row.sleepQualityWeight) || 0;
        totalSleepDeficiency += Number(row.sleepDeficiencyWeight) || 0;
    });

    const count = data.length;

    // 4. Calculate averages (rounded to 1 decimal place) and update the page
    document.getElementById("avgHours").textContent = (totalHours / count).toFixed(1);
    document.getElementById("avgDistractions").textContent = (totalDistractions / count).toFixed(1);
    document.getElementById("avgMentalHealth").textContent = (totalMentalHealth / count).toFixed(1);
    document.getElementById("avgSleepQuality").textContent = (totalSleepQuality / count).toFixed(1);
    document.getElementById("avgSleepDeficiency").textContent = (totalSleepDeficiency / count).toFixed(1);

    if (totalEntriesEl) {
        totalEntriesEl.textContent = count;
    }
}

loadAnalytics();