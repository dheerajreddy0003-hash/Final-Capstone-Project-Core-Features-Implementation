
import axios from "axios";
export default function Login(){
  const login=async()=>{
    const res = await axios.post("http://localhost:5000/api/auth/login",{
      email:"admin@test.com",password:"123456"
    });
    alert("Login success");
  };
  return <button onClick={login}>Login</button>;
}
