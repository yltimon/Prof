import { useState } from "react";
import {APIProvider} from '@vis.gl/react-google-maps';
import { FaStethoscope, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { Link } from "react-router-dom";
function ClinicLocator() {
    const [toggleState, setToggleState] = useState('off');
    const [selectedSpecialist, setSelectedSpecialist] = useState(null);

    const specialtiesSelector = [
        'Cardiologist', 
        'Dermatology',
        'Pediatrics',
    ];
    const handleSpecialistChange = (e) => {

    };

    const handleToggleChange = () => {
        setToggleState(toggleState === 'on' ? 'off' : 'on' );
    };
    return (
        <div>
            <nav className="flex justify-between border-neutral-400 shadow-sm p-6">
                <div className="flex gap-2">
                    <FaStethoscope className="text-3xl mt-1" />
                    <h1 className="text-2xl font-medium" >HealthInsureTrack</h1>
                </div>

                <div className="m-4 flex gap-20">
                    <Link to='/homepage'>Dashboard</Link>
                    <Link to='/claim'>Claim Submission</Link>
                    <Link className="text-red-500">Clinic Locator</Link>
                </div>
            </nav>

            <main className="flex h-screen">
                <div className="flex flex-col bg-rose-200 w-1/4">
                    <h2 className="p-4 text-xl font-semibold">Filter Clinics</h2>
                    <div className="p-4">
                        <input className="p-2 w-full border-gray-500" type="text" name="search" id="search" placeholder="Search by name or location" />
                    </div>
                    

                    <h2 className="px-4 font-semibold text-lg">Specialties</h2>
                    <div className="flex flex-col px-4 pt-2 gap-4">
                        <div className="flex gap-3">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Cardiology</label>
                        </div>

                        <div className="flex gap-3">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Dermatology</label>
                        </div>   

                        <div className="flex gap-3"> 
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Pediatrics</label>
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mt-4 px-4">Open Now</h3>

                    <div className="px-4 flex gap-2" onClick={handleToggleChange}>
                        {toggleState === 'on' ? (
                            <FaToggleOn className="text-3xl text-red-900" />

                        ) : (
                            <FaToggleOff className="text-3xl text-red-900" />
                        )}
                        <p className="">Only show open clinics</p>
                    </div>

                    <div className="p-4 mt-4">
                        <button className="bg-red-900 text-white w-full p-2" type="submit">Apply Filters</button>
                    </div>
                </div>

                <div>

                </div>
            </main>
        </div>
    );
}
export default ClinicLocator