import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute'

// Lazy load pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const ProblemList = lazy(() => import('./pages/ProblemList'));
const ProblemDetail = lazy(() => import('./pages/ProblemDetail'));
const AddEditProblem = lazy(() => import('./pages/AddEditProblem'));
const ProblemNotes = lazy(() => import('./pages/ProblemNotes'));
const AddNote = lazy(() => import('./pages/AddNote'));


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        <Route
          path="/problems"
          element={
            <ProtectedRoute>
              <ProblemList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/problems/:id"
          element={
            <ProtectedRoute>
              <ProblemDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddEditProblem />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <AddEditProblem />
            </ProtectedRoute>
          }
        />
        <Route
          path="/problems/:id/notes"
          element={
            <ProtectedRoute>
              <ProblemNotes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/problems/:id/notes/new"
          element={
            <ProtectedRoute>
              <AddNote />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
