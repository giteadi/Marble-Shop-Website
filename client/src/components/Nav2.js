import React from 'react';
import './Nav2.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Nav2() {
  const nav = useNavigate();
  
  return (
    <div id='Nav2div'>
      <nav className="nav">
        <input id="menu" type="checkbox" />
        <label htmlFor="menu">Menu</label>
        <ul className="menu">
          <li>
            <Link to='/about'>
              <span className='text-black'>About</span> 
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              <span>Gallery</span>
              <i className="fas fa-tasks" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              <span>Blogs</span>
              <i className="fas fa-users" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span>Contact</span>
              <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
      </nav>
      <div className='relative rounded-full bg-slate-500'>
        <button onClick={() => nav("/")}>Home</button>
      </div>
    </div>
  );
}

export default Nav2;
