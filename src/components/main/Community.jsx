import React from 'react';

const Community = () => {
    const images = [
        '/img/main/community01.jpg',
        '/img/main/community02.jpg',
        '/img/main/community03.jpg',
        '/img/main/community04.jpg',
        '/img/main/community05.jpg',
        '/img/main/community06.jpg',
        '/img/main/community07.jpg',
        '/img/main/community08.jpg',
        '/img/main/community09.jpg',
        '/img/main/community10.jpg',
    ];

    return (
        <section className="community">
            <div className="inner">
                <div className="community-header title">
                    <h2>COMMUNITY</h2>
                    {/* <a href="#" className="review-link more-btn">
                        Customized Reviews
                    </a> */}
                </div>

                <div className="w-100-right">
                    <a href="#" className="review-link more-btn">
                        Customized Reviews
                    </a>
                </div>
                <div className="community-grid">
                    {images.map((src, index) => (
                        <div className="community-item" key={index}>
                            <img src={src} alt={`community-${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Community;
