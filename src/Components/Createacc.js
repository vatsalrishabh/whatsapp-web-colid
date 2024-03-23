import React from 'react';
import './Createacc.css';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import MaleIcon from '@mui/icons-material/Male';

const Createacc = () => {
    return (
        <div className='createacc'>
            <div className='heading'>Create your Whatsapp profile</div>
            <div className='heading-2'>Help your fellow mates to embrace your beauty</div>

            <div className='formbox'>
                <form>
                    <div className='upload-dp-parent'>
                        <div className='upload-dp'>
                            <div>
                                <AddAPhotoIcon />
                            </div>
                        </div>
                    </div>

                    <div className='formbox-input'>
                        <div className='icon-container'> <AlternateEmailIcon /></div>
                        <input type='email' placeholder='Enter Your College email' />
                    </div>
                    <div className='formbox-input'>
                        <div className='icon-container'>  <AccountCircleIcon /></div>
                        <input type='text' placeholder='Enter Your Name' />
                    </div>
                    <div className='formbox-input'>
                        <div className='icon-container'>  <CallIcon /></div>
                        <input type='number' placeholder='Enter Your Mobile Number' />
                    </div>
                    <div className='formbox-button'>
                        <div className='icon-container'>  <MaleIcon /></div>
                        <select>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className='submit'>
                        <button> Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Createacc
