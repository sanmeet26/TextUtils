import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
// import About from './Components/About';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#161616';
    }
  }

  return (
    <>
    <Navbar title="TextUtils" nav1="Home" nav2="About" mode={mode} toggleMode={toggleMode} />
    {/* <Navbar title="TextUtils" /> */}
    {/* <Navbar /> */}
    <TextBox heading="Enter the text below to analyze:" mode={mode} />
    {/* <About /> */}
    </>
  );
}

export default App;
