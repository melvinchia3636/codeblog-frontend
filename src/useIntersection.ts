
import { useState, useEffect, MutableRefObject } from "react";

const useIntersection = (element: any, rootMargin: string): boolean => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin }
        );

        element && observer.observe(element.current);

        return () => observer.unobserve(element.current);
    }, []);

    return isVisible;
};

export { useIntersection };