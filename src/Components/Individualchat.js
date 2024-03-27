import React, { useState } from 'react';
import './Individualchat.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SendIcon from '@mui/icons-material/Send';

const Individualchat = () => {
    const [message, setMessage] = useState(''); // State variable for the message input field

    // Function to handle changes in the message input field
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    // Function to handle sending the message
    const handleSendMessage = async () => {
        try {
            const currentTime = new Date(); // Get the current time
            const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`; // Format time as HH:MM
            const formattedDate = `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1).toString().padStart(2, '0')}-${currentTime.getDate().toString().padStart(2, '0')}`; // Format date as YYYY-MM-DD
    
            const response = await fetch('http://localhost:5000/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    senderEmail: '20bcar139@gcu.edu.in',
                    receiverEmail: '20bcar152@gcu.edu.in',
                    message: message,
                    time: formattedTime,
                    date: formattedDate,
                }),
            });
            if (response.ok) {
                console.log('Message sent successfully');
                setMessage(''); // Clear the input field after sending the message
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    

    return (
        <div className='indivchat'>
            {/* Top navigation bar */}
            <div className='indivchat-topnav'>
                {/* Left section */}
                <div className='indivchat-topnav-left'>
                    <div className='indivchat-topnav-left-icon'>
                        <ArrowBackIcon />
                    </div>
                    <div className='indivchat-topnav-left-dp'>
                        <img src='https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2024-03/aalimhakimviratkohli.jpg?VersionId=6jjvxEzP_ELiPdiKY6qJQBMJ.HB3DCPw&h=ae758f0a&size=750:*' alt='Profile' />
                    </div>
                </div>
                {/* Right section */}
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

            {/* Middle section */}
            <div className='indivchat-midnav'>
                <div className='indivchat-midnav-mid-date'>
                    <div>27 June, 2024</div>
                </div>

                <div className='indivchat-midnav-mid-leftchat'>
                    <div className='indivchat-midnav-mid-leftchat-message'> Loremipsum fgsdf sdfg df sfdg </div>
                    <div className='indivchat-midnav-mid-leftchat-time'><div>7:22 PM</div></div>
                </div>

                <div className='right-chatbox-in-right'>
                    <div className='indivchat-midnav-mid-rightchat'>
                        <div className='indivchat-midnav-mid-rightchat-message'> Loremipsum fgsdf sdfg df sfdg </div>
                        <div className='indivchat-midnav-mid-rightchat-time-icon-flex'>
                            <div className='indivchat-midnav-mid-rightchat-time'><div>7:22 PM</div></div>
                            <div className='indivchat-midnav-mid-rightchat-icon'><div><DoneAllIcon /></div></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom navigation bar */}
            <div className='indivchat-botnav'>
                <div className='indivchat-botnav-left'>
                    {/* Input field for typing message */}
                    <input className='white' placeholder='Type a message..' value={message} onChange={handleMessageChange} />
                </div>
                <div className='indivchat-botnav-right'>
                    {/* Send icon */}
                    <div onClick={handleSendMessage}>
                        <SendIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Individualchat;
