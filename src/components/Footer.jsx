import React from 'react'
import './style/Footer.css'
import githubIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/brands/github.svg'
import linkedinIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/brands/linkedin.svg'
import twitterIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/brands/twitter.svg'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <>
            <footer className="bg-verde text-white py-4">
                <div className="container">
                    <div className="text-center">
                        {/* Iconos de redes sociales */}
                        <div className="mb-3">
                            <div className="d-flex justify-content-center gap-3">
                                {/* GitHub */}
                                <a href="#" className="text-white fs-4 social-icon" target="_blank" rel="noopener noreferrer">
                                    <img src={githubIcon} alt="GitHub" width="24" height="24" />
                                </a>
                                
                                {/* LinkedIn */}
                                <a href="#" className="text-white fs-4 social-icon" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedinIcon} alt="LinkedIn" width="24" height="24" />
                                </a>
                                
                                {/* Twitter/X */}
                                <a href="#" className="text-white fs-4 social-icon" target="_blank" rel="noopener noreferrer">
                                    <img src={twitterIcon} alt="Twitter" width="24" height="24" />
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