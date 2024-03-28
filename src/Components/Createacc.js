import React, { useState, useRef, useEffect } from 'react';
import './Createacc.css';
import axios from 'axios';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import MaleIcon from '@mui/icons-material/Male';
import { sendWhatsappMessage } from './Whatsapp'; 
import { validateEmail, validateIndianMobileNumber } from './Validation/Validation';
const generateOTP = require('./OTPgenerator');
 // Importing validation functions

const Createacc = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [dpUrl, setDpUrl] = useState(null); // State to store uploaded image URL
    const [emailOTP, setEmailOTP] = useState('');
    const [whatsappOTP, setWhatsappOTP] = useState('');
    const [notification, setNotification] = useState(null); // State for notification content
    const [showEmailOTP, setShowEmailOTP] = useState(false); // State to show/hide email OTP section
    const [showWhatsappOTP, setShowWhatsappOTP] = useState(false); // State to show/hide WhatsApp OTP section
    const [inputsDisabled, setInputsDisabled] = useState(false); // State to control inputs' disabled attribute
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

        const prefixedMobileNumber = '+91' + mobile;
        const whatsappOTP = generateOTP();
        // Create the WhatsApp message including the OTP
        const whatsappMessage = `Here is your Dchat OTP to verify your mobile number: ${whatsappOTP}`;

        try {
            // Send WhatsApp message with the prefixed mobile number
            await sendWhatsappMessage(prefixedMobileNumber, whatsappMessage, 'Dimple999');
            console.log('WhatsApp message sent successfully');
        } catch (error) {
            console.error('Error sending WhatsApp message:', error);
        }
        
        // If all validations pass, show OTP sections and make inputs non-editable
        setShowEmailOTP(true);
        setShowWhatsappOTP(true);
        setInputsDisabled(true);

        // Submit form data to backend
        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                email,
                name,
                mobile,
                gender,
                dpUrl,
                emailOTP,
                whatsappOTP
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
                            disabled={inputsDisabled}
                        />
                    </div>
                    <div className='formbox-input'>
                        <div className='icon-container'>  <AccountCircleIcon /></div>
                        <input 
                            type='text' 
                            placeholder='Enter Your Name' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={inputsDisabled}
                        />
                    </div>
                    <div className='formbox-input'>
                        <div className='icon-container'>  <CallIcon /></div>
                        <input 
                            type='text' 
                            placeholder='Enter Your Mobile Number' 
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            disabled={inputsDisabled}
                        />
                    </div>
                    <div className='formbox-button'>
                        <div className='icon-container'>  <MaleIcon /></div>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            disabled={inputsDisabled}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {showEmailOTP && (
                        <>
                            <div className='formbox-input'>
                                <div className='icon-container'>  <CallIcon /></div>
                                <input 
                                    type='text' 
                                    placeholder='Enter OTP received on your email' 
                                    value={emailOTP}
                                    onChange={(e) => setEmailOTP(e.target.value)}
                                />
                            </div>
                            <div className='submit'>
                                <button type="submit"> Verify Email OTP</button>
                            </div>
                        </>
                    )}

                    {showWhatsappOTP && (
                        <>
                            <div className='formbox-input'>
                                <div className='icon-container'>  <CallIcon /></div>
                                <input 
                                    type='text' 
                                    placeholder='Enter OTP received on your WhatsApp' 
                                    value={whatsappOTP}
                                    onChange={(e) => setWhatsappOTP(e.target.value)}
                                />
                            </div>
                            <div className='submit'>
                                <button type="submit"> Verify Whatsapp OTP</button>
                            </div>
                        </>
                    )}

                    <div className='submit'>
                        <button type="submit" disabled={inputsDisabled}> Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Createacc;
