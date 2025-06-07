// ЗАДАЧА  на LocalStorage =========================================

// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

// const checkbox = document.getElementById("checkbox");
// const body = document.querySelector("body");
// const KEY_THEME = "active-theme";

// const darkTheme = "dark-theme";
// const lightTheme = "light-theme";

// const getTheme = localStorage.getItem(KEY_THEME);
// if (getTheme === darkTheme) {
//   body.classList.add("dark");
//   checkbox.checked = true;
// }
// if (getTheme === lightTheme) {
//   body.classList.add("light");
//   checkbox.checked = false;
// }

// checkbox.addEventListener("click", handle);

// function handle() {
//   if (checkbox.checked === false) {
//     localStorage.setItem(KEY_THEME, lightTheme);
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }
//   if (checkbox.checked === true) {
//     localStorage.setItem(KEY_THEME, darkTheme);
//     body.classList.add("dark");
//     body.classList.remove("light");
//   }
// }

// ЗАДАЧА на LocalStorage =========================================

// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #task-list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

const form = document.querySelector("#task-form");
const input = document.querySelector('input[name="taskName"]');
const taskList = document.querySelector("#task-list");
const TASKS_KEY = "tasks";

let tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];

form.addEventListener("submit", addTask);
function addTask(event) {
  event.preventDefault();
  const task = input.value.trim();
  if (task !== "") {
    tasks.push(task);
    input.value = "";
    renderTasks();
    saveTasks();
  }
}

function deleteTask(event) {
  const taskIndex = event.target.dataset.index;
  tasks.splice(taskIndex, 1);
  renderTasks();
  saveTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerText = task;
    const btn = document.createElement("button");
    btn.innerText = "Delete me";
    btn.dataset.inde = index;
    btn.addEventListener("click", deleteTask);

    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

renderTasks();
