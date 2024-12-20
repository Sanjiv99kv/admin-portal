import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import './Employee.css'
import data from '../../assets/Data.js'
import greater from '../../assets/svg/greater.svg'
import { AdminContext } from '../../Context.jsx';
import toast from 'react-hot-toast'
import io from 'socket.io-client'

const Employee = () => {
  const [search, setSearch] = useState("");
  const { sidebar, setSidebar } = useContext(AdminContext);
  const socket = io('http://localhost:3000')

  const inputhandler = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    socket.emit('register', { userId: 20, role: "admin" });

    return () => {
      socket.disconnect();
    };
  }, [])

  const sendNotification = () => {
    const message = "Please upload your picture";
    socket.emit('send-notification', { targetUserId: 12, message });
  }

  return (
    <>
      <Navbar />
      <div style={{ left: sidebar ? "250px" : "0px", width: sidebar ? "calc(100% - 250px)" : "" }} className='employee'>
        <div className="dets">
          <h3>Employees</h3>
          <p>Home <img src={greater} alt="" />Employee<img src={greater} alt="" />Employee List</p>
        </div>
        <div className="employee-container">
          <div className="search">
            <input onChange={(e) => { inputhandler(e) }} type="text" placeholder='Search...' />
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Email</th>
                  <th>Schedule</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data.map((item, index) => {
                return (
                  <tbody key={index} style={{
                    display: item.name.toLowerCase().includes(search.toLowerCase()) ? "" : "none"
                  }}>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.position}</td>
                      <td>{item.email}</td>
                      <td>{item.schedule}</td>
                      <td>{item.status}</td>
                      <td><button onClick={() => { sendNotification() }} className='edit'>Ask for pic</button>
                      </td>
                    </tr>
                  </tbody>
                )
              })}
            </table>
          </div>
        </div>
      </div>
    </>

  )
}

export default Employee
