import { useRef, useState } from 'react';

const useDraggable = () => {
    const scrollRef = useRef(null);
    const [isDrag, setIsDrag] = useState(false);
    const [startX, setStartX] = useState(0);

    const onDragStart = (e) => {
        e.preventDefault();
        setIsDrag(true);
        // 현재 마우스 위치 + 이미 스크롤된 양을 더해 시작점 계산
        setStartX(e.pageX + scrollRef.current.scrollLeft);
    };

    const onDragEnd = () => {
        setIsDrag(false);
    };

    const onDragMove = (e) => {
        if (!isDrag) return; // 드래그 중이 아닐 땐 실행 안 함

        // 이동할 위치 = 시작점 - 현재 마우스 위치
        scrollRef.current.scrollLeft = startX - e.pageX;
    };

    return {
        scrollRef,
        onDragStart,
        onDragEnd,
        onDragMove,
        isDrag, // 현재 드래그 중인지 상태값도 반환 (필요시 스타일링용)
    };
};

export default useDraggable;
