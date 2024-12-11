function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close")


// DOM Champ de formulaire
const form = document.querySelector("form")

// Fonctions pour valider le nom et le prénom dans le champ de saisie
function validerPrenom(prenom) {
  if (prenom.length >= 2) {
    return true
  }
  return false  
}
function validerNom(nom) {
  if (nom.length >= 2) {
    return true
  }
  return false  
}

// Fonction pour valider l'email dans le champ de saisie
function validerEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9.-_]+@[a-z0-9.-_]+\\.[a-z0-9.-_]+")
  if (emailRegExp.test(email)) {
    return true
  }
  return false
}

function validate() {
// Récupération des champs
  const firstName = document.getElementById("first").value.trim()
  const lastName = document.getElementById("last").value.trim()
  const email = document.getElementById("email").value.trim()
  const quantity = document.getElementById("quantity").value

  //Verification qu'un bouton radio est selectionné
  const locations = document.querySelectorAll('input[name="location"]')
  const isLocationSelected = Array.from(locations).find(location => location.checked)?.value || null


  //Récupération champ conditions générales
  const termsAccepted = document.getElementById("checkbox1").checked

  //Vérification
  if (validerPrenom(firstName) && validerNom(lastName) && validerEmail(email) && quantity !== "" && isLocationSelected && termsAccepted ) {
    console.log(firstName, lastName, email, isLocationSelected)
    return true
  } else {
    console.log("Erreur")
    return false
  }
  

  
}


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//Submit Form
form.addEventListener("submit", (event) => {
  event.preventDefault()
  validate


})