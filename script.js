/* =========================
MOBILE NAVIGATION
========================= */

function toggleMenu() {
const nav = document.getElementById("navMenu");

nav.classList.toggle("active");

}

/* Close mobile navigation
after clicking a link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

link.addEventListener("click", function() {

    document.getElementById("navMenu").classList.remove("active");

});

});

/* =========================
RANDOM MOTIVATIONAL MESSAGE
========================= */

const messages = [
"You are doing better than you think. 💛",
"It's okay to slow down and breathe.",
"Your feelings deserve to be heard.",
"One small step is still a step forward.",
"You don't have to figure everything out today.",
"Asking for help is a sign that you care about yourself.",
"Be patient with yourself. Growth takes time.",
"Rest is part of taking care of yourself.",
"Your difficult moments do not define your whole story.",
"Tomorrow is another opportunity to begin again."
];

function showMessage() {

const messageElement = document.getElementById("randomMessage");

const randomIndex = Math.floor(Math.random() * messages.length);

messageElement.textContent = messages[randomIndex];

}
