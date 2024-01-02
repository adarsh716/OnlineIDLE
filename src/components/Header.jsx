import { Link, NavLink } from 'react-router-dom';
import { UserButton } from "@clerk/clerk-react"
import { useAuth } from '@clerk/clerk-react';
import "../App.css";
import UserSignIn from './Signin';
import UserSignOut from './Signup';
import Dashboard from './Profile';

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
      <div className='text-white'>
        <NavLink to={"/signin"}>Sign IN</NavLink>
      </div>
    </nav>
  );
};

export default Header;