const listContainer = document.querySelector('.listContainer');
document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
});

const addTask = () => {
    const inputBox = document.querySelector('.inputBox');
    const taskDiv = document.createElement('div');
    const inputTextSpan = document.createElement('span');
    inputTextSpan.textContent = inputBox.value;
    const checkbox = createCheckbox(inputTextSpan);
    const deleteBtn = createDeleteButton(taskDiv, checkbox);
    
    taskDiv.append(checkbox, inputTextSpan, deleteBtn);
    listContainer.append(taskDiv);
    inputBox.value = '';
    changePrompt();
};

const createDeleteButton = (divElement, checkbox) => {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('divButton');
    deleteBtn.textContent = 'Remove';
    deleteBtn.addEventListener('click', () => {
        if (checkbox.checked) {
            divElement.remove();
            changePrompt();
        } 
    });
    return deleteBtn;
};

const createCheckbox = (inputTextSpan) => {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', () => {
        inputTextSpan.classList.toggle('linethrough');
    });
    return checkbox;
};

const changePrompt = () => {
    const prompt = document.querySelector('.prompt');
    if (listContainer.children.length > 0) {
        prompt.textContent = 'Awesome!! What else?';
    } else {
        prompt.textContent = 'What do you want to do today?';
    }
};

