import React, { useState, useEffect } from 'react';

const FALLBACK_IMAGE = '/images/chicken-korma.webp';

const ImageWithLoader = ({ src, alt, className = '' }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        setHasError(false);
    }, [src]);

    return (
        <div className={`relative overflow-hidden bg-[#F4EFE6] ${className}`}>
            {!isLoaded && !hasError && (
                <div className="absolute inset-0 bg-[#EAE4DC]/60 z-0" />
            )}
            <img
                src={hasError ? FALLBACK_IMAGE : src}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                onError={() => {
                    setHasError(true);
                    setIsLoaded(true);
                }}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
            />
        </div>
    );
};

export default ImageWithLoader;
