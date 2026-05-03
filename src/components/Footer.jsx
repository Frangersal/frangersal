import React from 'react'
import './style/Footer.css'
import pageSpeedIcon from '../assets/img/pagespeedinsights.webp'
import w3cIcon from '../assets/img/nuhtmlchecker.webp'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <>
            <footer className="bg-verde text-white py-4">
                <div className="container">
                    <div className="text-center">
                        {/* paginas de rendimiento */}
                        <div className="mb-3 mt-4">
                            <div className="d-flex justify-content-center gap-4">
                                <a href="https://pagespeed.web.dev/analysis/https-frangersal-netlify-app/8d2aj9y6x7?form_factor=desktop" target="_blank" rel="noopener noreferrer" className="btn-rendimiento shadow-green">
                                    <img src={pageSpeedIcon} alt="PageSpeed Insights" height="30" className="rounded" />
                                </a>
                                
                                <a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Ffrangersal.netlify.app%2F" target="_blank" rel="noopener noreferrer" className="btn-rendimiento shadow-green">
                                    <img src={w3cIcon} alt="W3C Nu HTML Checker" height="30" className="rounded" />
                                </a>
                                
                            </div>
                        </div> 
                        
                        {/* Mensaje de copyright */}
                        <div>
                            <p className="mb-0 footer-text">
                                &lt;Frangersal year=&#123;{currentYear}&#125; country=&#123;México&#125;/&gt; ©
                            </p>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer