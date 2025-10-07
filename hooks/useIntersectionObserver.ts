
import { useState, useEffect, useRef, useCallback } from 'react';

interface ObserverOptions {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
    triggerOnce?: boolean;
}

const useIntersectionObserver = <T extends HTMLElement,>(options: ObserverOptions = {}) => {
    const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true } = options;
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef<T | null>(null);

    const observerCallback = useCallback(([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
            setIntersecting(true);
            if (triggerOnce && ref.current) {
                // Disconnect after triggering once
                observer.disconnect();
            }
        } else {
            if (!triggerOnce) {
                setIntersecting(false);
            }
        }
    }, [triggerOnce]);

    const observer = new IntersectionObserver(observerCallback, { threshold, root, rootMargin });

    useEffect(() => {
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [observer, ref]);

    return [ref, isIntersecting] as const;
};

export default useIntersectionObserver;
