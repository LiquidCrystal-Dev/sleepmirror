const supabaseClient = supabase.createClient(
    "https://kobdgillcqzvewigpuxg.supabase.co",
    "sb_publishable_lPeE6Kk2OsNJcojj73mG8w_lYsyUAIX"
);

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async function(event) {
    // 1. Stop the browser from reloading/redirecting automatically
    event.preventDefault();

    // 2. Get the text typed into each input
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // 3. Create the account in Supabase Auth
    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
        data: {
            display_name: username
        }
    }
    });

    if (error) {
        alert("Sign up failed: " + error.message);
    } else {
        window.location.href = "login.html";
    }
});