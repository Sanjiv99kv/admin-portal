import './App.css'
import AdminContextGiver from './Context';
import Admin from './Pages/Admin/Admin';
import Emppage from './Pages/Emppage/Emppage';
import Login from './Pages/Login/Login'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


function App() {

  return (
    <>
      <Toaster />
      <AdminContextGiver>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path='/employee' element={<Emppage />}></Route>
          </Routes>
        </BrowserRouter>
      </AdminContextGiver>
    </>
  )
}

export default App
