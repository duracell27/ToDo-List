const form = document.querySelector('#newTaskForm');
const input = document.querySelector('#addNewTask');
const list = document.querySelector('#list-group');
const emptylist = document.querySelector('#empty-list-item');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputText = input.value;

    const HTMLText = `<li class="list-group-item d-flex justify-content-between">
                        <span contenteditable="true" class="task-title">${inputText}</span>
                         <div>
                        <button type="button" data-action="ready" class="btn btn-light align-self-end">Готово</button>
                        <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
                    </div>
                </li>`;
    list.insertAdjacentHTML('afterbegin', HTMLText);
    checkEmptyList();
    input.value = '';
    input.focus();
});

list.addEventListener('click', function(e) {
    if (e.target.getAttribute('data-action') == 'delete-task') {
        e.target.closest('.list-group-item').remove();
        checkEmptyList();
    } else if (e.target.getAttribute('data-action') == 'ready') {
        const targetSpan = e.target.closest('.list-group-item');
        targetSpan.querySelector('.task-title').classList.add('task-title--done');
        targetSpan.querySelector('.task-title').setAttribute('contenteditable', 'false');
        list.insertAdjacentElement('beforeend', targetSpan);
        targetSpan.querySelector('button[data-action="ready"]').remove();
    }
})

function checkEmptyList() {
    if (list.children.length > 1) {
        emptylist.style.display = 'none';
    } else {
        emptylist.style.display = 'block';
    }
}