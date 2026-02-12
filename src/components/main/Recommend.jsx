import React from 'react';

const Recommend = () => {
    const recommendItems = [
        { id: 1, src: '/img/main/recom01.jpg', alt: 'recommend' },
        { id: 2, src: '/img/main/recom02.jpg', alt: 'recommend' },
        { id: 3, src: '/img/main/recom03.jpg', alt: 'recommend' },
        { id: 4, src: '/img/main/recom04.jpg', alt: 'recommend' },
        { id: 5, src: '/img/main/recom05.jpg', alt: 'recommend' },
        { id: 6, src: '/img/main/recom06.jpg', alt: 'recommend' },
    ];
    return (
        <section>
            <div className="title">
                <h2>RECOMMEND</h2>
            </div>

            <div className="recom-img-area">
                {recommendItems.map((item) => (
                    <div key={item.id} className="recom-item">
                        <img src={item.src} alt={item.alt} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Recommend;
