document.addEventListener('DOMContentLoaded', () => {
    console.log('działa');
    
    const removeFinishedTaskButton = document.querySelector('#removeFinishedTasksButton');
    const addTaskButton = document.querySelector('#addTaskButton');
    const taskInput = document.querySelector('#taskInput');
    const taskList = document.querySelector('#taskList');
    const uncompletedTasksCounter = document.querySelector('#counter');
    const createTask = (taskName) => {
        let taskElement = document.createElement('li');
        let taskNameElement = document.createElement('h1');
        taskNameElement.innerHTML = taskName;
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', e => {
            taskElement.parentElement.removeChild(taskElement);
        })
        let completeButton = document.createElement('button');
        completeButton.innerHTML = 'Complete';
        completeButton.addEventListener('click', e => {
            if(!taskElement.classList.contains('taskCompleted')) {
                taskElement.classList.add('taskCompleted');
                decreaseUncompletedTaskCounter();
            }
            else {
                taskElement.classList.remove('taskCompleted');
                increaseUncompletedTaskCounter();
            }
        })

        taskElement.appendChild(taskNameElement);
        taskElement.appendChild(deleteButton);
        taskElement.appendChild(completeButton);

        return taskElement;
    };
    const increaseUncompletedTaskCounter = () => {
        let number = Number.parseInt(uncompletedTasksCounter.innerHTML);
        uncompletedTasksCounter.innerHTML = ((++number)+'')
    };
    const decreaseUncompletedTaskCounter = () => {
        let number = Number.parseInt(uncompletedTasksCounter.innerHTML);
        uncompletedTasksCounter.innerHTML = ((--number)+'');
    };
    const getAndClearTaskInput = () => taskInput.value + (taskInput.value = '');

    addTaskButton.addEventListener('click', e => {
        let taskInputValue = getAndClearTaskInput();
        if(taskInputValue.length > 0)
        {
            let newTask = createTask(taskInputValue);
            taskList.appendChild(newTask);
            increaseUncompletedTaskCounter();
            
        } 
    });
    removeFinishedTaskButton.addEventListener('click', e => {
        for(let listElement of taskList.querySelectorAll('li')) {
            if(listElement.classList.contains('taskCompleted')) {
                taskList.removeChild(listElement);
            }
        }
    });
});