'use strict';

const todoControl = document.querySelector('.todo-control'),
      headerInput = document.querySelector('.header-input'),
      todoList = document.querySelector('.todo-list'),
      todoCompleted = document.querySelector('.todo-completed');

const todoData = [];

const render = function() {

  todoList.textContent = '';
  todoCompleted.textContent = '';


  todoData.forEach(function(item) {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML = 
    '<span class="text-todo">' + item.value + '</span>' +
    '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
		'</div>';

    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    const btnTodoCompleted = li.querySelector('.todo-complete');
    const btnTodoRemove = li.querySelector('.todo-remove');


    btnTodoCompleted.addEventListener('click', function() {
      item.completed = !item.completed;
      render();
    });

    btnTodoRemove.addEventListener('click', function(e) {

      const obj = {
        
        value: e.target.parentNode.parentNode.childNodes[0].textContent,
        completed: e.target.parentElement.parentElement.parentElement.id === 'todo'
        ? false : true
      };
      console.log('obj: ', obj);
      console.log('todoData[0]: ', todoData[0]);
      console.log(todoData[0] === obj);
      const objIndex = todoData.indexOf(obj);
      console.log('objIndex: ', objIndex);

      render();
    });

  });

};

todoControl.addEventListener('submit', function(event) {
  event.preventDefault();
  if (headerInput.value !== '') {
    const newTodo = {
      value: headerInput.value,
      completed: false,
    };
    
    todoData.push(newTodo);
    headerInput.value = '';
    render();
  }

});

render();