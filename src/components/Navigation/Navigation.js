import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ classState, handleClick }) {

    return (
        <div className={`${classState}` + ' nav'}>
            <nav className='nav-container'>
                <div className ='top-nav'>
                    <div className='closebtn-container'>
                        <button className='closebtn' id='closebtn' onClick={handleClick}>
                            <span className='closebtn-icon'>&times;</span>
                        </button>
                    </div>
                    <div className='logo-container'>
                        <Link to='/'>
                            <img src='/Assets/BLACK_LOGO.png' alt="ZeroCarbon logo" className='darkLogo' 
                            onClick={handleClick}/>
                        </Link>
                    </div>
                    <ul className='ul-top'>
                        <Link to='/about' className='nav-item' onClick={handleClick}>
                            ABOUT
                        </Link>
                        <Link to='/comingsoon' className='nav-item' onClick={handleClick}>
                            RESOURCES
                        </Link>
                        <Link to='/comingsoon' className='nav-item' onClick={handleClick}>
                            GET INVOLVED
                        </Link>
                    </ul>
                </div>
                <ul className='bottom-nav'>
                    <Link to='/account' className='nav-item' onClick={handleClick}>
                        Account
                    </Link>
                    <Link to='/comingsoon' className='nav-item' onClick={handleClick}>
                        Contact Us
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;