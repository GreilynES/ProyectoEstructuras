let stack = [];

function push() {
    const value = document.getElementById('inputValue').value;
    if (value) {
        stack.push(value);
        updateStack();
        document.getElementById('inputValue').value = '';
    }
}

function pop() {
    if (stack.length > 0) {
        stack.pop();
        updateStack();
    }
}

function updateStack() {
    const stackContainer = document.querySelector('.stack');
    stackContainer.innerHTML = '';
    for (let i = 0; i < stack.length; i++) {
        const stackItem = document.createElement('div');
        stackItem.classList.add('stack-item');
        stackItem.textContent = stack[i];
        stackContainer.appendChild(stackItem);
    }
}