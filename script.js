let lessonForm = document.querySelector("#lessonForm");
let lessonList = document.querySelector("#lessonList");
let alert = document.querySelector("#alert");

lessonForm.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();
  let lessonName = document.querySelector("#lessonname");
  let score = document.querySelector("#score");
  if (lessonName.value && score.value) {
    addItem(lessonName.value, score.value); // gönderdikten sonra sıfırladık
    lessonName.value = "";
    score.value = "";
  } else {
    alert.innerHTML = alertFunction("HATA", "Eksik Bilgi Girdiniz", "danger");
  }
}

const addItem = (lessonName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `
  ${lessonName}
  <span class="badge bg-primary rounded-pill">${score}</span> `;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  liDOM.style.border = "3px solid";
  lessonList.appendChild(liDOM);
};
(",");

const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
