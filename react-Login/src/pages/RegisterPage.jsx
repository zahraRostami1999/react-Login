import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from 'react';
const RegisterPage = () => {
    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9]{3,23}$/;
    const PASSWORD_REGEX = /^(?=.*[a-z]{4})(?=.*\d).{5,10}$/


    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);

    const [pwd, setPwd] = useState('p');
    const [validPwd, setValidPwd] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidUser(result);
    }, [user])

    useEffect(() => {
        const result = PASSWORD_REGEX.test(pwd);
        setValidPwd(result);
    }, [pwd])

    useEffect(() => {
        const result = PASSWORD_REGEX.test(pwd);
        const match = pwd === matchPwd;
        setValidMatchPwd(match);
    }, [pwd, matchPwd])


    return (
        <>
            <div className='bg-pink-300 h-screen flex justify-center items-center font-sans'>
                <div className='md:w-2/3 lg:w-1/3 bg bg-black-opacity-5 lg:h-2/3 rounded sm:w-5/6 sm:h-5/6 md:h-5/6'>
                    <h1 className="font-semibold text-2xl mx-10 my-8">Register</h1>
                    <div className="grid grid-rows-9 grid-cols-1 mx-10 rounded mt-10">
                        <input onChange={(e)=> setUser(e.target.value)} className="rounded-xl px-2 h-15 border-none text-base required:" type='text' placeholder='Username'  />
                        <p>{validUser? "Okay✅": "❌Your username must be more than 3 characters."}</p>
                        <input onChange={(e)=> setPwd(e.target.value)} className="rounded-xl px-2 h-15 border-none text-base required" type='password' placeholder='Password' />
                        <p>{validPwd? "Okay✅": "❌Your password must contain at least 4 characters and one number."}</p>
                        <input onChange={(e)=> setMatchPwd(e.target.value)} className="rounded-xl px-2 h-15 border-none text-base required" type='password' placeholder='Confirm Password' />
                        <p>{validMatchPwd? "Okay✅": "❌You must re-enter your password."}</p>
                        <button className="bg-orange-600 rounded-xl">Sign Up</button>
                        <div>Already have an account? <Link to="/login">Login</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;