import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../services/app';
import InteractiveNoteEditor from '../components/InteractiveNoteEditor';

const AddNote = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await api.get(`/notes/problem/${id}`);
        if (response.data && response.data.content) {
          setContent(response.data.content);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchNote();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const payload = { problemId: id, content };
      await api.post('/notes', payload);
      navigate(`/problems/${id}/notes`);
    } catch (err) {
      setError('Failed to add/update note.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add / Update Note</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Note Content:</label>
            <InteractiveNoteEditor value={content} onChange={setContent} />
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit Note
          </button>
        </form>
        <Link 
          to={`/problems/${id}/notes`} 
          className="mt-4 block text-center text-blue-400 hover:underline"
        >
          Back to Note
        </Link>
      </div>
    </div>
  );
};

export default AddNote;
