// validation.js

// Function to validate email format
// export const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@gcu\.edu\.in$/; // Regex updated to only accept emails ending with @gcu.edu.in
//     return emailRegex.test(email);
// }

export const validateEmail = (email) => {
    // Regular expression to match a broad range of email formats
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate Indian mobile number format
export const validateIndianMobileNumber = (number) => {
    const numberRegex = /^[6-9]\d{9}$/;
    return numberRegex.test(number);
}
