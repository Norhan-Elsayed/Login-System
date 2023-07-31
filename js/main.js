var signUpArray = [];
var homeArray = [];
//first div
var loginForm = document.getElementById("login"); //big div
var signEmail = document.getElementById("signEmail");
var signPassword = document.getElementById("signPassword");
var incorrect = document.getElementById("incorrect");
var signupWord = document.getElementById("signupWord");
var loginBtn = document.getElementById("loginBtn");
var userName = document.getElementById("userName");
//second div
var signIn = document.getElementById("signIn"); //big div
var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var exist = document.getElementById("exist");
var signInWord = document.getElementById("signInWord");
var signUpBtn = document.getElementById("signUpBtn");

//check of null
if (localStorage.getItem("item") != null) {
  signUpArray = JSON.parse(localStorage.getItem("item"));
}
//move between signUp and signIn
signupWord.addEventListener("click", function () {
  loginForm.classList.add("d-none");
  signIn.classList.replace("d-none", "d-flex");
});
signInWord.addEventListener("click", function () {
  signIn.classList.replace("d-flex", "d-none");
  loginForm.classList.replace("d-none", "d-flex");
});
//check of empty on second page (signUp)
signUpBtn.addEventListener("click", getData);
function getData() {
  let signUpObject = {
    Name: signupName.value,
    Email: signupEmail.value,
    Password: signupPassword.value,
  };
  if (
    signupName.value == "" ||
    signupEmail.value == "" ||
    signupPassword.value == ""
  ) {
    document.getElementById(
      "exist"
    ).innerHTML = `<span class="text-danger m-3">All inputs is required</span>`;
  } else if (
    checkName(signupName.value) &&
    checkEmail(signupEmail.value) &&
    checkPass(signupPassword.value)
  ) {
    signUpArray.push(signUpObject);
    localStorage.setItem("item", JSON.stringify(signUpArray));
    document.getElementById(
      "exist"
    ).innerHTML = `<span class="text-info m-3">Success</span>`;
  } else {
    exist.innerHTML = "incorrect syntax";
  }
}
//check of empty on first page (login). And login home
loginBtn.addEventListener("click", function () {
  if (signEmail.value == "" || signPassword.value == "") {
    document.getElementById(
      "incorrect"
    ).innerHTML = `<span class="text-danger m-3">All inputs is required</span>`;
  } else {
    for (var i = 0; i < signUpArray.length; i++) {
      if (
        signUpArray[i].Email == signEmail.value &&
        signUpArray[i].Password == signPassword.value
      ) {
        homeArray.push(signUpArray[i]);
        window.open("home.html", "_top");
        localStorage.setItem("data", JSON.stringify(homeArray));
        // document.getElementById("userName").innerHTML ="welcome"+ userName;
      } else {
        document.getElementById(
          "incorrect"
        ).innerHTML = `<span class="text-danger m-3">Email or password is not correct</span>`;
      }
    }
  }
});
//validation
function checkName(dta1) {
  var nameRegex = /^[a-zA-Z]{3,}/;
  return nameRegex.test(dta1);
}
function checkEmail(dta2) {
  var emailRegex = /^[a-zA-Z0-9_]{3,}@(gmail|yahoo).com$/;
  return emailRegex.test(dta2);
}
function checkPass(dta3) {
  var passRegex = /^[a-zA-Z0-9#@]{6,}/;
  return passRegex.test(dta3);
}
