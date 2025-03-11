import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', 
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;















// import axios from 'axios';

// // Create an axios instance with your backend's base URL
// const api = axios.create({
//   baseURL: 'http://localhost:3000/api', 
// });

// export default api;
