import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                {/* 배경 이미지: 가죽 질감의 어두운 이미지 */}
                <img src="/img/main/hero-bg.jpg" alt="Hero Background" />
            </div>

            <div className="hero-content">
                <div className="inner-container">
                    {/* 좌측 상단 문구 */}
                    <p className="sub-title top-left">
                        내게 맞는 스타일, 나만의 모습 — Find your fit, be your self
                    </p>

                    {/* 중앙 메인 타이틀 (SELFIT YOUR) */}
                    <div className="main-title-group">
                        <img src="/img/main/selfit.png" alt="SELFIT" className="img-selfit" />
                        <img src="/img/main/your.png" alt="YOUR" className="img-your" />
                    </div>

                    {/* 우측 하단 문구 */}
                    <div className="description-group bottom-right">
                        <p className="description">
                            내 가치의 건강한 시작
                            <br />
                            <span>Selfit — 내 스타일을 찾고, 나로 살아가다</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
