const supabaseClient = supabase.createClient(
    "https://kobdgillcqzvewigpuxg.supabase.co",
    "sb_publishable_lPeE6Kk2OsNJcojj73mG8w_lYsyUAIX"
);

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function(event) {
 
    event.preventDefault();

  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        alert("Login failed: " + error.message);
    } else {
        window.location.href = "index.html";
    }
});