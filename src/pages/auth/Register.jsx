import React from 'react'
import { ComponentRegister } from '../../components/register/Register'

function Register() {
  return (
    <div>
      <div className='container flex justify-between text-center'>
          <div className='flex justify-start items-start ml-4'>
            <img className=' w-[30px] mt-5 mr-2' src="src\assets\img-register\logo-register.png" alt="logo" />
          </div>
      </div>
      <div className='container flex justify-center align-item-center'>
          <h1 className='text-black text-3xl font-bold'>Welcome to showcase</h1>
          </div>
      <br />
      <ComponentRegister/>
    </div>
  )
}

export default Register
