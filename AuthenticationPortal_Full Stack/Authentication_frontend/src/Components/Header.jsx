import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import './Header.css'
import { AppContext } from '../Context/app_context'

const Header = () => {

  const {userData} = useContext(AppContext)
  return (
    <div className="header">
        <img src={assets.Tarang_Logo1} alt="Profile"
        className="header-img" />


        <h1 className="header-greeting">Hey {userData ? userData.name : '' }   <img className="wave-icon" src={assets.hand_wave} alt="wave" /></h1>

        <h2 className="header-title">Welcome to the Trarang Society</h2>

        <p className="header-description">  🌊 Tarang is the heartbeat of student life at BPSMV, bringing together creativity, talent, and passion under one roof. From cultural events to tech innovations, we provide a platform for students to explore, learn, and shine. ✨🎉</p>

    </div>
  )
}

export default Header