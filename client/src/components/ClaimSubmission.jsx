import { FaClinicMedical } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
function ClaimSubmission() {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/homepage')
    }
    return(
        <div>
            <nav className="flex justify-between bg-white border-gray-400 shadow-md p-4">
                <div className="flex gap-2">
                    <FaClinicMedical className="text-2xl mt-0.5"/>
                    <h1 className="font-medium text-2xl">HealthInsureTrack</h1>
                </div>
                <Link to='/homepage'>
                    <div>
                        <p className="text-red-500">Back to Dashboard</p>
                    </div>
                </Link>
                
            </nav>

            <main>
                <div className="p-4 mt-4">
                    <h2 className="text-2xl font-semibold">Submit Health Insurance Claim</h2>
                </div>
                <div className="p-12 m-4 border-neutral-400 shadow-2xl">
                    <form className="w-full mt-10" action="">
                        <h2 className="text-2xl">Patient Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="fullname" className="font-medium block mt-1 mb-2">Patient Name</label>
                                <input className="py-2 px-2 w-full mb-2 border focus:outline-none focus:ring-2 focus:ring-red-900" type="text" name="fullname" id="name" placeholder="Enter full name" />
                                <label htmlFor="fullname" className="font-medium block mt-4 mb-2">Contact Number</label>
                                <input className="py-2 px-2 w-full mb-2 border focus:outline-none focus:ring-2 focus:ring-red-900" type="text" name="fullname" id="name" placeholder="Enter contact number" />
                            </div>

                            <div>
                                <label htmlFor="patientId" className="font-medium block mt-1 mb-2">Patient ID</label>
                                <input className="py-2 px-2 w-full mb-2 border focus:outline-none focus:ring-2 focus:ring-red-900" type="text" name="patientId" id="patientId" placeholder="Enter patient ID" />
                                <label htmlFor="email" className="font-medium block mt-4 mb-2">Email Address</label>
                                <input className="py-2 px-2 w-full mb-2 border focus:outline-none focus:ring-2 focus:ring-red-900" type="email" name="email" id="email" placeholder="Enter email address" />
                            </div>
                        </div>

                        <h2 className="text-2xl mt-6">Treatment Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="date" className="font-medium block mt-1 mb-2">Date of Treatment</label>
                                <input className="py-2 px-2 w-full mb-2 border focus:outline-none focus:ring-2 focus:ring-red-900" type="date" name="date" id="date" placeholder="MM/DD/YYYY" />
                            </div>

                            <div>
                                <label htmlFor="treatmenttype" className="font-medium block mt-1 mb-2">Type of Treatment</label>
                                <input className="py-2 px-2 w-full mb-2 border focus:outline-none focus:ring-2 focus:ring-red-900" type="text" name="treatmenttype" id="treatmenttype" placeholder="Enter treatment type" />
                            </div>
                        </div>

                        <h2 className="text-2xl mt-6">Supporting Documents</h2>
                        <div>
                            <label className="font-medium block mt-1 mb-2" htmlFor="docs">Upload Documents</label>
                            <input className="py-2 px-2 w-full mb-2 border" type="file" name="docs" id="docs" />
                        </div>
                        <button onClick={handleClick} className="py-2 px-2 mt-6 w-full mb-2 border bg-red-900 text-white" type="submit">Submit Claim</button>
                    </form>
                </div>
            </main>
        </div>
    )
    
}
export default ClaimSubmission