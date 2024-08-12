import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { AuthContext } from '../../context/AuthContext';
import './layout.scss';

function RequireAuth(){
  const {currentUser} = useContext(AuthContext);

  return !currentUser ? <Navigate to="/login" /> : (
    currentUser && <div className="layout">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default RequireAuth;