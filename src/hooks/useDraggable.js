import { useRef, useState } from 'react';

const useDraggable = () => {
    const scrollRef = useRef(null);
    const [isDrag, setIsDrag] = useState(false);
    const startXRef = useRef(0);

    const onPointerDown = (e) => {
        setIsDrag(true);
        startXRef.current = e.clientX + scrollRef.current.scrollLeft;
    };

    const onPointerUp = () => {
        setIsDrag(false);
    };

    const onPointerMove = (e) => {
        if (!isDrag) return;
        scrollRef.current.scrollLeft = startXRef.current - e.clientX;
    };

    return {
        scrollRef,
        onPointerDown,
        onPointerUp,
        onPointerMove,
    };
};

export default useDraggable;
