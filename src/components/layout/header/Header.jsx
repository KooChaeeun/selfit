import React from 'react'; // useState 제거
import './style.css';
import logo from '../../../assets/logo.svg';

// SVG 컴포넌트 임포트
import Logo from '../../../assets/logo.svg?react';
import SearchIcon from '../../../assets/search.svg?react';
import MypageIcon from '../../../assets/mypage.svg?react';
import CartIcon from '../../../assets/cart.svg?react';
import MenuIcon from '../../../assets/menu.svg?react';

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">
                <a href="https://selfit-nu.vercel.app/" aria-label="Home">
                    <Logo className="logo-svg" />
                </a>
            </h1>

            {/* PC 메인 네비게이션 */}
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <a href="#">LIVE</a>
                    </li>
                    <li>
                        <a href="#">NEWS</a>
                    </li>
                    <li>
                        <a href="#">RECOMMEND</a>
                    </li>
                    <li>
                        <a href="#">SEASONAL</a>
                    </li>
                    <li>
                        <a href="#">COMMUNITY</a>
                    </li>
                </ul>
            </nav>

            <div className="utils">
                {/* 검색 아이콘 (모든 기기 공통으로 표시) */}
                <button className="util-btn" aria-label="Search">
                    <SearchIcon className="icon-svg" />
                </button>

                {/* PC/태블릿 유틸아이콘 (모바일 360px 이하에서만 숨김) */}
                <div className="pc-utils">
                    <button className="util-btn" aria-label="User">
                        <MypageIcon className="icon-svg" />
                    </button>
                    <button className="util-btn" aria-label="Cart">
                        <CartIcon className="icon-svg" />
                    </button>
                </div>

                {/* 햄버거 아이콘 (1024px 부터 노출) */}
                <button className="util-btn mobile-menu-btn" aria-label="Menu">
                    <MenuIcon className="icon-svg" />
                </button>
            </div>
        </header>
    );
};

export default Header;
