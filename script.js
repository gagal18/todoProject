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
    if(arr.length !== 0){
        arr.forEach(() => {
            todoList.innerHTML = "";
            for (var i = 0; i < arr.length; i++)
            todoList.innerHTML +=`<li id='${i}' class="liE" ><span id="a${i}">${arr[i]}</span><span class="remove"  onclick = "removeEl(${i})"><img src="/trash.png" alt="">
            </span><span class="edit"  onclick = "editEl(${i})"><img src="/edit.png" alt=""></span><span class="save" onclick = "saveEl(${i})"><img src="/save.png" alt=""></span></li>`
            
    })}else{
      todoList.innerHTML = ""
    }
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
    var i = index
    re(i);
    document.getElementById("a"+i).contentEditable = 'true'
}
function re(i){
    var newList = document.getElementById(i).innerText
    console.log(newList)
    arr.splice(i, 1, newList);
    if (localStorage.getItem("list") == null) {
      localStorage.setItem("list", JSON.stringify(arr));
    } else {
      localStorage.setItem("list", JSON.stringify(arr));
    }
    setElements();
}
function saveEl(i){
  document.getElementById("a"+i).contentEditable = 'false'
  var newList = document.getElementById(i).innerText
  arr.splice(i, 1, newList);
  if (localStorage.getItem("list") == null) {
    localStorage.setItem("list", JSON.stringify(arr));
  } else {
    localStorage.setItem("list", JSON.stringify(arr));
  }
  setElements();
}
//EVENT LISTENERS
todoBtn.addEventListener("click",todoNewElement)
setElements()