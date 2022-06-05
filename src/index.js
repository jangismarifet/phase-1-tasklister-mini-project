const form = document.getElementById("create-task-form");
const tasks = document.getElementById("tasks");


const submit = (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  let todo = form[0].value;
  let li = document.createElement('li');
  li.textContent = todo;
  tasks.appendChild(li);

}
document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", submit);
});