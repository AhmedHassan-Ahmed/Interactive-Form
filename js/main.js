const namei = document.querySelector("#name");
const namev = document.querySelector(".name");
const ok = document.querySelector(".row .fa-circle-check");
let counter = 0;
const ok2 = document.querySelector(".row2 .fa-circle-check");
const ok3 = document.querySelector(".row3 .fa-circle-check");
namei.onkeyup = function () {
  if (namei.value.length > 6) {
    namev.innerHTML = "available";
    ok.style.display = "block";
    namev.classList.add("nameg");
    namev.classList.remove("namec");
  } else {
    namev.innerHTML = "Not available";
    namev.classList.add("namec");
    namev.classList.remove("nameg");
    ok.style.display = "none";
  }
};

const gmail = document.querySelector("#email");
const gmailv = document.querySelector(".gmail");
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
const validpassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[A-Za-z\d\W]{8,}$/;
const password = document.querySelector("#password");
const passwordMessage = document.querySelector(".password");

gmail.onkeyup = function () {
  if (regex.test(gmail.value.trim())) {
    gmailv.innerHTML = "valid Email address";
    gmailv.classList.add("nameg");
    gmailv.classList.remove("namec");
    ok2.style.display = "block";
  } else {
    gmailv.innerHTML = "Invalid Email address";
    gmailv.classList.add("namec");
    gmailv.classList.remove("nameg");
    ok2.style.display = "block";
    ok2.style.display = "none";
  }
};

password.onkeyup = function () {
  if (validpassword.test(password.value)) {
    passwordMessage.innerHTML = "correct";
    passwordMessage.classList.add("nameg");
    passwordMessage.classList.remove("namec");
    ok3.style.display = "block";
  } else {
    passwordMessage.innerHTML = `Password must be at least 8 characters long and include:
• At least one uppercase letter (A-Z)
• At least one lowercase letter (a-z)  
• At least one number (0-9)
• At least one special character (@$!%*?&)`;
    passwordMessage.classList.add("namec");
    ok3.style.display = "none";
    passwordMessage.classList.remove("nameg");
  }
};

const submit = document.querySelector(".submit");
const hr = document.querySelector(".hr");

const targetedit = document.querySelector(".two");
const prevedit = document.querySelector(".one");
const prevesection = document.querySelector(".column1");
const targetsection = document.querySelector(".column");
const hiName = document.querySelector(".column span");
const gmailsent = document.querySelector(".column div");

submit.addEventListener("click", function (event) {
  if (
    namev.innerHTML.includes("available") &&
    gmailv.innerHTML.includes("valid Email address") &&
    passwordMessage.innerHTML.includes("correct")
  )
    counter = 3;
  if (counter != 3) {
    event.preventDefault();
    alert("Enter a valid information");
  } else {
    event.preventDefault();
    var name = namei.value;
    var gmail3 = gmail.value;
    const gmail2 = gmail3.replace(
      /^([a-zA-Z0-9]{2})([a-zA-Z0-9]*)(@gmail\.com)$/i,
      (match, keep, Hide, domain) => {
        return keep + "*".repeat(Hide.length) + domain;
      }
    );
    prevesection.style.transform = " translateX(-556px)";
    targetsection.style.transform = " translateX(0)";

    hiName.innerHTML += name.trim();
    gmailsent.innerHTML += `We sent you a link via your email : ${gmail2.trim()} to confirm your account. You will then easily be able to access your account and any saved forms.`;
    console.log(name);
    hr.style.width = "360px";
    submit.style.display = "none";
    targetedit.classList.remove("notcolored");
    targetedit.classList.add("colored");
    prevedit.classList.remove("colored");
    prevedit.classList.add("notcolored");
  }
});
