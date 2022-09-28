import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import "bootstrap-icons/font/bootstrap-icons.css";
const bootstrapClasses = require('./bootstrapClasses')
const addTask = require('./addTask');
const handleTask = require('./handleTask');

const taskManageForm = document.forms.tasks;
taskManageForm.onsubmit = (event)=>{
    event.preventDefault();
    if (taskDescription.value.trim()==="") {
        taskDescription.classList.add(...bootstrapClasses.tskDescription);
        taskDescription.addEventListener('animationend', () => {
            taskDescription.classList.remove("animate__animated", "animate__shakeX")
        });
    }
    else{
        taskList.append(addTask(taskDescription.value));
        taskDescription.value = "";
    }
}
const {taskDescription} = taskManageForm;
taskDescription.oninput = ()=>{
    taskDescription.classList.remove("border-danger");
}
const taskList = document.getElementById('list');
taskList.onclick = handleTask;
