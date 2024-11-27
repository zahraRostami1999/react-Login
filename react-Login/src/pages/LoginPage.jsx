import { useState } from "react";
import { verifyUser } from "../utils/api/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 
    const verifyNewUser = async () => {
        const userInfo = {
            username: username,
            password: password
        };

        try {
            const verify = await verifyUser(userInfo);
            if (verify) {
                navigate('/'); 
            } else {
                navigate('/login');
            }
        } catch (error) {
            console.error('Error verifying user:', error);
        }
    };

    return (
        <div className='bg-pink-300 h-screen flex justify-center items-center font-sans'>
            <div className='md:w-2/3 lg:w-1/3 bg bg-black-opacity-5 lg:h-2/3 rounded sm:w-5/6 sm:h-5/6 md:h-5/6'>
                <h1 className="font-semibold text-2xl mx-10 my-8">Login</h1>
                <div className="rounded mt-10">
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        className="rounded-xl px-2 h-12 border-none text-base required block w-5/6 my-10 mx-auto"
                        type='text'
                        placeholder='Username'
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="rounded-xl px-2 h-12 border-none text-base required block w-5/6 my-10 mx-auto"
                        type='password'
                        placeholder='Password'
                    />
                    <button
                        onClick={verifyNewUser}
                        className="bg-orange-600 rounded-xl block w-5/6 h-12 my-10 mx-auto"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
