//Declaration
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoBtn  = document.getElementById("todoBtn");
const divNew = document.getElementById("divNew")
const todoBtnChange = document.getElementById("todoBtnChange")
const noTodo = document.getElementById("noTodo")
var arr = JSON.parse(localStorage.getItem("list")) || [];

//FUNCTIONS
// get value from input and stored it in the ARRAY (WORKS)
function todoNewElement(){
    var pushEl = todoInput.value;
    if(pushEl !=""){
    arr.push(pushEl);
    localStorage.setItem("list", JSON.stringify(arr));
    todoInput.value = ''
    setElements()
    }else{
        alert("ITS EMPTY")
    }
}
//LOOP THROUGH ELEMENTS IN THE ARR and write them as LI elements(WORKS)
function setElements(){
    noTodo.innerText = ""
    arr.forEach(e => {
        todoList.innerHTML = "";
        for (var i = 0; i < arr.length; i++)
        todoList.innerHTML +=`<li id='${i}' class="liE" >${arr[i]}<div class="opt"<span class="remove"  onclick = "removeEl(${i})"><img src="/trash.png" alt="">
        </span><span class="edit"  onclick = "editEl(${i})"><img src="/edit.png" alt=""></span></div></li>`
}
)
}
//REMOVE THE SPECIFIED ELEMENT
function removeEl(index){
        arr.splice(index, 1);
        if (localStorage.getItem("list") == null) {
          localStorage.setItem("list", JSON.stringify(arr));
        } else {
          localStorage.setItem("list", JSON.stringify(arr));
        }
        setElements();
      
}
//EDIT THE SPECIFIED ELEMENT
function editEl(index){
    todoBtnChange.classList.remove("hideBtn")
    todoBtnChange.classList.add("showBtn")
    todoBtn.classList.add("hideBtn")
    var i = index
    todoBtnChange.addEventListener("click", function(i){
    var newList = todoInput.value
    arr.splice(index, 1, newList);
    if (localStorage.getItem("list") == null) {
      localStorage.setItem("list", JSON.stringify(arr));
    } else {
      localStorage.setItem("list", JSON.stringify(arr));
    }
    setElements();
    divNew.classList.add("noneNew")
    divNew.classList.remove("showNew")
    todoInput.value = ''
    todoBtnChange.classList.remove("showBtn")
    todoBtnChange.classList.add("hideBtn")
    todoBtn.classList.remove("hideBtn")
})
}
//EVENT LISTENERS
todoBtn.addEventListener("click",todoNewElement)
setElements()
