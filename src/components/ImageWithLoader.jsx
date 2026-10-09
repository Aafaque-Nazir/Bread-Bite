import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop';

const ImageWithLoader = ({ src, alt, className = '' }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {!isLoaded && !hasError && (
                <div className="absolute inset-0 bg-stone-200/60 animate-pulse z-0" />
            )}
            <motion.img
                src={hasError ? FALLBACK_IMAGE : src}
                alt={alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded || hasError ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                onLoad={() => setIsLoaded(true)}
                onError={() => {
                    setHasError(true);
                    setIsLoaded(true);
                }}
                loading="lazy"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default ImageWithLoader;
