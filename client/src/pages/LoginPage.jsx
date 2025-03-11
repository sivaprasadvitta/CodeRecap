import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import api from '../services/app';
import { setCredentials } from '../slices/authSlice';
import AnimatedLoginSvg from '../components/AnimatedLoginSvg';
import SadEmoji from '../components/SadEmoji';


const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state?.auth);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(()=>{
    if(token != null) navigate('/')
  },[])

  useEffect(()=>{
    setError('');
  },[email,password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await api.post('/users/login', { email, password });
      dispatch(setCredentials({
        token: response.data.token,
        user: {
          _id: response.data._id,
          username: response.data.username,
          email: response.data.email,
        }
      }));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center text-white">
      <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-md">
        {
          error ? <SadEmoji className="h-5"/>:<AnimatedLoginSvg />
        }
        
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
