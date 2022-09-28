function handleTask (event){
    const targetTask = event.target;
    switch (targetTask.name) {
        case "deleteTask":
            targetTask.closest('.row').classList.toggle("animate__fadeOut");
            targetTask.closest('.row').addEventListener('animationend', () =>{
                targetTask.closest('.row').remove();
            })
        case "checkTask":
            targetTask.disabled = true;
            const taskRow = targetTask.closest('.row');
            const taskContent = taskRow.querySelector('li');
            taskContent.innerHTML = `<del>${taskContent.innerHTML}</del>`;
            const deleteButton = taskRow.querySelector('button');
            deleteButton.disabled = true;
    }
}

module.exports = handleTask;