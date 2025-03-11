import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProblems } from '../slices/problemsSlice';
import { Link } from 'react-router-dom';

const ProblemList = () => {
  const dispatch = useDispatch();
  const { items: problems, status, error } = useSelector((state) => state.problems);
  const [searchQuery, setSearchQuery] = useState('');

  // Debounce search:after 300ms delay on searchQuery change api calls.
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      dispatch(fetchProblems(searchQuery));
    }, 300);
    return () => clearTimeout(debounceTimeout);
  }, [dispatch, searchQuery]);

  useEffect(() => {
    dispatch(fetchProblems());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Problem List</h2>
        {/* Search Input */}
        <div className="mb-4 flex justify-end">
          <input 
            type="text"
            placeholder="Search problems by [Name, Tag, Description, Number]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/3 p-2 rounded border border-gray-700 bg-gray-800 text-white"
          />
        </div>

        {status === 'loading' ? (
          <div className="p-4">Loading problems...</div>
        ) : error ? (
          <div className="p-4 text-red-500">{error}</div>
        ) : (
          <ul className="space-y-2">
            {problems.length === 0 ? (
              <div>No problems found </div>
            ) : (
              problems.map(problem => (
                <li key={problem._id} className="border border-gray-700 p-4 rounded hover:bg-gray-800">
                  <div className="flex justify-between mr-32 place-items-end">
                    <Link to={`/problems/${problem._id}`} className="text-lg text-blue-400 hover:underline">
                      {problem.title}
                    </Link>
                    <Link to={problem.link} className="text-lg text-yellow-500 hover:underline">
                      LeetCode || GFG ↗️
                    </Link>
                  </div>
                  <div className="flex space-x-4 mt-2">
                    <Link
                      to={`/problems/${problem._id}/notes`}
                      className="text-sm text-green-400 hover:underline"
                    >
                      View Notes
                    </Link>
                    <Link
                      to={`/problems/${problem._id}/notes/new`}
                      className="text-sm text-yellow-400 hover:underline"
                    >
                      Add Note
                    </Link>
                  </div>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProblemList;




























// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import api from '../services/app';
// import { useSelector } from 'react-redux';


// const ProblemList = () => {
//   const navigator = useNavigate();
//   const { token } = useSelector((state) => state.auth);
//   const [problems, setProblems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');

//   const fetchProblems = async (query = '') => {
//     setLoading(true);
//     setError(null);
//     try {
//       let response;
//       if (query.trim() === '') {
//         response = await api.get('/problems');
//       } else {
//         response = await api.get(`/problems/search?query=${encodeURIComponent(query)}`);
//       }
//       setProblems(response.data);
//     } catch (err) {
//       setError('Failed to load problems.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   //if searchQuery changes then api calls   
//   useEffect(() => {
//     const debounceTimeout = setTimeout(() => {
//       fetchProblems(searchQuery);
//     }, 300);

//     return () => clearTimeout(debounceTimeout);
//   }, [searchQuery]);

//   // fetch all problems on initial mount
//   useEffect(() => {
//     fetchProblems();
//   }, []);




//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
//       <div className="container mx-auto p-4">
//         <h2 className="text-2xl font-bold mb-4">Problem List</h2>
//         {/* Search Input */}
//         <div className="mb-4 flex justify-end">
//           <input 
//             type="text"
//             placeholder="Search problems by [Name,Tag,Discription,Number]"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-1/3 p-2 rounded border border-gray-700 bg-gray-800  focus:border-0"
//           />
//         </div>

//         {loading ? (
//           <div className="p-4 text-white">Loading problems...</div>
//         ) : error ? (
//           <div className="p-4 text-red-500">{error}</div>
//         ) : (
//           <ul className="space-y-2">
//             {problems.length == 0 ? 
//                 (
//                     <div>No problems on that Input</div>
//                 )
            
//             : problems.map(problem => (
//               <li key={problem._id} className="border border-gray-700 p-4 rounded hover:bg-gray-800">
//                 <div className="flex justify-between mr-32 place-items-end">
//                   <Link to={`/problems/${problem._id}`} className="text-lg text-blue-400 hover:underline">
//                     {problem.title}
//                   </Link>
//                   <Link to={problem.link} className="text-lg text-yellow-500 hover:underline">
//                     LeetCode || GFG ↗️
//                   </Link>
//                 </div>
//                 <div className="flex space-x-4 mt-2">
//                   <Link
//                     to={`/problems/${problem._id}/notes`}
//                     className="text-sm text-green-400 hover:underline"
//                   >
//                     View Notes
//                   </Link>
//                   <Link
//                     to={`/problems/${problem._id}/notes/new`}
//                     className="text-sm text-yellow-400 hover:underline"
//                   >
//                     Add Note
//                   </Link>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProblemList;
