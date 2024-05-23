import { adminuser } from './members';


export const checkCredentials = (email, password) => {
    return adminuser.some(member => member.email === email && member.password === password);
};

export const checkEmailVaild = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
}