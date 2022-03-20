const submitForm = () => {
  const user = document.getElementById("username").value;
  const pwd = document.getElementById("password").value;
  const pwd2 = document.getElementById("confirmPassword").value;

  if (pwd !== pwd2) {
    alert("Password is not match!!");
  } else {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pwd);
    window.location.href = "http://localhost:5500/html/home.html";
  }
};

const login = () => {
  const user = document.getElementById("usernameLogin").value;
  const pwd = document.getElementById("passwordLogin").value;

  colocalStorage.setItem("username", user);
  window.location.href = "http://localhost:5500/html/home.html";
};
const changeForm = () => {
  const node = document.getElementById("disableForm");

  if (node.style.transform) {
    node.style.removeProperty("transform");
  } else {
    node.style.transform = "translateX(320px)";
  }
};
