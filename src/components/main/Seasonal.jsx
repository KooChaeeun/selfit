import React, { useState } from 'react';

const Seasonal = () => {
    const [activeId, setActiveId] = useState(1);

    const trends = [
        {
            id: 1,
            title: 'JACKET',
            description: '더스트 블루 코듀로이 트윌 재킷\n일교차 큰 날씨에도 완벽한 시즌 필수템',
        },
        {
            id: 2,
            title: 'PANTS',
            description:
                '다크 그레이 유틸리티 카고 팬츠\n입체적인 포켓 디테일로 실용성과 스타일을 동시에',
        },
        {
            id: 3,
            title: 'VEST',
            description:
                '미니멀 레이어드 패딩 베스트\n가벼운 무게감으로 활동성을 높인 감각적인 이너 아이템',
        },
        {
            id: 4,
            title: 'KNIT',
            description:
                '소프트 터치 화이트 하이넥 니트\n부드러운 실루엣과 보온성을 겸비한 베이직 레이어드 웨어',
        },
    ];

    return (
        <section>
            <div className="inner">
                <div className="title">
                    <h2>SEASONAL TRENDS</h2>
                </div>

                <div className="season-area">
                    <div className="season-left">
                        <div className="img-box">
                            <img src="/img/main/seasonal.jpg" alt="seasonal-trends" />
                        </div>
                    </div>

                    <div className="season-right">
                        <article>
                            <span className="city">SEOUL</span>
                            <span className="temp">
                                16<span className="degree">°C</span>
                            </span>

                            <ul>
                                {trends.map((trend, index) => (
                                    <li
                                        key={trend.id}
                                        className={activeId === trend.id ? 'active' : ''}
                                        onMouseEnter={() => setActiveId(trend.id)}
                                    >
                                        <div className="title-row">
                                            <span className="number">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <h3>{trend.title}</h3>
                                            <button
                                                className={
                                                    activeId === trend.id ? 'arrow active' : 'arrow'
                                                }
                                            >
                                                <img src="/img/common/btn-up.png" alt="" />
                                            </button>
                                        </div>

                                        {activeId === trend.id && (
                                            <p className="desc">
                                                {trend.description.split('\n').map((line, i) => (
                                                    <span key={i}>
                                                        {line}
                                                        <br />
                                                    </span>
                                                ))}
                                            </p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Seasonal;
