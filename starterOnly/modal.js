function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


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

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function validate(event) {
  let location = document.getElementsByName("location");
  let location_error = document.getElementById("location-error-message");
  let thankYouMessage = document.getElementById("thank-you-message");
  let thankYouMessageHidden = document.getElementById("thank-you-message-hidden");
  const entireForm = document.getElementById("form-contents");
  let isAnyChecked = false;

  for (let i = 0; i < location.length; i++) {
    if (location[i].checked) {
      isAnyChecked = true;
      break;
    }
  }

  if (!isAnyChecked) {
    event.preventDefault();
    location_error.style.display = "block";
  } else {
    location_error.style.display = "none";
    entireForm.style.display = "none";
    thankYouMessage.classList.add("visible");
    thankYouMessageHidden.value = "true";

    // Prevent the page from reloading
    event.preventDefault();

    // Add a delay to hide the "Thank you" message
    setTimeout(function () {
      thankYouMessage.classList.remove("visible");
      thankYouMessageHidden.value = "false";
      modalbg.classList.add('closing');
  setTimeout(() => {
    modalbg.style.display = 'none';
    setTimeout(() => {
      modalbg.classList.remove('closing');
    }, 0);
  }, 500);
    }, 2500);
    setTimeout(function () {
      entireForm.style.display = "flex";
    }, 4000);
  }
}
