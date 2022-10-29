import React from 'react'
import './profile.css'
import profile_img from '../../Asset/profile_img.png'



function profile() {
  return (
    <div className='profile'>
        <img id='profile_img' src={profile_img} alt='profile_img'/>
        <h2>IYIOLA OLAKUNLE ELIJAH</h2>
      
    </div>
  )
}

export default profile
