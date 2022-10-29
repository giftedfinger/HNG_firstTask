import React from 'react'
import Slack from '../../Asset/slack.png';
import gitahub from '../../Asset/github_icon.png'
import './slackGit.css'
function footer() {
  return (
    <div className='footerDiv'>
          <a >  <img src={Slack}/></a>
          <a href='github.com/giftedfinger'> <img src={gitahub} /></a>
    </div>
  )
}

export default footer
