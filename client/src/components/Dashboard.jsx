import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaInfoCircle, FaFileAlt, FaSearch, FaUserEdit, FaMapMarkerAlt, FaRegStar, FaFacebookF, FaTwitter, FaLinkedinIn  } from "react-icons/fa";
function Dashboard() {
    const currentYear = new Date().getFullYear();

    const gridItemData = [
        { icon: FaInfoCircle, text: 'Check Insurance Status', backgroundColor: 'bg-rose-200', path: '#'},
        { icon: FaFileAlt, text: 'Submit a Claim', backgroundColor: 'bg-neutral-400', path: '#'},
        { icon: FaSearch, text: 'Track Claim Status', backgroundColor: 'bg-red-900', path: '#', textColor: 'text-white'},
        { icon: FaUserEdit, text: 'Update Information', backgroundColor: 'bg-rose-200', path: '#'},
        { icon: FaMapMarkerAlt, text: 'Find Nearby Clinics', backgroundColor: 'bg-neutral-400', path: '#'},
        { icon: FaRegStar, text: 'Provide Ratings for Clinics', backgroundColor: 'bg-red-900', path: '#', textColor: 'text-white'},

    ];

    const handleGridItemClick = (path) => {
        navigate(path);
    };
    
    return(
        <div className="h-screen flex flex-col">
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
            <main className="flex h-full">
                <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4 w-5/6">

                    {gridItemData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col  p-4 cursor-pointer ${item.backgroundColor} ${item.textColor}`}
                            onClick={() => handleGridItemClick(item.path)}
                        >
                            <item.icon className='text-2xl mb-2' />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="p-6">
                    <div>
                        <h2>Insurance Status Summary</h2>
                        <p className='mt-4'>Coverage: Comprehensive</p>
                        <p>Limit: $500,000</p>
                        <p>Renewal Date: 12/31/2023</p>
                        <p>Premium: $120/month</p>
                    </div>
                    <div className='mt-6'>
                        <h2 className='mb-4 font-medium'>Pending Claims</h2>
                        <p>Claim ID: 123456</p>
                        <p className='mb-4'>Resolution Date: 10/20/2023</p>

                        <p>Claim ID: 789012</p>
                        <p>Status: Awaiting Documents</p>
                        <p>Resolution Date: 11/05/2023</p>
                    </div>
                </div>
            </main>
            <footer className="flex justify-between bg-white border-gray-200 p-4">
                
                <div>
                    <p>© {currentYear} HealthInsureTrack. All rights reserved.</p>
                </div>

                <div className=''>
                    <ul className='flex gap-8'>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                
                <div className='flex gap-4'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                </div>
            </footer>
        </div>
    )
}
export default Dashboard