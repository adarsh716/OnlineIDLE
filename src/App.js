import './App.css';
import { Route,Routes,Navigate } from 'react-router-dom';
import UserSignIn from './components/Signin';
import UserSignOut from './components/Signup';
import Dashboard from './components/Profile';
import HomePage from './components/HomePage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to={"/homepage"} replace={true}/>}/>
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/signin' element={<UserSignIn/>} />
        <Route path='/signup' element={<UserSignOut/>} />
        <Route path='/profile' element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
