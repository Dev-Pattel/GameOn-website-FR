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
  if (prenom.length >= 2) {
    return true
  } 
  return false
}
function validerNom(nom) {
  if (nom.length < 2) {
    throw new Error("Veuillez entrer 2 caractères ou plus pour le champ du nom.")
  }  
}

/**  Fonction pour valider l'email dans le champ de saisie
 * @param {string} email
*/

function validerEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9.-_]+@[a-z0-9.-_]+\\.[a-z0-9.-_]+")
  if (emailRegExp.test(email)) {
    return true
  }
  return false
}

/** Fonction pour déterminer si la date de naissance a bien été selectionnée
 * @param {Date} birthDate 
 * @throws {Error}
 */
function birthDateSelected(birthDate) {
  if (!birthDate) {
    throw new Error("Vous devez entrer votre date de naissance.")
  }

}

/** Fonction pour déterminer si une quantité d'évènements a bien été sélectionnée
 * @param {number} quantity 
 */
function eventQuantity(quantity) {
  if (quantity !== "") {
    return true
  }
  return false
}

/** Fonction pour déterminer si une option a été sélectionnée
 * @param {string} isLocationSelected 
 * @throws {Error}
 */
function locationSelected(isLocationSelected) {

  if (!isLocationSelected) {
    throw new Error("Vous devez choisir une option.")
  }
}

/**Fonction pour déterminer si la checkbox des conditions générales d'utilisation a bien été cochée 
 * @param {boolean} termsAccepted 
 * @throws {Error}
 */
function conditionsGeneralesChecked(termsAccepted) {
  if (!termsAccepted) {
    throw new Error("Vous devez vérifier que vous acceptez les termes et conditions.")
  }

}

/**Fonction pour l'affichage et la création d'un message d'erreur s'il l'un des champs du formulaire est incomplet
 * Le message s'affiche sous le bouton de validation du formulaire
 * @param {string} message 
 */
function afficherMessageErreur(message) {
 
  let spanErreurMessage = document.getElementById("erreurMessage")

  if (!spanErreurMessage) {
    let contentErreur = document.querySelector(".content")
    spanErreurMessage = document.createElement("span")
    spanErreurMessage.id = "erreurMessage"
    contentErreur.append(spanErreurMessage)
  }

  spanErreurMessage.innerText = message
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

  try {
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
    afficherMessageErreur("")
  } catch(erreur) {
    afficherMessageErreur(erreur.message)
  }

  }
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    closeModal()
  
  
  })