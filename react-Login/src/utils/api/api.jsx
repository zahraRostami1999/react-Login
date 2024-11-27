import axios from "axios";

export const addUser = (data) => {
    axios.post('http://localhost:3500/User', {
        username: data.username,
        password: data.password,
    })
    alert("User added!")
}

export const verifyUser = async (data) => {
    try {
        const response = await axios.get('http://localhost:3500/User');
        const users = response.data;
        const userExists = users.some(user =>
            user.username === data.username && user.password === data.password
        );
        return userExists;
    } catch (error) {
        console.error('Error verifying user:', error);
        return false;
    }
};
