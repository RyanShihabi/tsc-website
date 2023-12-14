// ButtonGrid.js
import React from 'react';
import { Link } from 'react-router-dom';

const Grid = () => {
    const getRandomColor = () => {
        // Generate a random vibrant color
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    
    return (
    <div className="button-grid">
        <Link to="/golf">
            <button
            className="grid-button"
            onMouseEnter={(e) => (e.target.style.backgroundColor = getRandomColor())}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
            >
            Golf ⛳️
            </button>
        </Link>
        <button
        className="grid-button"
        onMouseEnter={(e) => (e.target.style.backgroundColor = getRandomColor())}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
        Football 🏈
        </button>
        <button
        className="grid-button"
        onMouseEnter={(e) => (e.target.style.backgroundColor = getRandomColor())}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
        Soccer ⚽️
        </button>
        <button
        className="grid-button"
        onMouseEnter={(e) => (e.target.style.backgroundColor = getRandomColor())}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
        Basketball 🏀
        </button>
        <button
        className="grid-button"
        onMouseEnter={(e) => (e.target.style.backgroundColor = getRandomColor())}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
        Tennis 🎾
        </button>
        <button
        className="grid-button"
        onMouseEnter={(e) => (e.target.style.backgroundColor = getRandomColor())}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
        Baseball ⚾️
        </button>
        <button
        className="grid-button"
        onMouseEnter={(e) => (e.target.style.backgroundColor = getRandomColor())}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
        UFC 🥊
        </button>
        <button
        className="grid-button"
        onMouseEnter={(e) => (e.target.style.backgroundColor = getRandomColor())}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
        MMA 🦵
        </button>
        <button
        className="grid-button"
        onMouseEnter={(e) => (e.target.style.backgroundColor = getRandomColor())}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
        Volleyball 🏐
        </button>
        <button
        className="grid-button"
        onMouseEnter={(e) => (e.target.style.backgroundColor = getRandomColor())}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
        Hockey 🏒  
        </button>
        {/* Add more buttons as needed */}
    </div>
    );
};

export default Grid;
