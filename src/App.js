import React from 'react'
import Navbar from './components/navbar/Navbar';
import Spline3D from './components/spline/Spline3D.jsx'

function App() {
  return (
    <div className="flex w-screen  min-h-screen flex-col justify-center items-center relative bg-0B0F15  " id='home'>
      <Navbar />
      <Spline3D />
    </div>
  );
}

export default App;
