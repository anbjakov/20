const createDeleteButton =()=>{
    const deleteIcon  = '<i class="bi bi-trash pointerEvents"></i>';
    const button = document.createElement("button");
    button.name="deleteTask";
    button.innerHTML = `${deleteIcon} Delete`;
    button.classList.add('btn', 'btn-primary','w-100','border','animate__animated','animate__fadeIn');
    return button
}

const task =(content)=>{
    const item = document.createElement('li');
    item.classList.add("list-group-item","form-control","animate__animated","animate__fadeIn");
    item.innerHTML = content
    return item
}


const taskRow =(...elements)=>{
    const row = document.createElement('div');
    row.classList.add('row');
    row.append(...elements);
    return row
}

const inputGroupWrap =(...elements)=> {
    const wrap = document.createElement('div');
    wrap.classList.add("input-group", "mb-3");
    wrap.append(...elements);
    return wrap;
}
const inputGroupText =(...elements)=>{
    const wrap = document.createElement('div');
    wrap.classList.add("input-group-text");
    wrap.append(...elements);
    return wrap;

}

const createCheckBox =()=>{
    const checkBox = document.createElement("input");
    checkBox.classList.add("form-check-input", "mt-0");
    checkBox.type = "checkbox";
    checkBox.name = "checkTask";
    return checkBox
}

module.exports = {
    taskItem: task,
    createDeleteButton: createDeleteButton,
    taskRow:taskRow,
    groupWrap:inputGroupWrap,
    textWrap:inputGroupText,
    createCheckBox:createCheckBox
}