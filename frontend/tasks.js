
async function load(){
 const r=await fetch("http://localhost:5000/tasks",{headers:{Authorization:localStorage.token}});
 const t=await r.json();
 tasks.innerHTML=t.map(x=>`<li>${x.title} - ${x.desc}</li>`).join("");
}
async function addTask(){
 await fetch("http://localhost:5000/tasks",{method:"POST",headers:{'Content-Type':'application/json',Authorization:localStorage.token},
 body:JSON.stringify({title:title.value,desc:desc.value})});
 load();
}
load();
