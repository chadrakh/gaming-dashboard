import React from 'react';
import Logo from '../assets/steam.svg';
import './Navigation.css'
import { RiHome2Line } from 'react-icons/ri';
import { FiShoppingCart, FiUsers, FiSettings } from 'react-icons/fi';
import { VscLibrary } from 'react-icons/vsc';
import { FaRegComment, FaArrowRight } from 'react-icons/fa';

const Navigation = (props) => {
  return (
    <div className="navigation">
      <div className="container">
        <div className="logo">
            <img src={Logo} alt=""/>  
        </div> 
        <div className="nav-buttons">
          <div className="nav">
            <RiHome2Line className="nav-icon" size={20} />
            <a href="a">Home</a>
          </div>
          <div className="nav">
            <FiShoppingCart className="nav-icon" size={20} />
            <a href="a">Store</a>
          </div>
          <div className="nav">
            <VscLibrary className="nav-icon" size={20} />
            <a href="a">Library</a>
          </div>
          <div className="nav">
            <FiUsers className="nav-icon" size={20} />
            <a href="a">Community</a>
          </div>
          <div className="nav">
            <FaRegComment className="nav-icon" size={20} />
            <a href="a">Chat</a>
          </div>
        </div>
        <div className="news">
          <a href="https://github.com/chadrakh" target="_blank" rel="noreferrer">
            <div className="news-content">
              <div className="arrow-container">
                <FaArrowRight />
              </div>
              <p>Steam Next Fest is NOW</p>
            </div>
            </a>
        </div>
        <div className="user-bottom">
          <div className="user-info">
            <div className="user-icon"></div>
            <p>{props.username}</p>
          </div>
          <FiSettings />
        </div>
      </div>   
    </div>
  )
}

export default Navigation;