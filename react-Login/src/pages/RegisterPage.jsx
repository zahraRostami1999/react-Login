import {Link}  from "react-router-dom";

const RegisterPage = () => {
    return (
        <>
            <div className='bg-pink-300 h-screen flex justify-center items-center'>
                <div className='w-1/3 bg bg-black-opacity-5 h-2/3 rounded'>
                    <h1 className="font-semibold text-2xl mx-10 my-10">Register</h1>
                    <div className="grid grid-rows-5 grid-cols-1 gap-5 mx-10 rounded mt-10">
                        <input className="rounded-xl px-2 h-15 border-none text-base" type='password' placeholder='Password' />
                        <input className="rounded-xl px-2 h-15 border-none text-base" type='password' placeholder='Confirm Password' />
                        <input className="rounded-xl px-2 h-15 border-none text-base" type='text' placeholder='Username' />
                        <button className="bg-orange-600 rounded-xl">Sign Up</button>
                        <p>Already have an account? <p>Login</p></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;