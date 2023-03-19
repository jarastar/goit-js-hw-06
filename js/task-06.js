const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const dataLength = Number(input.getAttribute("data-length"));
  const inputValue = input.value.trim().length;

  if (inputValue === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
