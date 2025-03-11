import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/app';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ProblemNotes = () => {
  const { id } = useParams(); 
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await api.get(`/notes/problem/${id}`);
        setNote(response.data);
      } catch (err) {
        setError('Failed to load note.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="p-4 text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg w-full max-w-3xl transition-transform transform ">
        <h2 className="text-2xl font-bold mb-4 text-center">Problem Note</h2>
        {note ? (
          <div className="border border-gray-700 p-4 rounded-md bg-gray-900">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  return !inline ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language="javascript"
                      PreTag="div"
                      className="rounded-md"
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className="bg-gray-700 px-1 py-0.5 rounded">{children}</code>
                  );
                },
              }}
            >
              {note.content}
            </ReactMarkdown>
            <p className="text-xs text-gray-400 mt-4">
              Last updated: {new Date(note.updatedAt).toLocaleString()}
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-400">No note available for this problem.</p>
        )}
        <div className="mt-4 flex justify-center">
          <Link 
            to={`/problems/${id}/notes/new`} 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            { note ? 'Update Note' : 'Add Note' }
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProblemNotes;
