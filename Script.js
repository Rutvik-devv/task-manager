const input = document.getElementById("inp");
const list = document.getElementById("tlist");
const btn = document.getElementById("btn");


btn.addEventListener("click" , () =>{

  const taskn = input.value;

  if (taskn == "")
  {
    alert("Enter Task");
    return;
  }

  const li = document.createElement("li");
  li.innerText= taskn;
  list.appendChild(li);

  input.value="";

});