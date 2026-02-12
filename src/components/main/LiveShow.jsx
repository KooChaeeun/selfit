import Live from './Live';
import useDraggable from '../../hooks/useDraggable';

const LiveShow = () => {
    const liveItems = [
        {
            id: 1,
            title: 'crystal',
            status: 'ON AIR',
            img: '/img/main/live01.jpg',
        },
        {
            id: 2,
            title: 'musinsa',
            status: 'ON AIR',
            img: '/img/main/live02.jpg',
        },
        {
            id: 3,
            title: 'kodak outfit',
            status: 'OFF AIR',
            img: '/img/main/live03.jpg',
        },
        {
            id: 4,
            title: 'showcase',
            status: 'OFF AIR',
            img: '/img/main/live04.png',
        },
        {
            id: 5,
            time: '',
            status: 'ON AIR',
            img: '/img/main/live05.jpg',
        },
    ];

    // 커스텀 훅 사용
    const { scrollRef, onDragStart, onDragEnd, onDragMove } = useDraggable();

    return (
        <section className="live-section">
            <Live />
            <div className="inner">
                <div className="live-title">
                    <a href="#" className="more-btn">
                        MORE
                    </a>
                </div>

                <div
                    className="live-list-wrapper"
                    ref={scrollRef}
                    onMouseDown={onDragStart}
                    onMouseUp={onDragEnd}
                    onMouseMove={onDragMove}
                    onMouseLeave={onDragEnd}
                >
                    <div className="live-list">
                        {liveItems.map((item) => (
                            <div className="live-card" key={item.id}>
                                <div className="img-box">
                                    <img src={item.img} alt={item.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveShow;
