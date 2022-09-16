let btnAdd=document.querySelector('#addTask')
let table=document.querySelector('table')

let taskInput=document.querySelector('#task')
let ageInput=document.querySelector('#age')
let commentInput=document.querySelector('#comment')

btnAdd.addEventListener('click',() =>{
    let task = taskInput.value
    let age = ageInput.value
    let comment = commentInput.value

    table.innerHTML +=`
        <tr>
            <td>${task}</td>
            <!-- <td>${age}</td> -->
            <td><p><button class="completeButton">Complete</button></p><p><button class="deleteButton">Delete</button></p></td>
            <td>${comment}</td>
        </tr>
    `
    function onDeleteRow(e){
        if(!e.target.classList.contains("deleteButton")){
            return;
        }
        const btn = e.target;
        btn.closest('tr').remove();
    };
    function onCompleteRow(e){
        if(!e.target.classList.contains("completeButton")){
            return;
        }
        const btn = e.target;
        btn.closest('tr').remove();
    };
    table.addEventListener("click",onCompleteRow);
    table.addEventListener("click",onDeleteRow);

})
