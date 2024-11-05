const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function addTask(){
    if (inputBox.value ==''){
        alert("You must write something here!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}



function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();



/*
To-Do List App Workflow:

1.enter a task in the input field then click "Add".
2. The addTask() function checks if the input is empty. 
If not, it creates a new <li> element for the task.
3. Each task has a delete button (×) to remove it and can be toggled as completed by clicking.
4. Completed tasks have a "checked" style, which is managed using CSS.
5. All tasks are saved to localStorage on each addition, removal, or completion, ensuring persistence on reload.
6. The showTask() function loads saved tasks from localStorage when the page loads.

*/