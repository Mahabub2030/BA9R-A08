
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    alert('Login submitted');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
       <Helmet>
            <title>LogIn</title>
        </Helmet>
      <div className="bg-white rounded-lg shadow-lg p-8 w-80">
        <h2 className="text-center text-2xl font-semibold text-[#9538E2] mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-700 required:">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9538E2]"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-gray-700 required: ">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9538E2]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#9538E2] text-white font-semibold rounded-md hover:bg-[#7a2cb0] focus:outline-none focus:ring-2 focus:ring-[#9538E2]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
