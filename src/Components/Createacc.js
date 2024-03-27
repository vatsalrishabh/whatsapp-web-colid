import React, { useState, useRef, useEffect } from 'react';
import './Createacc.css';
import axios from 'axios'; // Import Axios
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import MaleIcon from '@mui/icons-material/Male';
import { validateEmail, validateIndianMobileNumber } from './Validation/Validation'; // Importing validation functions

const Createacc = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [dpUrl, setDpUrl] = useState(null); // State to store uploaded image URL
    const [notification, setNotification] = useState(null); // State for notification content
    const fileInputRef = useRef(null); // Ref to the hidden file input

    useEffect(() => {
        // Clear notification after 2 seconds
        const timer = setTimeout(() => {
            setNotification(null);
        }, 2000);

        return () => clearTimeout(timer);
    }, [notification]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform validation
        if (!validateEmail(email)) {
            setNotification({ type: 'error', message: 'Please enter a valid email address ending with @gcu.edu.in' });
            return;
        }

        if (!name.trim()) {
            setNotification({ type: 'error', message: 'Please enter your name' });
            return;
        }

        if (!validateIndianMobileNumber(mobile)) {
            setNotification({ type: 'error', message: 'Please enter a valid 10-digit Indian mobile number' });
            return;
        }

        if (!gender) {
            setNotification({ type: 'error', message: 'Please select your gender' });
            return;
        }

        // If all validations pass, proceed with form submission
        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                email,
                name,
                mobile,
                gender,
                dpUrl
            });

            setNotification({ type: 'success', message: 'Registration successful' });
            console.log('Response from server:', response.data);
            // Handle success response
        } catch (error) {
            console.error('Error submitting form:', error);
            setNotification({ type: 'error', message: 'An error occurred while registering. Please try again later.' });
            // Handle error
        }
    };

    const handleUploadClick = () => {
        // Trigger click event on the hidden file input
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setDpUrl(imageUrl);
    };

    return (
        <div className='createacc'>
            <div className='notification-container'>
                {notification && (
                    <div className={`notification ${notification.type}`}>
                        {notification.message}
                    </div>
                )}
            </div>
            <div className='heading'>Create your Dchat profile</div>
            <div className='heading-2'>Help your fellow mates to embrace your beauty</div>

            <div className='formbox'>
                <form onSubmit={handleSubmit}>
                    <div className='upload-dp-parent'>
                        <div className='upload-dp' onClick={handleUploadClick} style={{backgroundImage: `url(${dpUrl})`}}>
                            {dpUrl ? null : <AddAPhotoIcon />}
                            <input
                                id="file-input"
                                type="file"
                                ref={fileInputRef}
                                className='file-type-hidden'
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>

                    <div className='formbox-input'>
                        <div className='icon-container'> <AlternateEmailIcon /></div>
                        <input 
                            type='email' 
                            placeholder='Enter Your College email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='formbox-input'>
                        <div className='icon-container'>  <AccountCircleIcon /></div>
                        <input 
                            type='text' 
                            placeholder='Enter Your Name' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='formbox-input'>
                        <div className='icon-container'>  <CallIcon /></div>
                        <input 
                            type='text' 
                            placeholder='Enter Your Mobile Number' 
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>
                    <div className='formbox-button'>
                        <div className='icon-container'>  <MaleIcon /></div>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className='submit'>
                        <button type="submit"> Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Createacc;
