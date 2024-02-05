import React, { useState } from 'react'
import {login as authLogin} from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
function Login() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {register,handleSubmit}=useForm()
    
    const [error, setError] = useState("")
const login= async(data) =>{
    setError("")
    try{
        const session=await authService.login(data)
        if(session) {
            const userData=await authService.getCurrentUser()
            if(userData) dispatch(authLogin(userData))
            navigate("/user")
    }catch(error){
setError(error.message)}
}

  return (
    <div>Login</div>
  )
}


export default Login