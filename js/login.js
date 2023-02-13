// Step 1 set event
const login = document.getElementById("login");
login.addEventListener("click", function () {
  // check if working
  //   console.log("login clicked");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  //   console.log(email, password);
  if (!email) {
    alert("please provide email");
    return;
  } else if (!password) {
    alert("please provide password");
    return;
  } else {
    console.log(email);
    // Check if login info correct
    if (email !== "test@gmail.com") {
      alert("Wrong email");
      return;
    } else if (password !== "1234") {
      alert("Wrong password");
      return;
    } else {
      window.location.href = "/bank.html";
    }
  }
  console.log("login success");
});
