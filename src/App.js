import React from 'react'
import Navbar from './components/navbar/Navbar.jsx';
import Spline3D from './components/spline/Spline3D.jsx'
import About from './components/about/About.jsx'

function App() {
  return (
    <div className="flex w-screen  min-h-screen flex-col justify-center items-center relative bg-0B0F15  " id='home'>
      <Navbar />
      <Spline3D />
      <About />
    </div>
  );
}

export default App;
