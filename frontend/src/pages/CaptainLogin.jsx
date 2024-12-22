import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setCaptainData({
      email: email,
      password: password
    });
    
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt=""
          className='w-20 mb-10' />
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input className='bg-[#eee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7' type="email" placeholder='email@example.com' value={email} required onChange={(e) => {
            setEmail(e.target.value);
          }} />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input className='bg-[#eee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7' type="password" placeholder='password' value={password} required onChange={(e) => {
            setPassword(e.target.value);
          }} />
          <button className='bg-[#111] text-white font-semibold rounded px-4 py-2 w-full'>Login</button>
          <p className='text-center mt-5 mb-5'>Join a fleet?&nbsp;<Link to='/captain-signup' className='text-blue-600'>Register as a captain</Link></p>
        </form>
      </div>
      <div>
        <Link to='/login' className='flex justify-center items-center bg-[#55ff10] text-white font-semibold rounded px-4 py-2 mb-5 w-full'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default UserLogin