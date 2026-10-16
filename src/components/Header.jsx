import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='container header-cont'>
            <Link className='header-link' to='/'>Task Manager</Link>
            <Link className="header-link" to="/about">О приложении</Link>
        </header>
    );
}

export default Header;
