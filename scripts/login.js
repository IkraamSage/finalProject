function login() {
  let user = document.querySelector("#username").value;
  let userpassword = document.querySelector("#password").value;
  let userValues = { username: user, password: userpassword };

  console.log(userValues);

  fetch("https://sage-automation.herokuapp.com/user_login/", {
    method: "POST",
    body: JSON.stringify(userValues),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

let signInButton = document.querySelector(".signInButton");

// switch between register and sign in
let switchButtons = document.querySelectorAll(".switchButton");
let signInForm = document.querySelector(".signIn");
let registerForm = document.querySelector(".register");

switchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    signInForm.classList.toggle("active");
    registerForm.classList.toggle("active");
  });
});
