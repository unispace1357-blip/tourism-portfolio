const buttons = document.querySelectorAll("#journey button");
const detail = document.getElementById("journeyDetail");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    detail.innerHTML = `<strong>${button.dataset.step}</strong><p>${button.dataset.desc}</p>`;
  });
});
