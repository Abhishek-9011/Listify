const tasks = [];

function updateTaskCounts() {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  document.getElementById(
    "total-tasks"
  ).textContent = `Total Tasks: ${totalTasks}`;
  document.getElementById(
    "completed-tasks"
  ).textContent = `Completed Tasks: ${completedTasks}`;
  document.getElementById(
    "pending-tasks"
  ).textContent = `Pending Tasks: ${pendingTasks}`;
}

(function addElement() {
  const addButton = document.getElementById("add");
  addButton.addEventListener("click", function () {
    const taskText = document.getElementById("input-box").value;
    if (taskText.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.className = "done-button";
    doneButton.addEventListener("click", function () {
      newTask.completed = true;
      listItem.classList.add("completed");
      updateTaskCounts();
    });

    listItem.appendChild(doneButton);

    const list = document.getElementById("list");
    list.appendChild(listItem);

    document.getElementById("input-box").value = "";
    updateTaskCounts();
  });
})();

(function deleteAllTasks() {
  document.getElementById("deleteAll").addEventListener("click", function () {
    const list = document.getElementById("list");
    list.innerHTML = "";
    tasks.length = 0;
    updateTaskCounts();
  });
})();

(function completeAll() {
  document.getElementById("completeAll").addEventListener("click", function () {
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].completed = true;
    }
    updateTaskCounts();
    const listItems = document.getElementById("list").childNodes;
    listItems.forEach((item) => {
      if (item.nodeName === "LI") {
        item.classList.add("completed");
      }
    });
  });
})();

function darkTheme() {
  const moonButton = document.getElementById("moon");
  moonButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      moonButton.src = "sun.png";
    } else {
      moonButton.src = "moon.png";
    }
  });
}

darkTheme();
