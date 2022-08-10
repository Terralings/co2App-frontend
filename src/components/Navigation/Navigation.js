import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ classState, handleClick }) {

    return (
        <div className={`${classState}` + ' nav'}>
            <nav className='nav-container'>
                <div className ='top-nav'>
                    <button className='closebtn-container' id='closebtn' onClick={handleClick}>
                        <span className='closebtn'>&times;</span>
                    </button>
                    <div className='logo-container'>
                        <Link to='/'>
                            <img src='/Assets/BLACK_LOGO.png' alt="ZeroCarbon logo" className='darkLogo'/>
                        </Link>
                    </div>
                    <ul className='ul-top'>
                        <Link to='/about' className='nav-item'>
                            ABOUT
                        </Link>
                        <Link to='/comingsoon' className='nav-item'>
                            RESOURCES
                        </Link>
                        <Link to='/comingsoon' className='nav-item'>
                            GET INVOLVED
                        </Link>
                    </ul>
                </div>
                <ul className='bottom-nav'>
                    <Link to='/account' className='nav-item'>
                        Account
                    </Link>
                    <Link to='/comingsoon' className='nav-item'>
                        Contact Us
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;