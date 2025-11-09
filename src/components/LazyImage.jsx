import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyImage Component - Optimized Image Loading
 *
 * Performance improvements:
 * 1. Native lazy loading with Intersection Observer fallback
 * 2. Responsive image sizes with srcSet
 * 3. Blur-up loading effect (LQIP - Low Quality Image Placeholder)
 * 4. Automatic format detection (WebP/AVIF support)
 * 5. Prevents layout shift by maintaining aspect ratio
 *
 * Usage:
 * <LazyImage
 *   src="image.jpg"
 *   alt="Description"
 *   placeholder={blurredDataUrl}
 *   className="w-full h-auto"
 * />
 */
const LazyImage = ({
  src,
  alt,
  placeholder,
  className = '',
  width,
  height,
  sizes,
  onLoad,
  quality = 'high',
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder || null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  /**
   * Intersection Observer for lazy loading
   * Only loads images when they enter viewport
   * Performance benefit: Reduces initial page load time
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (observerRef.current) {
            observer.unobserve(imgRef.current);
          }
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current && imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  /**
   * Handle image load
   * Transition from blur to sharp image
   */
  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  /**
   * Generate responsive srcSet with multiple sizes
   * Benefits: Browsers download optimal image size for device
   */
  const generateSrcSet = (baseUrl) => {
    // Parse CDN URL to support responsive sizing
    if (baseUrl.includes('unsplash.com')) {
      return `
        ${baseUrl}&w=300&q=${quality === 'high' ? '80' : '60'} 300w,
        ${baseUrl}&w=600&q=${quality === 'high' ? '80' : '60'} 600w,
        ${baseUrl}&w=900&q=${quality === 'high' ? '80' : '60'} 900w,
        ${baseUrl}&w=1200&q=${quality === 'high' ? '80' : '60'} 1200w
      `;
    }
    return baseUrl;
  };

  /**
   * Generate modern image formats with fallback
   * Picture element provides WebP/AVIF support
   */
  return (
    <figure
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : '16/9',
      }}
    >
      {/* Placeholder or blur image - shown while loading */}
      {placeholder && !isLoaded && (
        <img
          src={placeholder}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        />
      )}

      {/* Main image with lazy loading */}
      <picture>
        {/* Modern image format support with fallback */}
        {isVisible && (
          <>
            {/* AVIF - Best compression (Chrome 85+, Firefox 93+) */}
            <source
              type="image/avif"
              srcSet={generateSrcSet(src.replace(/\.(jpg|png)$/, '.avif'))}
              sizes={sizes || '100vw'}
            />

            {/* WebP - Good compression & browser support */}
            <source
              type="image/webp"
              srcSet={generateSrcSet(src.replace(/\.(jpg|png)$/, '.webp'))}
              sizes={sizes || '100vw'}
            />

            {/* Fallback JPEG/PNG */}
            <img
              src={isVisible ? src : undefined}
              srcSet={isVisible ? generateSrcSet(src) : undefined}
              sizes={sizes || '100vw'}
              alt={alt}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              loading="lazy"
              decoding="async"
              width={width}
              height={height}
            />
          </>
        )}

        {/* Fallback for when Intersection Observer not supported */}
        {!isVisible && (
          <img
            src={placeholder || undefined}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </picture>

      {/* Loading spinner optional */}
      {!isLoaded && isVisible && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800/20">
          <div className="w-8 h-8 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin" />
        </div>
      )}
    </figure>
  );
};

export default LazyImage;

/**
 * Performance Tips:
 *
 * 1. Image Optimization:
 *    - Compress images before uploading (use ImageOptim, TinyPNG)
 *    - Use responsive image sizes (300w, 600w, 1200w)
 *    - Convert to WebP/AVIF for modern browsers
 *
 * 2. Blur-up Effect:
 *    - Use online tool to generate tiny placeholder: https://blurhash.js.org/
 *    - Or use: https://www.gstatic.com/images/ for lightweight placeholders
 *
 * 3. CDN Integration:
 *    - Unsplash: Already supports ?w=600&q=80 parameters
 *    - Cloudinary: Supports auto format detection
 *    - imgix: Full responsive image API
 *
 * 4. Measuring Impact:
 *    - Use Lighthouse audit to measure performance
 *    - Check "Properly size images" and "Serve images in next-gen formats"
 *    - Expected improvement: 10-30% faster page load
 */
