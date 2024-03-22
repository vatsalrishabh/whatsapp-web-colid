import React from 'react'
import './Individualchat.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Individualchat = () => {
    return (
        <div className='indivchat'>
{/* div indichat starts */}

{/* top nav starts */}
            <div className='indivchat-topnav'>
                <div className='indivchat-topnav-left'>
                <div className='indivchat-topnav-left-icon'>
                    <ArrowBackIcon/>
                </div>
                <div className='indivchat-topnav-left-dp'>
                    <img src='https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2024-03/aalimhakimviratkohli.jpg?VersionId=6jjvxEzP_ELiPdiKY6qJQBMJ.HB3DCPw&h=ae758f0a&size=750:*'/>
                </div>
                </div>
                <div className='indivchat-topnav-right'>
                    <div className='indivchat-topnav-right-icon'>
                        <VideocamIcon/>
                    </div>
                    <div className='indivchat-topnav-right-icon'>
                         <CallIcon/>
                    </div>
                    <div className='indivchat-topnav-right-icon'>
                            <MoreVertIcon/>
                    </div>
                </div>
            </div>
{/* top nav ends */}

{/* mid nav starts */}
            <div className='indivchat-midnav'></div>
{/* mid nav ends */}

{/* botnav starts */}
            <div className='indivchat-botnav'></div>
{/* bot nav ends */}

{/* div indiv chat ends */}
        </div>
    )
}

export default Individualchat
