import React from 'react';
import './Home.css';
import { FaRegShareSquare } from 'react-icons/fa';
import { BsTag } from 'react-icons/bs';
import { BiShoppingBag } from 'react-icons/bi';

const Home = (props) => {
  return (
    <div className="home">
      <div className="user-intro bold">
        <p>Welcome, {props.username}!</p>
      </div>
      <div className="home-content">
        <div className="grid-container-1 grid-col-span-2">
        </div>
        <div className="grid-container-2">
        </div>
        <div className="grid-container-3">
          <div className="title">
            <p>Warframe</p>
            <FaRegShareSquare className="home-icon" />  
          </div>
          <div className="genre">
            <div className="genre-tag">
              <BsTag className="icon marginRight" />
              <p>FPS</p>
            </div>
            <div className="genre-tag">
              <BsTag className="icon marginRight " />
              <p>Action</p>
            </div>
          </div>
          <div className="grid-info-bottom">
            <div className="players">
              <p className="download-heading">Avg. Players</p>
              <p className="download-count">36,136</p>
            </div>
            <div className="price">
              <BiShoppingBag className="icon marginRight " size={20} />
              <p>FREE</p>
            </div>
          </div>
        </div>
        {/* <div className="grid-row-container">
          <div className="section-nav-container">
            <div className="section-heading">
              <p>Recently Played</p>
            </div>
            <div className="section-more">
                <p className="more-link">See all</p>
                <BiChevronRight className="more-link" />
            </div>
          </div>
        </div> */}
        <div className="grid-container grid-container-4">
        </div>
        <div className="grid-container grid-container-5">
        </div>
        <div className="grid-container grid-container-6">
        </div>
        <div className="grid-container grid-container-7">
        </div>
        <div className="grid-container grid-container-8">
        </div>
        <div className="grid-container grid-container-9">
        </div>
        <div className="grid-container grid-container-10">
        </div>
        <div className="grid-container grid-container-11">
        </div>
      </div>
    </div>
  )
}

export default Home;