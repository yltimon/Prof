import React from "react"
import { Link } from "react-router-dom"
import {FaHeartbeat} from "react-icons/fa";
function Navbar() {
    return(
        <>
            <nav className="flex justify-between bg-white border-gray-200 p-4">
                <div className="flex m-4 ml-6">
                    <FaHeartbeat className="text-3xl text-red-900"/>
                    <h1 className="font-medium m-1">HealthInsureTrack</h1>
                </div> 
                <div className="m-4 flex gap-20">
                    <Link to='/homepage'>Dashboard</Link>
                    <Link to='/claim'>Claim Submission</Link>
                    <Link to='/locator'>Clinic Locator</Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar;