import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
export const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="absolute w-full p-4 flex items-center justify-between z-10">
            <Link to="/" >
                <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
            </Link>

            {
                user?.email ? (
                    <div>
                        <Link to="/profile" >
                            <button className="capitalize pr-4" >profile</button>
                        </Link>
                        <Link to="/signup" >
                            <button onClick={handleLogout} className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer" >logOut</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/login" >
                            <button className="capitalize pr-4" >login</button>
                        </Link>
                        <Link to="/signup" >
                            <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer" >sign up</button>
                        </Link>
                    </div>

                )
            }

        </div>
    )
}

export default Navbar
