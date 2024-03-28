import axios from 'axios';

export async function sendWhatsappMessage(mobileNumber, message, password) {
    try {
        const response = await axios.post('https://whatsapp-web-js-api.onrender.com/send-message', {
            mobileNumber,
            message,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Error sending WhatsApp message:', error);
        throw new Error('Failed to send WhatsApp message');
    }
}

async function vatsal(mobileNumber, message, password) {
    try {
        const response = await axios.post('https://whatsapp-web-js-api.onrender.com/send-message', {
            mobileNumber: String(mobileNumber), // Ensure mobileNumber is a string
            message,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Error sending WhatsApp message:', error);
        throw new Error('Failed to send WhatsApp message');
    }
}

// Call the function with string arguments
setInterval(async () => {
    try {
        await vatsal('+918123573669', 'your api is alive', 'Dimple999');
        console.log('Message sent successfully');
    } catch (error) {
        console.error('Error sending message:', error.message);
    }
}, 600000); // 10 minutes interval

