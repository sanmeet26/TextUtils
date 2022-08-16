import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';

function App() {
  return (
    <>
    <Navbar title="TextUtils" nav1="Home" nav2="About" />
    {/* <Navbar title="TextUtils" /> */}
    {/* <Navbar /> */}
    <TextBox heading="Enter the text below to analyze:"/>
    </>
  );
}

export default App;
