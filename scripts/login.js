fetch("https://sage-automation.herokuapp.com/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

function login() {
  let email = document.querySelectorAll("#email").value;
  let password = document.querySelectorAll("#password").value;
  console.log(email, password);

  fetch("https://sage-automation.herokuapp.com/users/", {
    method: "PATCH",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (!res.data) {
        document.querySelector("#error").innerHTML =
          "No user found with those credentials";
        return;
      } else {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location = "./index.html";
      }
    });
}
