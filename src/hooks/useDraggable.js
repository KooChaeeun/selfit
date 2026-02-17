import { useRef, useState } from 'react';

const useDraggable = () => {
    const scrollRef = useRef(null);
    const [isDrag, setIsDrag] = useState(false);
    const [startX, setStartX] = useState(0);

    const onPointerDown = (e) => {
        setIsDrag(true);
        setStartX(e.clientX + scrollRef.current.scrollLeft);
    };

    const onPointerUp = () => {
        setIsDrag(false);
    };

    const onPointerMove = (e) => {
        if (!isDrag) return;
        scrollRef.current.scrollLeft = startX - e.clientX;
    };

    return {
        scrollRef,
        onPointerDown,
        onPointerUp,
        onPointerMove,
    };
};

export default useDraggable;
