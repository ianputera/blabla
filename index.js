const togglePassword = document.getElementById("togglePassword")
const inputPassword = document.getElementById("password")

togglePassword.addEventListener("click", () => {
  if (inputPassword.getAttribute("type") == "password") {
    inputPassword.setAttribute("type", "text")
  } else {
    inputPassword.setAttribute("type", "password")
  }
})