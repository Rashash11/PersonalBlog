'use client';

import React, { useRef } from 'react';
import { useInView, type UseInViewOptions } from 'framer-motion';

interface LazyMountProps {
    children: React.ReactNode;
    /** Rendered until the real content mounts. Keep this cheap/lightweight. */
    fallback?: React.ReactNode;
    /**
     * How far before entering the viewport to start mounting, in CSS-margin
     * syntax (e.g. "400px" or "0px 0px -100px 0px"). Bigger = earlier mount,
     * less chance of a visible pop-in; smaller = defers longer, less wasted work.
     */
    margin?: UseInViewOptions['margin'];
    className?: string;
}

/**
 * Defers mounting expensive children (physics sims, WebGL/canvas effects,
 * scroll-linked sliders, etc.) until the wrapping element scrolls near the
 * viewport. Combine with `next/dynamic(..., { ssr: false })` on the heavy
 * component itself so its JS chunk isn't even fetched until then either.
 *
 * Mounts once and stays mounted (no unmount-on-scroll-away) to avoid
 * re-triggering physics/animation setup repeatedly.
 */
export function LazyMount({ children, fallback = null, margin = '400px', className }: LazyMountProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin });

    return (
        <div ref={ref} className={className}>
            {isInView ? children : fallback}
        </div>
    );
}
