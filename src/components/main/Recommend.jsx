import React from 'react';
import useDraggable from '../../hooks/useDraggable';

const Recommend = () => {
    const recommendItems = [
        {
            id: 1,
            src: '/img/main/recom01.jpg',
            alt: 'recommend',
            title: '레더 시크룩',
            desc: '블랙 레더 재킷과 다크 진으로 완성한 강렬한 스타일',
        },
        {
            id: 2,
            src: '/img/main/recom02.jpg',
            alt: 'recommend',
            title: '베이직 캐주얼',
            desc: '베이지 가디건과 화이트 팬츠의 깔끔한 조합',
        },
        {
            id: 3,
            src: '/img/main/recom03.jpg',
            alt: 'recommend',
            title: '다크 페미닌',
            desc: '블랙 레더 재킷과 에메랄드 스커트의 시크한 매치',
        },
        {
            id: 4,
            src: '/img/main/recom04.jpg',
            alt: 'recommend',
            title: '뉴트럴 시티룩',
            desc: '부드러운 베이지 샤쓰 코트, 블랙의 심플한 조합으로 완성한 데일리룩',
        },
        {
            id: 5,
            src: '/img/main/recom05.jpg',
            alt: 'recommend',
            title: '레더 믹스',
            desc: '화이트 니트와 레더 팬츠로 완성한 모던한 스타일',
        },
        {
            id: 6,
            src: '/img/main/recom06.jpg',
            alt: 'recommend',
            title: '레이어드 룩',
            desc: '브라운 메쉬와 블랙 스커트의 세련된 레이어드',
        },
    ];

    const { scrollRef, onDragStart, onDragEnd, onDragMove } = useDraggable();

    return (
        <section className="recommend-section">
            <div className="inner">
                <div className="title">
                    <h2>RECOMMEND</h2>
                </div>
            </div>

            <div
                className="recom-img-area"
                ref={scrollRef}
                onMouseDown={onDragStart}
                onMouseUp={onDragEnd}
                onMouseMove={onDragMove}
                onMouseLeave={onDragEnd}
            >
                <div className="recom-img-wrapper">
                    {recommendItems.map((item) => (
                        <div key={item.id} className="recom-item">
                            <img src={item.src} alt={item.alt} />
                            <div className="overlay">
                                <div className="overlay-title">{item.title}</div>
                                <div className="overlay-desc">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recommend;
