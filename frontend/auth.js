
async function login() {
 const email=email.value, password=password.value;
 const r=await fetch("http://localhost:5000/login",{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});
 const d=await r.json(); localStorage.setItem("token",d.token);
 window.location="dashboard.html";
}
async function register(){
 const r=await fetch("http://localhost:5000/register",{method:"POST",headers:{'Content-Type':'application/json'},
 body:JSON.stringify({name:name.value,email:email.value,password:password.value,role:role.value})});
 msg.innerText=(await r.json()).message;
}
