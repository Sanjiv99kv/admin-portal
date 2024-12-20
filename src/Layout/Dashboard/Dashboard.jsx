import React, { useContext } from 'react'
import './Dashboard.css'
import Navbar from '../../Components/Navbar/Navbar'
import profile from '../../assets/svg/user.svg'
import arrow from '../../assets/svg/rightarrow.svg'
import alarm from '../../assets/images/alarm-clock.png'
import checkbox from '../../assets/images/check-box.png'
import idcard from '../../assets/images/id-card.png'
import alert from '../../assets/images/danger.png'
import { AdminContext } from '../../Context'
import data from '../../assets/Data.js'

const Dashboard = () => {
  const {sidebar,setSidebar} = useContext(AdminContext);
  return (
    <>
      <Navbar />
      <div style={{left:sidebar?"250px":"0px",width:sidebar?"calc(100% - 250px)":"100%"}} className='dashboard'>
        <div className="dets">
          <h3>Dashboard</h3>
          <p>Welcome to Attendace Management System</p>
        </div>
        <div className="dash">
          <div className="box">
            <div className="top">
              <div className="icon">
                <img src={idcard} alt="" />
              </div>
              <div className="info">
                <p>TOTAL EMPLOYEES</p>
                <span>{data.length}</span>
              </div>
            </div>
            <div className="mid">
              <img src={profile} alt="" />
            </div>
            <div className="bottom">
              <p>More info</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="top">
              <div className="icon">
                <img src={checkbox} alt="" />
              </div>
              <div className="info">
                <p>ON TIME PERCENTAGE</p>
                <span>100%</span>
              </div>
            </div>
            <div className="mid">
              <div className="circle"></div>
            </div>
            <div className="bottom">
              <p>More info</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="top">
              <div className="icon">
                <img src={alarm} alt="" />
              </div>
              <div className="info">
                <p>ON TIME TODAY</p>
                <span>1</span>
              </div>
            </div>
            <div className="mid">
              <div className="circle"></div>
            </div>
            <div className="bottom">
              <p>More info</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="top">
              <div className="icon">
                <img src={alert} alt="" />
              </div>
              <div className="info">
                <p>LATE <br></br>TODAY</p>
                <span>0</span>
              </div>
            </div>
            <div className="mid">
              <div className="circle"></div>
            </div>
            <div className="bottom">
              <p>More info</p>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Dashboard
