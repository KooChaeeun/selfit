import React from 'react';

const Fitting = () => {
    const clothesItems = [
        { id: 1, src: '/img/main/fit01.png', alt: 'clothe' },
        { id: 2, src: '/img/main/fit02.png', alt: 'clothe' },
        { id: 3, src: '/img/main/fit03.png', alt: 'clothe' },
        { id: 4, src: '/img/main/fit04.png', alt: 'clothe' },
        { id: 5, src: '/img/main/fit05.png', alt: 'clothe' },
    ];

    return (
        <section className="fitting-section">
            <div className="inner">
                {/* LEFT */}
                <div className="fitting-title">
                    <h2 className="title">
                        <p>TRY OUR</p>
                        <span className="arrow">
                            <img src="/img/main/fitting_btn_arrow.png" alt="arrow" />
                        </span>
                        <br />
                        <p className="service-p">SERVICE!</p>
                    </h2>
                    <p className="sub-title">
                        가상 피팅 서비스로 나에게 가장 어울리는 순간을, 지금 만나보세요.
                    </p>
                    <p className="sub-desc">
                        실시간으로 완성되는 나만의 핏. <br />
                        당신의 체형에 꼭 맞는 핏을 실시간으로 시뮬레이션합니다. <br />
                        화면 속에서 직접 입어보는 듯한 리얼한 경험을 통해, 스타일을 새롭게
                        느껴보세요.
                    </p>
                </div>

                {/* RIGHT */}

                <div className="fit-area serviceRight">
                    <div className="fit-area bg-grey">
                        <div className="clothes-items">
                            {clothesItems.map((item) => (
                                <div key={item.id} className="clothe-item">
                                    <img src={item.src} alt={item.alt} />
                                </div>
                            ))}
                        </div>

                        <img src="/img/main/fitting-model.png" alt="model" className="model-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fitting;
