const tasks = [];

(function addElement() {
  const addButton = document.getElementById("add");
  addButton.addEventListener("click", function () {
    const task = document.getElementById("input-box").value;
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = task;
    const list = document.getElementById("list");
    list.appendChild(newTask);

    document.getElementById("input-box").value = "";
  });
})();

