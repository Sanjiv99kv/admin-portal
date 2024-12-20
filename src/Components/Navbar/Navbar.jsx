import React, { useContext } from 'react'
import './Navbar.css'
import menu from '../../assets/svg/menu.svg'
import search from '../../assets/svg/search.svg'
import bell from '../../assets/svg/bell.svg'
import profile from '../../assets/images/profile.png'
import cross from '../../assets/svg/cross.svg';
import { AdminContext } from '../../Context'

const Navbar = () => {
  const {sidebar,setSidebar} = useContext(AdminContext);
  return (
    <div className='navbar' style={{left:sidebar?"250px":"0px",width:sidebar?"calc(100% - 250px)":"100%"}}>
      <img onClick={()=>{setSidebar(!sidebar)}} src={sidebar?cross:menu} alt="" />
      <div className="left">
        <div className="inp-box">
          <input type="text" placeholder='Search'/>
          <img src={search} alt="" />
        </div>
        <div className="lang">
          <select name='language'>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
        <img src={bell} alt="" />
        <div className="profile">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
