document.getElementById("home").addEventListener("click", function() {
    document.querySelector(".content").innerHTML = `
        <h2>Welcome to the Dashboard</h2>
        <p>This is the Home page.</p>
    `;
});

document.getElementById("profile").addEventListener("click", function() {
    document.querySelector(".content").innerHTML = `
        <h2>Profile</h2>
        <p>User profile information goes here.</p>
    `;
});

document.getElementById("settings").addEventListener("click", function() {
    document.querySelector(".content").innerHTML = `
        <h2>Settings</h2>
        <p>Dashboard settings can be configured here.</p>
    `;
});
