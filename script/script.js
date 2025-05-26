
    // const input = document.getElementById("todo-input");
    // const todoList = document.getElementById("todo-list");

    // function addTodo() {
    //   const value = input.value.trim();
    //   if (value === "") return;

    //   const todoItem = document.createElement("div");
    //   todoItem.className = "todo-item";
    //   todoItem.innerHTML = `
    //     <span>${value}</span>
    //     <button onclick="removeTodo(this)">Remove</button>
    //   `;

    //   todoList.appendChild(todoItem);
    //   input.value = "";
    // }

    // function removeTodo(button) {
    //   const todoItem = button.parentElement;
    //   todoList.removeChild(todoItem);
    // }
  

//   <!-- update version  -->


  const input = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  // Load todos from localStorage when page loads
  window.onload = function () {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.forEach(todo => {
      createTodoElement(todo);
    });
  };

  function addTodo() {
    const value = input.value.trim();
    if (value === "") return;

    createTodoElement(value);
    saveTodo(value);
    input.value = "";
  }

  function createTodoElement(text) {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.innerHTML = `
      <span>${text}</span>
      <button onclick="removeTodo(this, '${text}')">Remove</button>
    `;
    todoList.appendChild(todoItem);
  }

  function saveTodo(text) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(text);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function removeTodo(button, text) {
    const todoItem = button.parentElement;
    todoList.removeChild(todoItem);

    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodos = todos.filter(todo => todo !== text);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }
