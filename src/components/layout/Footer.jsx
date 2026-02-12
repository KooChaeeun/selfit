import React from 'react';
// import './style.css';
import FooterLogo from '../../assets/logo_bt.svg?react';
import FooterBtn from '../../assets/footer_btn.svg?react';

const Footer = () => {
    return (
        <footer className="ft">
            <div className="ft-wrap">
                <div className="ft-top">
                    {/* COMPANY INFO */}
                    <div className="ft-section ft-light">
                        <h3 className="ft-ttl">COMPANY INFO</h3>
                        <div className="ft-info-list">
                            <p className="touch-item">02-123-1546</p>
                            <p className="touch-item">selfit@email.com</p>
                        </div>
                    </div>

                    {/* SUPPORT */}
                    <div className="ft-section ft-right">
                        <h3 className="ft-ttl">SUPPORT</h3>
                        <ul className="ft-info-list">
                            <li className="touch-item">
                                <a href="#">Contact Us</a>
                            </li>
                            <li className="touch-item">
                                <a href="#">Q&A</a>
                            </li>
                            <li className="touch-item">
                                <a href="#">Site Map</a>
                            </li>
                        </ul>
                    </div>

                    {/* POLICIES */}
                    <div className="ft-section ft-right">
                        <h3 className="ft-ttl">POLICIES</h3>
                        <ul className="ft-info-list">
                            <li className="touch-item">
                                <a href="#">Terms of Service</a>
                            </li>
                            <li className="touch-item">
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li className="touch-item">
                                <a href="#">Cookies</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* footer 하단영역 */}
                <div className="ft-bottom">
                    <button className="join-btn">
                        <FooterBtn className="ft-btn" />
                    </button>
                    <p className="copy">© 2025 PRECIOUS. ALL RIGHTS RESERVED.</p>
                </div>
            </div>

            <div className="ft-bg">
                <FooterLogo className="ft-bg-svg" />
            </div>
        </footer>
    );
};

export default Footer;
