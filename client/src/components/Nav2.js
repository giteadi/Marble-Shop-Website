import React from 'react';
import './Nav2.css';
import { useNavigate } from 'react-router-dom';

function Nav2() {
  const nav = useNavigate();
  
  return (
    <div id='Nav2div'>
      <nav className="nav">
        <input id="menu" type="checkbox" />
        <label htmlFor="menu">Menu</label>
        <ul className="menu">
          <li>
            <a href='/about'>
              <span className='text-black'>About</span> 
            </a>
          </li>
          <li>
            <a href="/gallery">
              <span>Gallery</span>
              <i className="fas fa-tasks" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="/blogs">
              <span>Blogs</span>
              <i className="fas fa-users" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="/contact">
              <span>Contact</span>
              <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
            </a>
          </li>
          
        </ul>
       
      </nav>
      <div className='relative rounded-full bg-slate-500'>
          <button onClick={(()=>{
            nav("/");
          })}>Home</button>
        </div>
    </div>
  );
}

export default Nav2;
