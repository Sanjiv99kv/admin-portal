import React, { useContext, useState } from 'react'
import './Sidebar.css'
import home from '../../assets/svg/home.svg'
import logout from '../../assets/svg/logout.svg'
import user from '../../assets/svg/user.svg'
import grid from '../../assets/svg/grid.svg'
import clock from '../../assets/svg/clock.svg'
import alert from '../../assets/images/danger.png'
import alarm from '../../assets/images/alarm-clock.png'
import cal from '../../assets/images/cal.png'
import calender from '../../assets/images/calendar.png'
import leave from '../../assets/images/leave.png'
import {useNavigate} from 'react-router-dom';
import { AdminContext } from '../../Context'

const Sidebar = () => {
  const [show,setShow] = useState(true)
  const navigate = useNavigate();
  const {sidebar,setSidebar} = useContext(AdminContext);
  
  return (
    <div className='sidebar' style={{left:sidebar?"0px":"-251px"}}>
      <h1>ATTENDITY</h1>
      <div className="main">
        <h4>MAIN</h4>
        <ul>
          <li onClick={()=>{navigate("/admin")}}>
            <img src={home} alt="" />
            Dashboard
          </li>
          <li onClick={()=>{setShow(!show)}}>
            <img src={user} alt="" />
            Employees
          </li>
          <ul style={{display:show?"none":"block"}} className='inner'>
            <li onClick={()=>{navigate("/employee")}}>
              <img src={grid} alt="" />
              Employee list
            </li>
          </ul>
        </ul>
      </div>
      <div className="main">
        <h4 className='management'>MANAGEMENT</h4>
        <ul>
          <li>
            <img src={clock} alt="" />
            Schedule
          </li>
          <li>
            <img style={{width:"18px"}} src={calender} alt="" />
            Attendance Sheet
          </li>
          <li>
            <img style={{width:"18px"}} src={cal} alt="" />
            Attendance
          </li>
          <li>
            <img style={{width:"18px"}} src={alert} alt="" />
            Late Time
          </li>
          <li>
            <img style={{width:"18px"}} src={leave} alt="" />
            Leave
          </li>
          <li>
            <img style={{width:"18px"}} src={alarm} alt="" />
            Over Time
          </li>
        </ul>
      </div>
      <div className="logout">
        <li onClick={()=>{navigate("/")}}>
          <img src={logout} alt="" />
          Logout
        </li>
      </div>
    </div>
  )
}

export default Sidebar
