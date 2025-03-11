// src/pages/AddEditProblem.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/app';

const AddEditProblem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    tags: '',
    revisitDate: ''
  });
  const [error, setError] = useState(null);

  // If editing, fetch the problem data
  useEffect(() => {
    if (id) {
      const fetchProblem = async () => {
        try {
          const response = await api.get(`/problems/${id}`);
          const data = response.data;
          setFormData({
            title: data.title,
            description: data.description || '',
            link: data.link,
            tags: data.tags ? data.tags.join(', ') : '',
            revisitDate: data.revisitDate ? new Date(data.revisitDate).toISOString().slice(0, 16) : ''
          });
        } catch (err) {
          setError('Failed to fetch problem for editing.');
          console.error(err);
        }
      };
      fetchProblem();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    // Convert tags from comma-separated string to array
    const payload = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
    };

    try {
      if (id) {
        await api.put(`/problems/${id}`, payload);
      } else {
        await api.post('/problems', payload);
      }
      navigate('/problems');
    } catch (err) {
      setError('Failed to save problem.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center text-white">
      <div className="bg-gray-800 bg-opacity-75 p-6 mt-10 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{id ? 'Edit Problem' : 'Add Problem'}</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className="block font-medium mb-1">Title<span>*</span></label>
            <input
              placeholder='Required'
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              placeholder='Optional'
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
            ></textarea>
          </div>
          <div>
            <label className="block font-medium mb-1">Link<span>*</span></label>
            <input
              placeholder='Required'
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Tag</label>
            <input
              placeholder='Optional'
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Revisit Date</label>
            <input
              placeholder='Optional'
              type="datetime-local"
              name="revisitDate"
              value={formData.revisitDate}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            {id ? 'Update Problem' : 'Create Problem'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEditProblem;
