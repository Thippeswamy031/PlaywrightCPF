export function generatePhoneNumber() {
    const startDigit = ['6', '7', '8', '9'];
    const firstDigit = startDigit[Math.floor(Math.random() * startDigit.length)];
    const remainingDigits = Math.floor(Math.random() * 900000000) + 100000000;
    return firstDigit + remainingDigits; // Already a string (no need for String())
    }

   
export function generateRandomEmail() {
    const chars = 'jaime0123456789';
    let email = ''; 
    for (let i = 0; i < 10; i++) {
        email += chars[Math.floor(Math.random() * chars.length)];
        }
        return email + '@example.com';
    }

export function addressGenerator() {
    const chars = '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let address = '';
    for (let i = 0; i < 10; i++) {
        address += chars[Math.floor(Math.random() * chars.length)];
    }
    return address;
}   