import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout';
import { api } from './apiServices';

const Login = () => {

    let [login , setLogin] = useState({
        username:'',
        password:''
    })

    // hook -- useNavigate

    let naviGateMe = useNavigate(); // hook

    const handleChange = (e) =>{
        setLogin({...login , [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        console.log(login)

        const {data} = await api.get("/instagramUsers");

       let userFound =  data.find((user)=>user.username == login.username || user.mobile == login.username);

       if(userFound){
           if(userFound.password == login.password){
             localStorage.setItem("loginStatus" , "success");
             alert("Login success!");
           }else{
            alert("Password Not Match!")
           }
       }else{
         alert("User Not Found!!")
       }

        

         //naviGateMe("/dashboard") // enpoint of the redirected page

         naviGateMe("/")

        setLogin({
        username:'',
        password:''
    })
    }
 
    let logined = localStorage.getItem("loginStatus");
    

  return (
    <div>
        <center>

            {logined == "success" ? "Already Login" : <form onSubmit={handleSubmit}>
                Username:<input type='text' name='username' placeholder='Enter username/mobile ' value={login.username} onChange={handleChange} required/><br/><br/>
                password:<input type='password' name='password' placeholder='Enter password' value={login.password} onChange={handleChange} required/><br/><br/>

                <button type='submit'>Login</button>
            </form>}
            
            <Logout/>
        </center>
      
    </div>
  )
}

export default Login
