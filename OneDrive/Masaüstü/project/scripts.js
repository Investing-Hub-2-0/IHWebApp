// Toggle Login Modal Visibility
function toggleLoginModal(show) {
    const modal = document.getElementById("login-modal");
    if (show) {
        modal.classList.remove("hidden");
    } else {
        modal.classList.add("hidden");
    }
}

// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".bg-blue-600.text-white.py-2.px-4.rounded");
    if (loginButton) {
        loginButton.addEventListener("click", () => toggleLoginModal(true));
    }

    const modalCloseButton = document.querySelector("#login-modal button");
    if (modalCloseButton) {
        modalCloseButton.addEventListener("click", () => toggleLoginModal(false));
    }

    // Example placeholder functionality for the login form
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "user" && password === "password") {
                alert("Login successful!");
                toggleLoginModal(false);
            } else {
                alert("Invalid credentials. Please try again.");
            }
        });
    }
});

// Chart.js Logic
const ctx = document.getElementById('portfolio-chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Portfolio Value ($)',
            data: [1000, 1200, 1300, 1250, 1400],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true
    }
});