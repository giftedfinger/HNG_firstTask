import React,{Component} from 'react'
import './App.css';
import data from './data';

import Profile_details from './component/Profile_details/profile'
// import BtnContainer from './component/mainContainer/BtnsContainer';
import SlackGit from './component/SlackGit/slackGit';
import Footer from './component/footer/footer';

class App extends Component {

  render(){
  const Btn_list = data.map(el=>{
     return <a id={el.Id} key={el.Id} href={el.link}> 
      {el.name}
       <p> {el.subtext}</p>
         </a>
         
    })
  return (
    <div className="App">
      
<Profile_details/>
      <div className='btn_link'>
        {Btn_list}
      </div>
<SlackGit/>
<Footer/>
    </div>
  );
}
}
export default App;
