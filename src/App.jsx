
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './components/about';

const App = () => {
  return (
      <div className='h-[100vh] bg-gray-900'>
        {/* <main> */}
        <Routes>
            <Route path="/" element={<About/>} />
        </Routes>
        {/* </main> */}
      </div>
  );
};

export default App;
