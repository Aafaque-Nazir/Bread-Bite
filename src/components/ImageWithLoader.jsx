import React, { useState, useEffect, useRef } from 'react';

const FALLBACK_IMAGE = '/images/chicken-korma.webp';

/**
 * Bulletproof image component for Bread & Bite.
 * - Solves the React cached image bug where onLoad does not fire for memory-cached images.
 * - Never hides the img tag with opacity-0 (ensures zero disappearance on navigation/refresh).
 * - Implements graceful fallback to local WebP if an image fails to load.
 */
const ImageWithLoader = ({
    src,
    alt = 'Bread & Bite dish',
    className = '',
    priority = false
}) => {
    const [imgSrc, setImgSrc] = useState(src || FALLBACK_IMAGE);
    const [hasError, setHasError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef(null);

    // Keep source in sync if prop changes
    useEffect(() => {
        const nextSrc = src || FALLBACK_IMAGE;
        setImgSrc(nextSrc);
        setHasError(false);
        // If image is already complete in browser cache, mark loaded immediately
        if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
            setIsLoaded(true);
        }
    }, [src]);

    // Handle cached images upon initial mount or route change
    const handleRef = (node) => {
        imgRef.current = node;
        if (node && node.complete && node.naturalWidth > 0) {
            setIsLoaded(true);
        }
    };

    const handleError = () => {
        if (!hasError) {
            setHasError(true);
            setImgSrc(FALLBACK_IMAGE);
            setIsLoaded(true);
        }
    };

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div className={`relative overflow-hidden bg-[#F4EFE6] ${className}`}>
            {/* Subtle background placeholder (underneath image, never obscures) */}
            {!isLoaded && !hasError && (
                <div 
                    aria-hidden="true" 
                    className="absolute inset-0 bg-[#EAE4DC]/50 pointer-events-none transition-opacity duration-200" 
                />
            )}
            
            <img
                ref={handleRef}
                src={imgSrc}
                alt={alt}
                onLoad={handleLoad}
                onError={handleError}
                decoding="async"
                loading={priority ? 'eager' : 'lazy'}
                className="w-full h-full object-cover block"
            />
        </div>
    );
};

export default ImageWithLoader;
