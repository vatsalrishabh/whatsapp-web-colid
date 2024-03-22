import React from 'react'
import './Topnav.css'
import FlipCameraIosIcon from '@mui/icons-material/FlipCameraIos';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Topnav = () => {
  return (
    <div className='topnav'> 
      <div className='topnav-left'>
        <h3>Whatsapp</h3>
      </div>
      <div className='topnav-right'>
        <span><FlipCameraIosIcon/></span>
        <span><SearchIcon/></span>
        <span><MoreVertIcon/></span>
      </div>
    </div>
  )
}

export default Topnav
