import React, { useState } from 'react';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop';

const ImageWithLoader = ({ src, alt, className = '' }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

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
