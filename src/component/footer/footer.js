import React from 'react'

import './footer.css'

import Zuri from '../../Asset/ZuriIntern.png'
import I4G from '../../Asset/I4GLogo.png'


function footer() {
  return (
    <div className='fotterContainer'>

      {/* <img src={Zuri} alt='Zuri logo' /> */}
      <h3>Zuri<span className='zuri_dot'></span>Internship</h3>
      <p>HNG Internship 9 Frontend Task </p>
      <img src={I4G} alt='I4G logo' />
    </div>
  )
}

export default footer
