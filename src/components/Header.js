import React from 'react';
import { Link } from "react-router-dom";
import { updateContext, updateStore } from '../store/actions';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const { BookState,BookDispatch } = updateContext();
  const navigate = useNavigate();

  const {
    logged
   } = BookState;

  const loggedIn = () => {
    navigate("/login"); 
  }

  const loggedOut = () => {
    updateStore(BookDispatch,{logged:false});
    navigate("/login"); 
  }

  return (
    <header>
      <h1>Club Members Gallery</h1>
      <nav>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            {logged ?
             <Link to="/adminpanel">Admin Page</Link>
            :
             <Link to="/login">Admin Page</Link>
            }
          </li>
          <li>
          {logged ?
             <button className="login-btn" onClick={()=>loggedOut()}>
               Logout
             </button>
            :
             <button className="login-btn" onClick={()=>loggedIn()}>
              Login
             </button>
            }
        
             
  
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;