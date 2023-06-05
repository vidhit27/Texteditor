import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showalert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showalert('Dark Mode Enabled','success');
      document.title='TextUtils-Dark Mode';
    }
    else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showalert('Light Mode Enabled','success');
        document.title='TextUtils-Light Mode';
  }
}
  return (
     <>
     <BrowserRouter>
     <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className='container'>
      <Routes>
        <Route path='/About' element={<About mode={mode}/>}>
        </Route>
        <Route path='/' element={<Textform showalert={showalert} heading="Try TextUtils : " mode={mode}/>}>
     </Route>
     </Routes>
     </div> 
     </BrowserRouter>
     </>
  );
}

export default App;