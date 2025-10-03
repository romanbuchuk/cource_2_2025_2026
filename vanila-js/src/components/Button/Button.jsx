import React from 'react';

export const Button = ({ children, onClick }) => {
    const handleClick = () => {
        console.log('------> click <-------');
        onClick?.();
    }

    return (
        <button onClick={handleClick}>{children}</button>
    )
}

export default Button;
