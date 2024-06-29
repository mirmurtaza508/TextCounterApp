// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  let [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(null);
  function showAlert(message, type){
    setAlert({
      message : message,
      type : type,
    })
    setTimeout(() => {
     setAlert(null)
  }, 2000);
  }
  const removeBodyClases=()=>{
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")


  }

  const toggleMode = (cls) =>{
    removeBodyClases()
    if(mode === "light"){
      document.body.classList.add("bg-"+cls)
      setMode("dark");
      document.body.style.background = "purple";
      showAlert("dark mode is enable", "success")
    }else{
      // document.body.classList.add("bg-"+cls)
      setMode("light");
      document.body.style.background = "white";
      showAlert("light mode is enable", "success")
      // document.title = "textUtills light mode"

    }
  }
  return (
    <>
    <Router>
    <Navbar title="textUtils" aboutText="About" Mode={mode} enableDarkMode = {toggleMode}  />
    <Alert alert={alert}  showAlert={showAlert}/>
    <div className="container my-3">
     <Routes>
     <Route exact path="/about" element={<About mode ={mode} head="About Us" />}></Route>
     <Route exact path="/" element={ <TextForm  showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" Mode={mode}/>}></Route>
     </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
