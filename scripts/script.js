console.log("hi");

// === Constantes ===
const hamburger = document.querySelector('#hamburger'); //hamburgericoon
const inputs = document.querySelectorAll('input[type="text"], input[type="email"]'); //invoervelden
const form = document.querySelector('form'); //formulier
const navMenu = document.querySelector('.nav-menu'); //navigatiemenu


// Functies

// Functie om invoervelden te valideren
function valideerInput(input) {
    if (input.value === "") {
        input.style.backgroundColor = rgb(197, 5, 5) // Maak het veld rood als het leeg is
    } else {
        input.style.backgroundColor = 'rgb(96, 96, 96)'; // Maak het veld grijs als er iets is ingevuld
    }
}

// Functie om invoerveld te stylen bij focus
function stijlFocusInput(input) {
    input.style.backgroundColor = 'white'; // Maak het veld wit bij focus
}

// Functie om het formulier te valideren
function valideerFormulier(event) {
    let formIsValid = true;

    inputs.forEach(function(input) {
        if (input.value.trim() === "") { // Controleer of het veld leeg is
            input.style.backgroundColor = '#f01f30'; // Maak het veld rood als het leeg is
            formIsValid = false; // Zet formulier als ongeldig
        } else {
            input.style.backgroundColor = 'rgb(96, 96, 96)'; // Herstel kleur als het veld niet leeg is
        }
    });

    // Voorkom dat het formulier verzonden wordt als niet alle velden correct zijn ingevuld
    if (!formIsValid) {
        event.preventDefault(); // Voorkom de standaard submit-actie
    } else {
        console.log("Formulier succesvol ingediend!"); // Succeslog bij indiening
    }
}

// Functie voor het toggelen van het hamburger menu
function toggleMenu() {
    navMenu.classList.toggle('show'); // Toggle de 'show' klasse
    hamburger.classList.toggle('active'); // Toggle de 'active' klasse voor de hamburger

    // Voeg of verwijder de no-scroll klasse van de body
    if (navMenu.classList.contains('show')) {
        document.body.classList.add('no-scroll'); // Voorkom scrollen op de achtergrond
    } else {
        document.body.classList.remove('no-scroll'); // Sta scrollen toe als het menu gesloten is
    }
}


// Event listeners

// Voeg 'blur' en 'focus' event listeners toe aan elk inputveld
inputs.forEach(function(input) {
    input.addEventListener('blur', function() {
        valideerInput(input);
    });

    input.addEventListener('focus', function() {
        stijlFocusInput(input);
    });
});

// Voeg 'submit' event listener toe aan het formulier
form.addEventListener('submit', valideerFormulier);

// Voeg 'click' event listener toe aan de hamburger om het menu te toggelen
hamburger.addEventListener('click', toggleMenu);

