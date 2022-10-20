import React from 'react';
import './Toolbar.css';
import {  } from 'react-icons';
import { BiSearch, BiShoppingBag } from 'react-icons/bi';
import { HiOutlineHeart } from 'react-icons/hi';

const Toolbar = () => {
  return (
    <div className="toolbar">
        <div className="container">
            <div className="activity">
                <p>Online</p>
                <div className="overlay-container">
                    <div className="overlay first"></div>
                    <div className="overlay second"></div>
                    <div className="overlay third"></div>
                </div>
            </div>    
            <div className="toolbar-icons">
                <BiSearch size={20} />
                <HiOutlineHeart size={20} />
                <BiShoppingBag size={20} />
            </div>
        </div>
    </div>
  )
}

export default Toolbar;