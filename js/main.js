const form = document.querySelector('#newTaskForm');
const input = document.querySelector('#addNewTask');
const list = document.querySelector('#list-group');
const emptylist = document.querySelector('#empty-list-item');

form.addEventListener('submit', function (e) {
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

function checkEmptyList (){
    if(list.children.length > 1){
        emptylist.style.display = 'none';
    }else{
        emptylist.style.display = 'block';
    }
}