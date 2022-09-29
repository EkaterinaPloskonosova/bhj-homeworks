const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

tasksAdd.addEventListener('click', (e) => {
    e.preventDefault();
    taskAdd();
});

function taskAdd() { 
    if (taskInput.value.trim() !== '') {
        const div = document.createElement('div');
        div.classList.add = 'task';
        div.innerHTML = `<div class='task'><div class='task__title'>`+ taskInput.value +`</div><a href='#' class='task__remove'>&times;</a></div>`;
        tasksList.appendChild(div);

        const taskRemove = div.querySelector('.task__remove');
        taskRemove.addEventListener('click', () => {
            tasksList.removeChild(div);
        });
        taskInput.value = '';
    }
}