// === Console Test ===
console.log("hi");

// === Constantes ===
const hamburger = document.querySelector('#hamburger'); // Hamburgericoon
const navMenu = document.querySelector('.nav-menu'); // Navigatiemenu
const inputs = document.querySelectorAll('input[type="text"], input[type="email"]'); // Invoervelden
const form = document.querySelector('form'); // Formulier
const lightModeToggle = document.getElementById('lightmode-toggle'); //Lightmodeknop
const video = document.getElementById('clubVideo'); // Achtergrondvideo
const button = document.getElementById('PausePlayButton'); // pauzeerknop


// === Hamburger Menu Functionaliteit ===
function toggleMenu() {
    if (navMenu && hamburger) {
        navMenu.classList.toggle('show');
        hamburger.classList.toggle('active');
        if (navMenu.classList.contains('show')) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

// === Formulier Validatie Functionaliteit ===
function valideerInput(input) {
    if (input.value.trim() === "") {
        input.style.backgroundColor = '#f01f30'; // Maak het veld rood als het leeg is
    } else {
        input.style.backgroundColor = 'rgb(211, 211, 211)'; // Herstel kleur als het veld niet leeg is
    }
}

function valideerFormulier(event) {
    let formIsValid = true;
    inputs.forEach(function(input) {
        if (input.value.trim() === "") {
            input.style.backgroundColor = '#f01f30'; // Maak het veld rood als het leeg is
            formIsValid = false;
        } else {
            input.style.backgroundColor = 'rgb(211, 211, 211)';
        }
    });
    if (!formIsValid) {
        event.preventDefault(); // Voorkom verzenden
    } else {
        console.log("Formulier succesvol ingediend!");
    }
}

inputs.forEach(function(input) {
    input.addEventListener('blur', function() {
        valideerInput(input);
    });
});

if (form) {
    form.addEventListener('submit', valideerFormulier);
}


// === Video Pauzeer/Afspelen Functionaliteit ===
function togglePlayPause() {
    if (video && button) {
        if (video.paused) {
            video.play();
            button.textContent = "Pause Video";
            button.setAttribute("aria-pressed", "true");
        } else {
            video.pause();
            button.textContent = "Play Video";
            button.setAttribute("aria-pressed", "false");
        }
    }
}

if (button) {
    button.addEventListener('click', togglePlayPause);
}

document.addEventListener('DOMContentLoaded', () => {
    if (!lightModeToggle) return;

    const toggleTheme = () => {
        const isLightMode = document.body.classList.toggle('light-mode');
        const theme = isLightMode ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        lightModeToggle.textContent = isLightMode ? 'Dark Mode' : 'Light Mode';
        lightModeToggle.setAttribute('aria-pressed', isLightMode ? 'true' : 'false');
    };

    lightModeToggle.addEventListener('click', toggleTheme);

    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        lightModeToggle.textContent = 'Dark Mode';
        lightModeToggle.setAttribute('aria-pressed', 'true');
    }
});
