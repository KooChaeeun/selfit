const News = () => {
    const newsList = [
        {
            id: 1,
            title: '연말 외출을 로맨틱하게 매듭지을, 리본!',
            desc:
                '이번 시즌 런웨이 위, 리본이 다시 주목받고 있습니다.\n' +
                '단순한 장식을 넘어 부드럽고 구조적인 실루엣으로 재해석된 리본은 우아함을 가장 쉽고 세련되게 완성하는 키 아이템이 되었죠.\n' +
                '스타일링에 따라 단정하게도 혹은 시크하게도 변주할 수 있어 연말 룩에 포인트를 더하기에 완벽합니다.',
            tags: ['#리본', '#발레코어', '#패턴', '#Sculptural knots'],
            img: '/img/main/news01.jpg',
        },
        {
            id: 2,
            title: '가짜를 탐하는 세상! 페이크 퍼 신드롬',
            desc:
                '스타일을 위해서도,보온성을 위해서도 이번 시즌 가장 필요한 것은 퍼!\n' +
                '트렌디한 퍼 스타일링과 퍼 베스트 레이어링, 톡톡 튀는 퍼 아이템과 셀렙들이 선택한 퍼까지.\n' +
                '트렌디하고 따뜻한 겨울을 위한 퍼의 모든 것.',
            tags: ['#페이크퍼', '#베스트', '#레이어링', '#아우터'],
            img: '/img/main/news02.jpg',
        },
    ];
    return (
        <section className="news-section">
            <div className="inner">
                {/* 헤더 영역 */}
                <div className="news-title">
                    <h2 className="title">TREND NEWS</h2>
                    <a href="#" className="more-btn">
                        <img src="/img/common/more-lg.png" alt="more" />
                    </a>
                </div>

                {/* 리스트 영역 */}
                <div className="news-list">
                    {newsList.map((item) => (
                        <div key={item.id} className="news-item">
                            <div className="img-box">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="text-box">
                                <div className="info">
                                    
                                    <div className="title-area">
                                        <h3 className="item-title">{item.title}</h3>
                                        <div className="item-tags">
                                            {item.tags.map((tag, idx) => (
                                                <span key={idx} className="tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="item-desc">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
