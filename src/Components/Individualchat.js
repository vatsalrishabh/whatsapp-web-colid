import React from 'react'
import './Individualchat.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SendIcon from '@mui/icons-material/Send';

const Individualchat = () => {
    return (
        <div className='indivchat'>
            {/* div indichat starts */}

            {/* top nav starts */}
            <div className='indivchat-topnav'>
                <div className='indivchat-topnav-left'>
                    <div className='indivchat-topnav-left-icon'>
                        <ArrowBackIcon />
                    </div>
                    <div className='indivchat-topnav-left-dp'>
                        <img src='https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2024-03/aalimhakimviratkohli.jpg?VersionId=6jjvxEzP_ELiPdiKY6qJQBMJ.HB3DCPw&h=ae758f0a&size=750:*' />
                    </div>
                </div>
                <div className='indivchat-topnav-right'>
                    <div className='indivchat-topnav-right-icon'>
                        <VideocamIcon />
                    </div>
                    <div className='indivchat-topnav-right-icon'>
                        <CallIcon />
                    </div>
                    <div className='indivchat-topnav-right-icon'>
                        <MoreVertIcon />
                    </div>
                </div>
            </div>
            {/* top nav ends */}

            {/* mid nav starts */}
            <div className='indivchat-midnav'>

                <div className='indivchat-midnav-mid-date'>
                    <div>27 June, 2024</div>
                </div>

                <div className='indivchat-midnav-mid-leftchat'>
                    <div className='indivchat-midnav-mid-leftchat-message'> Loremipsum fgsdf sdfg df sfdg  </div>
                    <div className='indivchat-midnav-mid-leftchat-time'><div>7:22 PM</div></div>
                </div>


                <div className='right-chatbox-in-right'>
                    <div className='indivchat-midnav-mid-rightchat'>
                        <div className='indivchat-midnav-mid-rightchat-message'> Loremipsum fgsdf sdfg df sfdg  </div>
                        <div className='indivchat-midnav-mid-rightchat-time-icon-flex'>
                            <div className='indivchat-midnav-mid-rightchat-time'><div>7:22 PM</div></div>
                            <div className='indivchat-midnav-mid-rightchat-icon'><div><DoneAllIcon/></div></div>
                        </div>
                    </div>
                </div>

            </div>
            {/* mid nav ends */}

            {/* botnav starts */}
            <div className='indivchat-botnav'>
                <div className='indivchat-botnav-left'>
                    <input placeholder='Type a message..'/>
                </div>
                <div className='indivchat-botnav-right'>
                    <div>
                        <SendIcon/>
                    </div>
                </div>
            </div>
            {/* bot nav ends */}

            {/* div indiv chat ends */}
        </div>
    )
}

export default Individualchat
