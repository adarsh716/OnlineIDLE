import { Link, NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { UserButton } from "@clerk/clerk-react"
import { useAuth } from '@clerk/clerk-react';
import Dashboard from './Profile';
import "../App.css";

const Header = () => {
  const { userId } = useAuth();

  return (
    <nav className='flex items-center justify-between px-6 py-4 mb-5 bg-gray-900'>
      <div className='flex items-center'>
        <Link to='/'>
          <div className='text-lg font-bold text-white uppercase'>
            A<sup>2</sup> Code Editor
          </div>
        </Link>
      </div>

      <div className='flex items-center text-white'>
        {!userId && (
          <>
            <NavLink to={"/signin"} className='text-gray-300 hover:text-white mr-4'>Sign IN</NavLink>
            <NavLink to={"/signup"} className='text-gray-300 hover:text-white mr-4'>Sign UP</NavLink>
          </>
        )}
        {userId && (
          <>
          <NavLink to={"/profile"} element={<Navigate to={<Dashboard/>} replace={true}/>} className='text-gray-300 hover:text-white mr-4'>
          Profile
          </NavLink>
            <UserButton afterSignOutUrl='/' />
          </>
        )}

      </div>
    </nav>
  );
};

export default Header;
