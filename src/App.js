import './App.css';
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom';
import UserSignIn from './components/Signin';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/signin' element={<UserSignIn/>} />
      </Routes>
      <>
      <h1 className='text-2xl mt-20 font-bold mb-5 ml-[500px]'>Welcome to CodePen</h1>
      <p className='mb-5 ml-[500px]'>
        You have to first login or signup to use the CodePen.Thankyou!!
      </p>
    </>
    </div>
  );
}

export default App;
