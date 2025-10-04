
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
import EmailVerify from './Pages/EmailVerify'
import Login from './Pages/Login'
import ResetPassword from './Pages/ResetPassword'
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (

    <div>
      <ToastContainer/>
      <Routes>
        <Route path= '/' element = {<Home/>}/>
        <Route path= '/login' element = {<Login/>}/>
        <Route path= '/email-verify' element = {<EmailVerify/>}/>
        <Route path= '/reset-password' element = {<ResetPassword/>}/>
      </Routes>
    </div>
  )
}

export default App
