"use client";

import { useCallback, useEffect, useRef } from "react";

// Auto-advances a horizontal snap track one card at a time and loops back to the
// start after the last card. It waits while the visitor is engaged (pointer over
// the track, keyboard focus inside it, or a recent touch/drag), while the track
// is off screen or the tab is hidden, and never runs for prefers-reduced-motion.
// The track's first child marked [data-card] sets the step size. Returns a
// pause() to call from controls outside the track (e.g. the arrow buttons).
export default function useAutoScroll(trackRef, { interval = 3500, gap = 32, resumeDelay = 5000 } = {}) {
    const pausedUntilRef = useRef(0);
    const pause = useCallback(() => {
        pausedUntilRef.current = Date.now() + resumeDelay;
    }, [resumeDelay]);

    useEffect(() => {
        const el = trackRef.current;
        if (!el || typeof window === "undefined") return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let hovering = false;
        let focused = false;
        let inView = false;

        const step = () => {
            if (hovering || focused || !inView || document.hidden || Date.now() < pausedUntilRef.current) return;
            const maxScroll = el.scrollWidth - el.clientWidth;
            if (maxScroll <= 4) return;
            if (el.scrollLeft >= maxScroll - 4) {
                el.scrollTo({ left: 0, behavior: "smooth" });
                return;
            }
            const card = el.querySelector("[data-card]");
            const amount = card ? card.offsetWidth + gap : 335;
            el.scrollBy({ left: amount, behavior: "smooth" });
        };

        const id = setInterval(step, interval);

        const observer = new IntersectionObserver(([entry]) => {
            inView = entry.isIntersecting;
        }, { threshold: 0.3 });
        observer.observe(el);

        const onEnter = () => { hovering = true; };
        const onLeave = () => { hovering = false; };
        const onFocusIn = () => { focused = true; };
        const onFocusOut = () => { focused = false; };
        // Touch and wheel have no "leave", so hold off for a while after the last one.
        const onManual = () => { pausedUntilRef.current = Date.now() + resumeDelay; };

        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        el.addEventListener("focusin", onFocusIn);
        el.addEventListener("focusout", onFocusOut);
        el.addEventListener("touchstart", onManual, { passive: true });
        el.addEventListener("wheel", onManual, { passive: true });

        return () => {
            clearInterval(id);
            observer.disconnect();
            el.removeEventListener("mouseenter", onEnter);
            el.removeEventListener("mouseleave", onLeave);
            el.removeEventListener("focusin", onFocusIn);
            el.removeEventListener("focusout", onFocusOut);
            el.removeEventListener("touchstart", onManual);
            el.removeEventListener("wheel", onManual);
        };
    }, [trackRef, interval, gap, resumeDelay]);

    return pause;
}
