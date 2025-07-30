// --- DOM Interactions for Main Site ---
const quoteBtn = document.getElementById('changeQuoteBtn');
if (quoteBtn) {
  quoteBtn.addEventListener('click', () => {
    document.querySelector('.left-info p').textContent =
      "“The beautiful thing about learning is that nobody can take it away from you.” – B.B. King";
  });
}

const imageBtn = document.getElementById('changeImageBtn');
if (imageBtn) {
  imageBtn.addEventListener('click', () => {
    const img = document.querySelector('.resized-img');
    img.src = 'newImage.jpg';
  });
}

const navbar = document.getElementById('mainNavbar');
if (navbar) {
  navbar.addEventListener('click', () => {
    navbar.style.backgroundColor = navbar.style.backgroundColor === 'olive' ? 'darkgreen' : 'olive';
  });
}

// --- Guess the Number Game ---
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessList = [];

function checkGuess() {
  const userGuess = Number(document.getElementById("guessField").value);
  const message = document.getElementById("message");
  const previousGuesses = document.getElementById("previousGuesses");

  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    message.textContent = "Enter a valid number between 1 and 100.";
    message.style.color = "orange";
    return;
  }

  guessList.push(userGuess);
  previousGuesses.textContent = "Previous guesses: " + guessList.join(", ");

  if (userGuess === randomNumber) {
    message.textContent = "🎉 Correct! You guessed the number!";
    message.style.color = "green";
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low. Try again.";
    message.style.color = "red";
  } else {
    message.textContent = "Too high. Try again.";
    message.style.color = "red";
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessList = [];
  document.getElementById("guessField").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("message").style.color = "";
  document.getElementById("previousGuesses").textContent = "Previous guesses: ";
}

// --- Login Feature ---
function promptLogin() {
  let name = prompt("Please enter your name:");

  while (!/^[a-zA-Z]+$/.test(name)) {
    if (name === null) return;
    alert("Name must contain letters only (A–Z)");
    name = prompt("Please enter your name:");
  }

  document.getElementById("userNameDisplay").textContent = name;
  document.getElementById("welcomeMessage").textContent = `Welcome, ${name}!`;
}

// --- Form Validation ---
function validateForm() {
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    formMessage.textContent = "Please enter a valid name (letters only).";
    return false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    formMessage.textContent = "Please enter a valid email.";
    return false;
  }

  if (!/^\d{7,15}$/.test(phone)) {
    formMessage.textContent = "Please enter a valid phone number (7-15 digits).";
    return false;
  }

  if (subject.length < 3) {
    formMessage.textContent = "Subject must be at least 3 characters.";
    return false;
  }

  if (message.length < 10) {
    formMessage.textContent = "Message must be at least 10 characters.";
    return false;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Form submitted successfully!";
  return false;
}

// --- Sign-In Form Submission + Display ---
const signInForm = document.getElementById("signInForm");
const result = document.getElementById("result");

if (signInForm && result) {
  signInForm.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("resName").textContent = document.getElementById("name").value;
    document.getElementById("resEmail").textContent = document.getElementById("email").value;
    document.getElementById("resAge").textContent = document.getElementById("age").value;
    document.getElementById("resSubject").textContent = document.getElementById("subject").value;
    document.getElementById("resReason").textContent = document.getElementById("reason").value;

    result.style.display = "block";
    signInForm.style.display = "none";
  });
}




