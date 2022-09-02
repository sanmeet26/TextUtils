import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import Alert from './Components/Alert';
// import About from './Components/About';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

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

  // const toggleMode = () => {
  //   if(mode === 'dark') {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled.", "success");
  //   }
  //   else {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#040404';
  //     showAlert("Dark mode has been enabled.", "success");
  //   }
  // }


  const lightTheme = {
    color: "black",
    backgroundColor: "rgb(230, 233, 237)"
  };
  const darkTheme = {
    color: "white",
    backgroundColor: "#242424"
  };
  const blueTheme = {
    color: "white",
    backgroundColor: "#17195e"
  };
  const yellowTheme = {
    color: "black",
    backgroundColor: "#8f7f15"
  };
  const greenTheme = {
    color: "white",
    backgroundColor: "#386e32"
  };


  const changeToLightTheme = () => {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    // document.title = "TextUtils - Light theme";
  }
  const changeToDarkTheme = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#040404';
    // document.title = "TextUtils - Dark theme";
  }
  const changeToBlueTheme = () => {
    setMode('blue');

    document.body.style.color = 'white';
    document.body.style.backgroundColor = '#202487';
    // document.title = "TextUtils - Blue theme";
  }
  const changeToYellowTheme = () => {
    setMode('yellow');
    document.body.style.backgroundColor = '#b09c1a';
    // document.title = "TextUtils - Yellow theme";
  }
  const changeToGreenTheme = () => {
    setMode('green');
    document.body.style.backgroundColor = '#44853d';
    // document.title = "TextUtils - Green theme";
  }

  return (
    <>
    {/* <Router> */}
    {/* <Navbar title="TextUtils" nav1="Home" nav2="About" mode={mode} toggleMode={toggleMode} /> */}
    <Navbar title="TextUtils" nav1="Home" nav2="About" mode={mode} lightTheme={lightTheme} darkTheme={darkTheme} blueTheme={blueTheme} yellowTheme={yellowTheme} greenTheme={greenTheme} changeToLightTheme={changeToLightTheme} changeToDarkTheme={changeToDarkTheme} changeToBlueTheme={changeToBlueTheme} changeToYellowTheme={changeToYellowTheme} changeToGreenTheme={changeToGreenTheme} />
    {/* <Navbar title="TextUtils" /> */}
    {/* <Navbar /> */}

    <Alert alert={alert}/>
    {/* <Routes>
      <Route exact path='/' element={<TextBox heading="Enter the text below to analyze:" mode={mode} showAlert={showAlert} btn={mode==='light'?"secondary":"dark"} />} />
      <Route exact path='/about' element={<About />} />
    </Routes>
    </Router> */}


    <TextBox heading="Enter the text below to analyze:" mode={mode} showAlert={showAlert} btn={mode==='light'?"secondary":"dark"} />
    {/* <About /> */}
    </>
  );
}

export default App;
