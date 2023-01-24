import { useState,useEffect } from 'react';
import  { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Register() {
const [values,setValues]=useState({
username:"",
email:"",
password:"",
confirmPassword:""
})

const handleChange=(e)=>{
setValues({...values, [e.target.name]:e.target.value});
console.log(values);
}


const handleSubmit=(e)=>{
  e.preventDefault();
  if(handleValidation()){
    // call api 
  };
}

const toastCustomised={
  duration:2000,
  position:'top-center'
}


const handleValidation=(e)=>{
  const { username,email,password,confirmPassword}=values;

  if(username.length<=2  ){
    toast.error('Username must be atleast 3 characters',toastCustomised);
    return false;
  }else if(email===''){
    toast.error('Email is required',toastCustomised);
    return false
  }else if(password.length<8){
    toast.error('Password must be atleast 8 characters',toastCustomised);
    return false;
  }else if(confirmPassword!==password){
    toast.error('Password & Confirm Password should match',toastCustomised);
    return false;
  }else{
    toast.success(`${username} registered successfully `)
    return true;
  }

}


  return (
    <div className='h-screen flex justify-center items-center bg-[#17181D] text-white'>
     
     <div className='formContainer flex flex-col justify-evenly bg-[#21222B] rounded-2xl'>
      
      {/* register content  */}
      <div className='flex flex-col items-center'>
      <p className='text-2xl font-semibold'>User Register</p>
      <div className='flex flex-col items-center text-xs font-light text-zinc-400 mt-2'>
        <p>Welcome, Enter your details to sign in</p>
        <p>to your account</p>
      </div>
      </div>


      {/* form section  */}
      <form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col justify-around items-center h-72'>
      <div>
      <input type="text" placeholder='Username' name='username' onChange={(e)=> handleChange(e)} className='pr-28 pl-6 py-2 rounded-md text-md font-light bg-[#1D1E23] outline-none' />
      </div>
       
      <div>
      <input type='email' placeholder='Enter Email' name='email' onChange={(e)=> handleChange(e)} className='pr-28 pl-6 py-2 rounded-md text-md font-light bg-[#1D1E23] outline-none' />
      </div>

      <div>
      <input type="text" placeholder='Enter Pasword' name='password' onChange={(e)=> handleChange(e)} className='pr-28 pl-6 py-2 rounded-md text-md font-light bg-[#1D1E23] outline-none' />
      </div>
      
      <div>
      <input type="text" placeholder='Confirm Password' name='confirmPassword' onChange={(e)=> handleChange(e)} className='pr-28 pl-6 py-2 rounded-md text-md font-light bg-[#1D1E23] outline-none' />
      </div>

      <button onClick={handleSubmit} className='register bg-[#F2FD8A] text-black py-1.5 rounded-md font-semibold mt-2'>Register</button>
    
      </form>

      <p className='text-sm font-normal flex justify-center'>Have an account? 
        <Link to='/login' className='font-semibold text-[#F2FDBA]'>&nbsp; Login </Link>
      </p>


     </div>

     <Toaster/>
    </div>
  )
}

export default Register