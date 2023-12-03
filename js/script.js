let add = document.querySelector(".btn");
let wrapper = document.querySelector(".wrapper");
let input = document.querySelector(".input");
let error = document.querySelector(".error");

// window.onload = () => {
//   taskNumber.innerHTML = 0;
// };

const addTodo = () => {
  if (!input.value == "") {
    error.style.display = "none";
    let text = input.value.trim();

    const todos = `<div class="todo"> <input type="checkbox" class="check"> <span class='taskInput'>${text}</span><i class="fa-regular fa-pen-to-square edit"></i><i class="fa-solid fa-trash delete"></i></div>`;

    wrapper.insertAdjacentHTML("beforeend", todos);
    input.value = "";

    let del = document.querySelectorAll(".delete");
    del.forEach((item) => {
      item.addEventListener("click", (e) => {
        item.parentElement.remove();
      });
    });

    let edit = document.querySelectorAll(".edit");

    edit.forEach((item) => {
      item.addEventListener("click", (e) => {
        input.value = e.target.previousElementSibling.innerText;
        e.target.parentElement.remove();

        input.focus();
      });
    });

    let taskInput = document.querySelector(".taskInput");
    let check = document.querySelectorAll(".check");

    check.forEach((x) => {
      x.addEventListener("change", (e) => {
        console.log("hello");

        if (x.checked) {
          e.target.nextElementSibling.classList.toggle("line");
        } else {
          e.target.nextElementSibling.classList.toggle("line");
        }
      });
    });
  } else {
    error.style.display = "block";
  }
};

add.addEventListener("click", addTodo);
// add.addEventListener("click", () => addTodo(input.value));
