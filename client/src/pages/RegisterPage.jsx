/* eslint-disable no-empty */
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [redirect, setRedirect] = useState('');
  

  async function registerUser(ev){
    ev.preventDefault();

    if (password !== confirmPassword) {
      return;
    }

    try{
      await axios.post('/register', {
        name,
        email,
        password,
        
      });
      setRedirect(true)
    }catch(e){
    }
  }

  if (redirect){
    return <Navigate to={'/login'} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <form className="space-y-6" onSubmit={registerUser}>
          <h2 className="text-center text-2xl font-bold text-gray-900">Create Your Account</h2>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name"
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              value={name}
              onChange={ev => setName(ev.target.value)}
            />
          </div>

          <div className="relative mt-4">
            <input
              type="email"
              placeholder="Email"
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              value={email}
              onChange={ev => setEmail(ev.target.value)}
            />
          </div>

          <div className="relative mt-4">
            <input
              type="password"
              placeholder="Password"
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              value={password}
              onChange={ev => setPassword(ev.target.value)}
            />
          </div>

          <div className="relative mt-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              value={confirmPassword}
              onChange={ev => setConfirmPassword(ev.target.value)}
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Create Account
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to={'/login'} className="font-medium text-teal-600 hover:text-teal-500">
                Sign In
              </Link>
            </p>
          </div>
          
          <div className="text-center mt-6">
            <Link to={'/'}>
              <button className="text-teal-600 hover:text-teal-500 flex items-center justify-center space-x-1 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
                <span>Back</span>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
