import React, { useEffect } from 'react';

export const Button = ({ children, onClick }) => {
    const handleClick = () => {
        console.log('------> click <-------');
        onClick?.();
    }

    useEffect(() => {
        const root = document.querySelector('#root');
        const h2 = document.createElement('h2');
        h2.textContent = 'Click Me!';

        root.appendChild(h2);
    }, [onClick]);

    return (
        <button onClick={handleClick}>{children}</button>
    )
}

export default Button;
