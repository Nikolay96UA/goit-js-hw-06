const formLog = document.querySelector(".login-form");

const submitLoginForm = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const LogObj = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    return alert("Будь-ласка, заповніть всі поля!");
  }

  console.log(LogObj);

  event.currentTarget.reset();
};

formLog.addEventListener("submit", submitLoginForm);
