const btns = document.querySelectorAll(".rate-btn");
const txt = document.querySelector("#selected-value");
const submit = document.querySelector(".submit");
const request = document.querySelector(".request");
const result = document.querySelector(".result");
const txtError = document.querySelector(".error-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", handleClickBtn);
  function handleClickBtn(e) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    txt.textContent = e.target.textContent;
    txtError.style.visibility = "hidden";
  }
});

submit.addEventListener("click", handleClickSubmit);

function handleClickSubmit() {
  if (!txt.textContent) {
    txtError.style.visibility = "visible";
  } else {
    request.style.display = "none";
    result.style.display = "flex";
  }
}
