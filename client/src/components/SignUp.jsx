import { useState } from "react";
import { FaPersonRunning } from "react-icons/fa6";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FaLock, FaLockOpen  } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/homepage')
    }
    return (
        <>
            <div className="relative flex items-center justify-center min-h-screen">
                <div className="bg-rose-200 w-1/2 justify-around h-screen flex flex-col text-center  absolute top-4 z-10" >
                    <div className="flex flex-col items-center">
                        <div className="p-2 bg-red-900"><FaPersonRunning className="text-6xl text-white" /></div>
                        <h2 className="text-2xl font-bold">HealthTrack</h2>
                    </div>
                    
                    <div>
                        <h1 className="text-5xl font-bold">Create Account</h1>
                        <p className="pt-2 font-normal">Track your insurance and claims easily</p>
                    </div>
                    <div className="text-justify">
                        <form className="w-full max-w-md mx-auto" action="">
                            <label className="font-medium block mt-4 mb-2" htmlFor="name">Full Name</label>
                            <input className="py-2 px-2 w-full mb-2 border focus:outline-none focus:ring-2 focus:ring-red-900" type="text" name="name" id="name" placeholder="Enter your Full Name" />
                            <label className="font-medium block mt-4 mb-2" htmlFor="email">Email</label>
                            <input className="py-2 px-2 w-full mb-2 border focus:outline-none focus:ring-2 focus:ring-red-900" type="email" name="email" id="email" placeholder="Enter your Email address" />
                            <div className="relative">
                                <label className="font-medium block mt-4 mb-2" htmlFor="password">Password</label>
                                <input className="py-2 px-2 w-full border focus:outline-none focus:ring-2 focus:ring-red-900" type={showPassword ? 'text' : 'password'} name="" id="password" placeholder="Create a secure password" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center pt-8">
                                    {showPassword ? (
                                        <FaLockOpen  className="h-6 w-6 text-black" />
                                    ) : (<FaLock className="h-6 w-6 text-black"/>)}
                                </button>
                            </div>
                            <div className="text-right mt-1">
                                <a href="#" className="text-sm hover:underline font-light">Forgot Password?</a>
                            </div>
                            <button onClick={handleClick} className="w-full mt-10 bg-red-900 py-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500" type="submit">SignUp</button>
                        </form>
                    </div>
                </div>
                <div className="bg-neutral-400 w-1/2 h-1/2 top-4 right-4 rounded-r-full absolute "></div>
                <div className="bg-red-900 h-1/2 w-1/2 absolute -bottom-4 left-4 rounded-l-full"></div>
            </div>
        </>
    )
}

export default SignUp