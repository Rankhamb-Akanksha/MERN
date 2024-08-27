const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!.")
    }
else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";// this line code is for button cross
    li.appendChild(span);
}

inputBox.value=""; // to reset value in input box
saveDate();

}
//this code is for checked or uncheckd the task and remove the task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName=== "SPAN" ){
        e.target.parentElement.remove();
        saveDate();
    }
}, false);

//to store data in the browser
function saveDate(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//display the data after browsing

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();