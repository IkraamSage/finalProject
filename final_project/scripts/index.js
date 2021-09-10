fetch("https://sage-automation.herokuapp.com/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

function login() {
  let email = document.querySelectorAll('#email').value;
  let password = document.querySelectorAll('#password').value;
  console.log(email,password);  

  fetch()
}
