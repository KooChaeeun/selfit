import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="header">
            <div className="header-inner">
                {/* 로고 영역 */}
                <h1 className="logo">
                    <a href="/">
                        <img src="/img/logo/logo-header.png" alt="logo" />
                    </a>
                </h1>

                {/* 메인 네비게이션 - isMenuOpen 상태에 따라 클래스 부여 */}
                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <button className="close-btn" onClick={closeMenu}>
                        <HiX size={32} color="#fff" />
                    </button>

                    <ul className="gnb">
                        <li>
                            <a href="#" onClick={() => setIsMenuOpen(false)}>
                                LIVE
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => setIsMenuOpen(false)}>
                                NEWS
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => setIsMenuOpen(false)}>
                                RECOMMEND
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => setIsMenuOpen(false)}>
                                SEASONAL
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => setIsMenuOpen(false)}>
                                COMMUNITY
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* 유틸리티 메뉴 */}
                <div className="util">
                    <button className="icon-btn search-btn">
                        <img src="/img/common/ico-search.png" alt="search" />
                    </button>
                    <button className="icon-btn user-btn">
                        <img src="/img/common/ico-my.png" alt="my" />
                    </button>
                    <button className="icon-btn cart-btn">
                        <img src="/img/common/ico-bag.png" alt="bag" />
                    </button>

                    {/* 모바일/태블릿 햄버거 버튼 (react-icons 사용) */}
                    <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? (
                            <HiX size={28} color="#fff" />
                        ) : (
                            <HiMenu size={28} color="#fff" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
