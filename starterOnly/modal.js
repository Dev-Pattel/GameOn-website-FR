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

/** Ces fonctions prennent en paramètre un nom pour l'une, un prénom pour l'autre en paramètre et valident qu'ils soient au bon format.
* Le nom et le prénom doivent tous deux avoir au minimum deux caractères pour être valides
* @param {string} nom
* @throws {Error}
*/

function validerPrenom(prenom) {
  const firstNameField = document.getElementById("first").parentElement

  if (prenom.length < 2) {
    firstNameField.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
    firstNameField.setAttribute("data-error-visible", "true")
    throw new Error("Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
     
  }
  firstNameField.removeAttribute("data-error")
  firstNameField.setAttribute("data-error-visible", "false")
}

function validerNom(nom) {
  const lastNameField = document.getElementById("last").parentElement

  if (nom.length < 2) {
    lastNameField.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
    lastNameField.setAttribute("data-error-visible", "true")
    throw new Error("Veuillez entrer 2 caractères ou plus pour le champ du nom.")
     
  }
  lastNameField.removeAttribute("data-error")
  lastNameField.setAttribute("data-error-visible", "false")
} 

/**  Fonction pour valider l'email dans le champ de saisie
 * @param {string} email
*/

function validerEmail(email) {
  const emailField = document.getElementById("email").parentElement
  const emailRegExp = new RegExp("[a-z0-9.-_]+@[a-z0-9.-_]+\\.[a-z0-9.-_]+")

  if (!emailRegExp.test(email)) {
    emailField.setAttribute("data-error", "Veuillez entrer une adresse email valide.")
    emailField.setAttribute("data-error-visible", "true")
    throw new Error("Veuillez entrer une adresse email valide.")
  }
  emailField.removeAttribute("data-error")
  emailField.setAttribute("data-error-visible", "false")
}

/** Fonction pour déterminer si la date de naissance a bien été selectionnée
 * @param {Date} birthDate 
 * @throws {Error}
 */
function birthDateSelected(birthDate) {
  const birthDateField = document.getElementById("birthdate").parentElement

  if (!birthDate) {
    birthDateField.setAttribute("data-error", "Vous devez choisir une date de naissance")
    birthDateField.setAttribute("data-error-visible", "true")
    throw new Error("Vous devez entrer votre date de naissance.")
  }
  birthDateField.removeAttribute("data-error")
  birthDateField.setAttribute("data-error-visible", "false")

}

/** Fonction pour déterminer si une quantité d'évènements a bien été sélectionnée
 * @param {number} quantity 
 */
function eventQuantity(quantity) {
  const quantityField = document.getElementById("quantity").parentElement

  if (quantity === "") {
    quantityField.setAttribute("data-error", "Vous devez sélectionner un nombre de participations")
    quantityField.setAttribute("data-error-visible", "true")
    throw new Error("Vous devez sélectionner un nombre de participations")
  }
  quantityField.removeAttribute("data-error")
  quantityField.setAttribute("data-error-visible", "false")
  
}

/** Fonction pour déterminer si une option de lieu a été sélectionnée
 * @param {string} isLocationSelected 
 * @throws {Error}
 */
function locationSelected(isLocationSelected) {
  const locationField = document.querySelector(".formRadio")

  if (!isLocationSelected) {
    locationField.setAttribute("data-error", "Vous devez choisir une option.")
    locationField.setAttribute("data-error-visible", "true")
    throw new Error("Vous devez choisir une option.")
  }

  locationField.removeAttribute("data-error")
  locationField.setAttribute("data-error-visible", "false")
}

/**Fonction pour déterminer si la checkbox des conditions générales d'utilisation a bien été cochée 
 * @param {boolean} termsAccepted 
 * @throws {Error}
 */
function conditionsGeneralesChecked(termsAccepted) {
  const termsField = document.getElementById("checkbox1").parentElement

  if (!termsAccepted) {
    termsField.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.")
    termsField.setAttribute("data-error-visible", "true")
    throw new Error("Vous devez vérifier que vous acceptez les termes et conditions.")
    
  }
  termsField.removeAttribute("data-error")
  termsField.setAttribute("data-error-visible", "false")

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


/** La fonction se déclenche au moment du submit du form */

function validate() {

    
  // Récupération des champs
    const firstName = document.getElementById("first").value.trim()
    const lastName = document.getElementById("last").value.trim()
    const email = document.getElementById("email").value.trim()
    const birthDate = document.querySelector('input[name="birthdate"]').value
    const quantity = document.getElementById("quantity").value
    const locations = document.querySelectorAll('input[name="location"]')
    const isLocationSelected = Array.from(locations).find(location => location.checked)?.value || null
    const termsAccepted = document.getElementById("checkbox1").checked
  
    //Appel de toutes les fonctions de validations
    validerPrenom(firstName)
    validerNom(lastName)
    validerEmail(email)
    birthDateSelected(birthDate)
    eventQuantity(quantity)
    locationSelected(isLocationSelected)
    conditionsGeneralesChecked(termsAccepted)
    
    console.log(firstName, lastName, email, quantity, birthDate, isLocationSelected, termsAccepted )

  }
  form.addEventListener("submit", (event) => {
    event.preventDefault()
  
  
  })