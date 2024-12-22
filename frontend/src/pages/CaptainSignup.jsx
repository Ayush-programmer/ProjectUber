import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [captaindata, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setCaptainData({
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password
    });

    setfirstname('');
    setlastname('');
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
          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-3'>
            <input type="text" className='bg-[#eee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base mb-7' placeholder='first name' value={firstname} required onChange={(e) => {
              setfirstname(e.target.value);
            }} />
            <input type="text" className='bg-[#eee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base mb-7' placeholder='last name' value={lastname} required onChange={(e) => {
              setlastname(e.target.value);
            }} />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input className='bg-[#eee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7' type="email" placeholder='email@example.com' value={email} required onChange={(e) => {
            setEmail(e.target.value);
          }} />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input className='bg-[#eee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7' type="password" placeholder='password' value={password} required onChange={(e) => {
            setPassword(e.target.value);
          }} />
          <button className='bg-[#111] text-white font-semibold rounded px-4 py-2 w-full'>Login</button>
          <p className='text-center mt-5 mb-5'>Already had an account?&nbsp;<Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </form>
      </div>
      <div>
        <p className='text-xs leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className="underline">Terms of Service</span> apply.</p>
      </div>
    </div>
  )
}

export default CaptainSignup