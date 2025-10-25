import React from 'react'
import './HomePage.css'
import Tarang_logo from '../assets/Tarang_logo.jpg'

 const HomePage = () => {
    return (
        <div className='homepage'>
           <div className='text-content'>
               <h1>"One Campus. One Community. One Sphere"</h1>

                {/* <button className='btn'>Login</button> */}
           </div>
           <img className='img' src={Tarang_logo} alt="Tarang Logo" />

        </div>
    )
}

export default HomePage;
