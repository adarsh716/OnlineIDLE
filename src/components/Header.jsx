import { Link, NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { UserButton } from "@clerk/clerk-react"
import { useAuth } from '@clerk/clerk-react';
import Dashboard from './Profile';
import "../App.css";

const Header = () => {
  const { userId } = useAuth();

  return (
    <nav className='flex items-center justify-between px-6 py-4 mb-5 bg-black'>
      <div className='flex items-center'>
        <Link to='/'>
          <div className='text-lg font-bold text-white uppercase'>
            CodePen
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
          <NavLink to={"/profile"} element={<Navigate to={<Dashboard/>} replace={true}/>} className='text-gray-300 hover:text-white mr-4'>
            Profile
          </NavLink>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </nav>
  );
};

export default Header;