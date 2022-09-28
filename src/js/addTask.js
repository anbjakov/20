const createCol = require('./createCol');
const {createDeleteButton,taskItem,taskRow,groupWrap,textWrap,createCheckBox} = require('./taskListElements')

    function addTask(taskContent) {
        const contentCol = createCol(10);
        const manageCol = createCol(2);

        const inputGroupText = textWrap(createCheckBox());
        const inputGroupWrap = groupWrap(inputGroupText,taskItem(taskContent));

        manageCol.append(createDeleteButton());
        contentCol.append(inputGroupWrap);
        return taskRow(contentCol,manageCol);
    }


module.exports = addTask