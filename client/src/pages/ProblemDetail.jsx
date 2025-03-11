import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../services/app.js';

const ProblemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await api.get(`/problems/${id}`);
        setProblem(response.data);
      } catch (err) {
        setError('Failed to load problem.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProblem();
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/problems/${id}`);
      navigate('/problems');
    } catch (err) {
      setError('Failed to delete problem.');
      console.error(err);
    }
  };

  if (loading) return <div className="p-4 text-white">Loading problem...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!problem) return <div className="p-4 text-white">Problem not found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">{problem.title}</h2>
        <p className="mb-4">{problem.description}</p>
        <Link to={problem.link}
        //   target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:underline mb-4 block"
        >
          View Problem
        </Link>
        <p className="mb-4">
          <strong>Revisit Date: </strong>
          {problem.revisitDate ? new Date(problem.revisitDate).toLocaleString() : 'Not set'}
        </p>
        {problem.tags && problem.tags.length > 0 && (
          <div className="mb-4">
            <strong>Tags: </strong>
            <span>{problem.tags.join(', ')}</span>
          </div>
        )}
        <div className="space-x-4">
          <Link to={`/edit/${problem._id}`} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Edit
          </Link>
          <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;
