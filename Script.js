const input = document.getElementById("inp");
const list = document.getElementById("tlist");
const btn = document.getElementById("btn");

// Load tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks
function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerText = task;

    const delBtn = document.createElement("button");
    delBtn.innerText = "DELETE";

    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1);   // remove from array
      saveTasks();              // save updated array
      renderTasks();            // update UI
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// Add task
btn.addEventListener("click", () => {
  const taskn = input.value.trim();

  if (taskn === "") {
    alert("Enter Task");
    return;
  }

  tasks.push(taskn);
  saveTasks();
  renderTasks();
  input.value = "";
});

// Show saved tasks on page load
renderTasks();
