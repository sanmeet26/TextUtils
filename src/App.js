import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import Alert from './Components/Alert';
// import About from './Components/About';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#161616';
      showAlert("Dark mode has been enabled.", "success");
    }
  }

  return (
    <>
    <Navbar title="TextUtils" nav1="Home" nav2="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    {/* <Navbar title="TextUtils" /> */}
    {/* <Navbar /> */}
    <TextBox heading="Enter the text below to analyze:" mode={mode} showAlert={showAlert} btn="secondary" />
    {/* <About /> */}
    </>
  );
}

export default App;
