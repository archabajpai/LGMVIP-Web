window.addEventListener('load',() =>{
const form= document.querySelector("#tasknew");
const input=document.querySelector("#taskinputnew");
const el_list=document.querySelector("#taskss");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task=input.value;
    if(!task){
        alert("Please fill out the task");
        return;
    }
   const el_task= document.createElement("div");
   el_task.classList.add("task");
   const content_task_el=document.createElement("div");
content_task_el.classList.add("content"); 
// content_task_el.innerText=task;

el_task.appendChild(content_task_el);


el_task.appendChild(content_task_el);

const task_input_el=document.createElement("input");
task_input_el.classList.add("text");
task_input_el.type="text";
task_input_el.value=task;
task_input_el.setAttribute("readonly","readonly");
content_task_el.appendChild(task_input_el);
const actions_task_el=document.createElement("div");
actions_task_el.classList.add("actions");
const task_edit_el=document.createElement("button");
task_edit_el.classList.add("edit");
task_edit_el.innerHTML="Edit";
const task_del_ele=document.createElement("button");
task_del_ele.classList.add("delete");
task_del_ele.innerHTML="Delete";
actions_task_el.appendChild(task_edit_el);
actions_task_el.appendChild(task_del_ele);

el_task.appendChild(actions_task_el);



el_list.appendChild(el_task);

input.value=" ";
task_edit_el.addEventListener('click',()=>{
  if(task_edit_el.innerText.toLowerCase()== "edit"){
    task_input_el.removeAttribute("readonly");
    task_input_el.focus();
    task_edit_el.innerText="Save";
  }
  else{
    task_input_el.setAttribute("readonly","readonly");
    task_edit_el.innerText="Edit";
  }

});
task_del_ele.addEventListener('click',()=> {
el_list.removeChild(el_task);
});

});
});