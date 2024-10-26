import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Form from './Form';
import Course from './Course';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Course" element={<Course />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
