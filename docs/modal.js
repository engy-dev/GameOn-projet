function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
var divElement = document.querySelector("#myTopnav");
var elemHeight = divElement.clientHeight;
document.documentElement.style.setProperty('--top-nav-height', elemHeight + 'px');
/// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formElement = document.querySelector("form"); // get the form element
const closeElement = document.querySelector('.content .close');
const formData = document.querySelectorAll(".formData");


// launch modal event and close it 
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeElement.addEventListener('click', () => {
  modalbg.classList.add('closing');
  setTimeout(() => {
    modalbg.style.display = 'none';
    setTimeout(() => {
      modalbg.classList.remove('closing');
    }, 0);
  }, 500);
});
// close thank you message 
const closeButton = document.querySelector("#thank-you-message .close");
const fermerButton = document.querySelector("#thank-you-message .btn-fermer");
function closeModal() {
  document.getElementById("reservation").submit();
}
closeButton.addEventListener("click", closeModal);
fermerButton.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


function validate(event) {
  event.preventDefault();
  const location = document.getElementsByName("location");
  const entireForm = document.getElementById("form-contents");
   const firstName = document.getElementById("first");
   const lastName = document.getElementById("last");
   const email = document.getElementById("email");
   const birthdate = document.getElementById("birthdate");
   const conditions = document.getElementById("checkbox1");
  let thankYouMessage = document.getElementById("thank-you-message");
  let thankYouMessageHidden = document.getElementById("thank-you-message-hidden");
 
   // reset error messages
   document.getElementById("prenom-error-message").style.display = "none";
   document.getElementById("nom-error-message").style.display = "none";
   document.getElementById("email-error-message").style.display = "none";
   document.getElementById("birthdate-error-message").style.display = "none";
   document.getElementById("location-error-message").style.display = "none";
   document.getElementById("checkbox-error-message").style.display = "none";
 
  
  // check first name
  if (firstName.value.length < 2) {
    document.getElementById("prenom-error-message").style.display = "block";
  }

  // check last name
  if (lastName.value.length < 2) {
    document.getElementById("nom-error-message").style.display = "block";
  }

  // check email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    document.getElementById("email-error-message").style.display = "block";
  }

  // check birthdate
  if (!birthdate.value) {
    document.getElementById("birthdate-error-message").style.display = "block";
  }
  
// check previous tournaments number
const quantityField = document.getElementById("quantity");
const quantityValue = quantityField.value.trim();
if (quantityValue === "") {
  document.getElementById("quantity-error-message").style.display = "block";}

  // check location
  let locationChecked = false;
  for (let i = 0; i < location.length; i++) {
    if (location[i].checked) {locationChecked = true;
      break;
    }
  }
  if (!locationChecked) {
    document.getElementById("location-error-message").style.display = "block";
  }

  // check conditions
  if (!conditions.checked) {
    document.getElementById("checkbox-error-message").style.display = "block";
  }

  // submit the form if all checks pass
  if (
    firstName.value.length >= 2 &&
    lastName.value.length >= 2 &&
    emailRegex.test(email.value) &&
    birthdate.value &&
    locationChecked &&
    quantityValue !== "" &&
    conditions.checked
  ) {
    entireForm.style.display = "none";
    thankYouMessage.classList.add("visible");
    thankYouMessageHidden.value = "true";
  }
  }
  