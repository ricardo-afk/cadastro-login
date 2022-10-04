const nomeLogin = document.getElementById("nomeLogin");
const emailLogin = document.getElementById("emailLogin");
const senhaLogin = document.getElementById("senhaLogin");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nomeLoginValue = nomeLogin.value;
  const emailLoginValue = emailLogin.value;
  const senhaLoginValue = password.value;
  

  if (nomeLoginValue === "") {
    setErrorFor(nomeLogin, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(nomeLogin);
  }

  if (emailLoginValue === "") {
    setErrorFor(emailLogin, "O email é obrigatório.");
  } else if (!checkEmail(emailLogin)) {
    setErrorFor(emailLogin, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(emailLogin);
  }

  if (senhaLoginValue === "") {
    setErrorFor(senhaLogin, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(senhaLogin, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(senhaLogin);
  }



  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
