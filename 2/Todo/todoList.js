window.onload = () => {
  render();

  // 등록
  document.querySelector(".insert-btn").addEventListener("click", () => {
    let arr = JSON.parse(localStorage.getItem("todo"));
    let index;
    if (!arr) {
      arr = [];
      index = 0;
    } else {
      index = arr[arr.length - 1].id + 1;
    }

    let todo = {};
    todo.id = index;
    todo.text = document.querySelector("#insert-input").value;
    todo.do = false;

    arr.push(todo);
    localStorage.setItem("todo", JSON.stringify(arr));

    document.querySelector("#insert-input").value = "";
    render();
  });
};

// 출력
const render = () => {
  const todoListDiv = document.querySelector(".todo-list-div");
  todoListDiv.innerHTML = "";

  let todoArr = JSON.parse(localStorage.getItem("todo"));

  if (todoArr) {
    const div = document.createElement("div");
    todoArr.forEach((todo, index) => {
      const ul = document.createElement("ul");
      const idx = document.createElement("li");
      idx.innerText = index+"번";
      const check = document.createElement("input");
      check.type = "checkbox";
      check.checked = todo.do;

      check.onchange = () => {
        checkTodo(todo.id);
      };

      const text = document.createElement("li");
      text.innerText = todo.text;
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "삭제";
      deleteBtn.onclick = () => {
        deleteTodo(todo.id);
      };

      ul.append(check, idx, text, deleteBtn);
      div.append(ul);
    });

    todoListDiv.append(div);
  } else {
    todoListDiv.innerHTML = "내용 없음";
  }
};

// 체크
const checkTodo = (id) => {
  let arr = JSON.parse(localStorage.getItem("todo"));
  arr.filter((el, index) => {
    if (el.id == id) {
      el.do = !el.do;
      return;
    }
  });

  localStorage.setItem("todo", JSON.stringify(arr));
  render();
};

// 삭제
const deleteTodo = (id) => {
  let arr = JSON.parse(localStorage.getItem("todo"));

  let idx;
  arr.filter((el, index) => {
    if (el.id == id) {
      idx = index;
      return;
    }
  });
  arr.splice(idx, 1);

  localStorage.setItem("todo", JSON.stringify(arr));

  render();
};
