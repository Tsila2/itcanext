import React from 'react';

interface HeaderProps {
    name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
    return (
        <header>
            <h1>Welcome to ITCA Module 4</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#">{name}</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;