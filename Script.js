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

  const db1 = document.createElement("button");
  db1.innerText = "DELETE";
    
  db1.addEventListener("click", () => {

    li.remove();

  });

  list.appendChild(li);
  li.appendChild(db1);

  input.value="";
  
});
 

 
