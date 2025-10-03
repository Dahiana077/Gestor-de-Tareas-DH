const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    const task = inputBox.value.trim();
    
    if (!task){
        alert('Debes escribir una tarea');
        return
    }

    const li = document.createElement('li');
    li.textContent = task;
    listContainer.appendChild(li);

    inputBox.value = '';

    let span = document.createElement('span');
    span.textContent = '\u00d7';
    li.appendChild(span);

    span.classList.add('delete-btn');
    showMessage();
    saveDate();
}

listContainer.addEventListener('click', (e) =>{
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }else if (e.target.classList.contains('delete-btn')){
        e.target.parentElement.remove();
        showMessage();
       saveData();
    }
})

 const emptyMessage = document.createElement('p');
 emptyMessage.textContent = 'No tienes tareas pendientes';
 emptyMessage.className = 'message';

 listContainer.parentElement.appendChild(emptyMessage);

 function showMessage(){
    emptyMessage.style.display = listContainer.children.length === 0 ? 'block' : 'none';
 }

 function saveDate(){
    localStorage.setItem('data', listContainer.innerHTML);
 }
 function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
    showMessage();
 }

document.addEventListener('keydown',(event) => {
    if (event.key === 'Enter'){
        addTask();
    }
})
 showTask();