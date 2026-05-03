import React, { useState, useEffect } from 'react'
import './style/Rendimiento.css'
import pageSpeedIcon from '../assets/img/pagespeedinsights.webp'
import w3cIcon from '../assets/img/nuhtmlchecker.webp'

const Rendimiento = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const bottomPosition = document.body.offsetHeight;
            // Un pequeño margen de error de 10px para asegurar de que detecte que llegó al final
            if (bottomPosition - scrollPosition <= 10) {
                setIsAtBottom(true);
            } else {
                setIsAtBottom(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`rendimiento-container ${isAtBottom ? 'at-bottom' : ''}`}>
            <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffrangersal.netlify.app%2F&tab=desktop" target="_blank" rel="noopener noreferrer" className="btn-rendimiento shadow-green">
                <img src={pageSpeedIcon} alt="PageSpeed Insights" height="30" className="rounded" />
            </a>
            
            <a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Ffrangersal.netlify.app%2F" target="_blank" rel="noopener noreferrer" className="btn-rendimiento shadow-green">
                <img src={w3cIcon} alt="W3C Nu HTML Checker" height="30" className="rounded" />
            </a>
        </div>
    )
}

export default Rendimiento