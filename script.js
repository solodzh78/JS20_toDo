'use strict';

const todoControl = document.querySelector('.todo-control'),
      headerInput = document.querySelector('.header-input'),
      todoList = document.querySelector('.todo-list'),
      todoCompleted = document.querySelector('.todo-completed');

const todoData = [
  {
    value: 'Сварить кофе',
    completed: false
  },
  {
    value: 'Помыть посуду',
    completed: true
  },
];

const render = function() {

};

todoControl.addEventListener('submit', function(event) {
  event.preventDefault();
});