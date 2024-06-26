import { Link } from "react-router-dom";
import { useAuth } from "../../components/Auth/AuthContext";

/**
 * this page display the admin home page
 * @returns a html code of home page of admin
 */
export default function AdminHome(){

    /**
     * a useAuth hook can be used for all pages and include the object of user that include id of user and data about it 
     */
    const { user } = useAuth();

    return (
        <div className='container mx-auto text-center flex flex-col justify-center items-center my-8'>
            <h1 className='text-3xl font-bold p-5 '>Welcome <span className='font-extrabold  uppercase text-[royalblue]'>{user?user.name:'unknown'}</span></h1>
            <div className='flex flex-col md:flex-row gap-10 justify-center items-center p-14 my-8'>
            <div className='bg-gray-800 text-gray-300 w-[200px] h-[150px] shadow-md rounded-md text-center font-bold flex items-center justify-center text-2xl hover:bg-gray-600 hover:w-[220px] hover:h-[180px] transition-all duration-300'>
                    <Link to='/employeesPage'  className='flex flex-col items-center'>
                        <svg className='text-gray-300 hover:text-white transition-colors duration-300' fill="currentColor" height="64px" width="64px" viewBox="0 0 512.001 512.001">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <g>
                                    <path d="M375.071,86.028c-11.366,0-22.143,2.561-31.796,7.122c3.686,4.748,6.998,9.802,9.882,15.121 c2.828,5.216,5.244,10.688,7.214,16.364c3.928,11.321,6.069,23.469,6.069,36.109c0,12.639-2.141,24.788-6.069,36.108 c-1.969,5.678-4.386,11.147-7.214,16.364c-2.884,5.319-6.195,10.372-9.882,15.121c9.653,4.56,20.43,7.123,31.796,7.123 c41.199,0.002,74.716-33.516,74.716-74.714C449.787,119.545,416.27,86.028,375.071,86.028z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                    <path d="M375.071,271.182c-4.42,0-8.827,0.218-13.206,0.641c6.82,5.311,13.237,11.115,19.187,17.369 c6.005,6.311,11.53,13.079,16.534,20.237c16.349,23.386,27.066,50.987,30.146,80.823c0.607,5.873,0.92,11.83,0.92,17.86 c0,6.261-1.09,12.27-3.072,17.86h68.56c9.864,0,17.86-7.998,17.86-17.86C512.001,332.608,450.574,271.182,375.071,271.182z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                    <path d="M151.632,196.855c-3.928-11.32-6.069-23.469-6.069-36.108c0-12.64,2.141-24.788,6.069-36.109 c1.971-5.68,4.386-11.15,7.214-16.366c2.884-5.319,6.195-10.372,9.882-15.121c-9.653-4.56-20.43-7.122-31.796-7.122 c-41.199,0-74.716,33.517-74.716,74.716c0,41.198,33.517,74.716,74.716,74.716c11.366,0,22.143-2.562,31.796-7.123 c-3.686-4.749-6.998-9.802-9.882-15.121C156.018,208.002,153.602,202.532,151.632,196.855z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                    <path d="M136.93,271.182C61.427,271.182,0,332.608,0,408.112c0,9.863,7.997,17.86,17.86,17.86h68.56 c-1.981-5.59-3.071-11.6-3.071-17.86c0-6.031,0.313-11.988,0.919-17.86c3.08-29.836,13.797-57.437,30.146-80.823 c5.005-7.158,10.529-13.926,16.534-20.237c5.95-6.254,12.367-12.058,19.187-17.369C145.757,271.4,141.35,271.182,136.93,271.182z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                    <path d="M325.393,133.094c-2.509-6.271-5.831-12.13-9.857-17.433c-13.657-17.988-35.257-29.633-59.535-29.633 s-45.878,11.645-59.535,29.635c-4.026,5.303-7.348,11.162-9.857,17.433c-3.421,8.559-5.325,17.883-5.325,27.649 c0,9.765,1.904,19.089,5.325,27.648c2.509,6.271,5.831,12.13,9.857,17.433c13.657,17.988,35.257,29.634,59.535,29.634 s45.878-11.646,59.535-29.636c4.026-5.303,7.348-11.162,9.857-17.433c3.421-8.559,5.325-17.882,5.325-27.648 S328.814,141.653,325.393,133.094z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                    <path d="M391.768,390.252c-4.11-31.402-18.901-59.488-40.594-80.489c-5.137-4.971-10.656-9.547-16.515-13.672 c-6.044-4.256-12.444-8.04-19.149-11.288c-12.892-6.246-26.905-10.528-41.647-12.457v111.953c0,9.863-7.997,17.86-17.86,17.86 c-9.864,0-17.86-7.998-17.86-17.86V272.346c-14.743,1.929-28.755,6.211-41.648,12.457c-6.705,3.249-13.105,7.032-19.149,11.288 c-5.859,4.126-11.38,8.702-16.515,13.672c-21.695,21-36.485,49.087-40.594,80.489c-0.764,5.846-1.163,11.807-1.163,17.86 c0,9.863,7.997,17.86,17.86,17.86h238.14c9.864,0,17.86-7.998,17.86-17.86C392.933,402.059,392.534,396.098,391.768,390.252z" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    <h1>Employees</h1>
                    </Link>
                </div>
                <div className='bg-gray-800 text-gray-300 w-[200px] h-[150px] shadow-md rounded-md text-center font-bold flex items-center justify-center text-2xl hover:bg-gray-600 hover:w-[220px] hover:h-[180px] transition-all duration-300'>
                    <Link to="/profile" className='flex flex-col items-center'>
                        <svg fill="#d1d5db" width="67px" height="67px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"><path d="M2,21H8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20.207,9.293a1,1,0,0,0-1.414,0l-6.25,6.25a1.011,1.011,0,0,0-.241.391l-1.25,3.75A1,1,0,0,0,12,21a1.014,1.014,0,0,0,.316-.051l3.75-1.25a1,1,0,0,0,.391-.242l6.25-6.25a1,1,0,0,0,0-1.414Zm-5,8.583-1.629.543.543-1.629L19.5,11.414,20.586,12.5Z">
                                </path>
                            </g>
                        </svg>
                        <h1>Profile</h1>
                    </Link>
                </div>
                <div className='bg-gray-800 shadow-md rounded-md text-gray-300 w-[200px] h-[150px] rounded-lg text-center font-bold flex items-center justify-center text-2xl hover:bg-gray-600 hover:w-[220px] hover:h-[180px] hover:transitions'>
                    <Link to="/createNewMessage">
                    <svg className='m-auto text-gray-300 hover:text-white transition-colors duration-300' height="64px" width="45px" viewBox="0 0 25.951 25.951" fill="currentColor">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <path d="M3,0.225h18c1.656,0,3,1.344,3,3v10c0,0.313-0.062,0.609-0.15,0.893l-2.056-1.832 c-0.451-0.457-1.358-0.662-2.078-0.369l-3.692-3.779L23,2.7L12,8.632L1,2.7l6.977,5.438l-5.77,5.906l7.037-5.025L12,10.813 l2.758-1.795l4.467,3.191c-0.451,0.366-0.725,0.922-0.725,1.531v1.043c-1.135,0.168-2.473,0.565-3.703,1.441H3 c-1.656,0-3-1.344-3-3V3.225C0,1.569,1.344,0.225,3,0.225z"></path>
                                    <g>
                                    <path d="M20,13.741v2.434c-3.227,0-7.5,1.564-7.5,9.551c1.412-5.096,3.314-5.488,7.5-5.488v2.473 c0,0.191,0.105,0.363,0.281,0.437c0.059,0.024,0.121,0.036,0.182,0.036c0.123,0,0.244-0.048,0.334-0.139l5.016-4.504 c0.184-0.184,0.184-0.484,0-0.668l-5.016-4.465c-0.135-0.135-0.34-0.176-0.516-0.103S20,13.549,20,13.741z"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <h1 >New Message</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}