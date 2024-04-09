import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { UserAuth } from '../context/AuthContext'
import { checkValidData } from '../validation/validation'

const Signup = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const message = checkValidData(email, password)
    try {
      if (message == null) {
        await signUp(email, password)
        navigate('/')
      } else {
        setError(message)
      }

    } catch (error) {
      console.log(error);

    }
  }
  return (
    <>
      <div className="w-full h-screen" >
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="///" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50" >
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 rounded-lg" >
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-nsans-bold" >Sign Up</h1>
              <form onSubmit={handleFormSubmit} className="w-full flex flex-col py-4">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' autoComplete='email' className="p-3 my-2 bg-gray-700 rounded" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' autoComplete='current-password' className="p-3 my-2 bg-gray-700 rounded" />
                {error ? <p className='p-3 bg-red-400'>{error}</p> : null}
                <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold" >Sign Up</button>
                <div className="flex justify-between items-center text-gray-600 " >
                  <p>
                    <input type="checkbox" className="mr-2" checked={rememberLogin} onChange={(e) => setRememberLogin(!rememberLogin)} />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2" >Already subscribed to Netflix?</span>
                  <Link to='/login'>Sign In </Link>
                </p>
              </form>


            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Signup