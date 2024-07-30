import { useState, useRef, useLayoutEffect } from "react";


export function useSlider(padding:number = 0){
    const [itemWidth, setItemWidth] = useState(0 + padding);
    const scrollRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        if (!scrollRef.current) return;
        const children = scrollRef.current.children;
        if (!children) return;
        setItemWidth(children[0].getBoundingClientRect().width + padding)
    }, [padding])

    const scroll = (dir: '+' | '-') => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollLeft += dir === '+' ? itemWidth : -itemWidth;
    }

    return {
        scroll, scrollRef, itemWidth
    }
}