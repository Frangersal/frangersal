import React from 'react'
import './style/Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <>
            <footer className="bg-verde text-white py-4">
                <div className="container">
                    <div className="text-center">
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