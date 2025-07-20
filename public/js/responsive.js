// Responsive Web Design enhancements for banner images
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initResponsiveImages);
    } else {
        initResponsiveImages();
    }
    
    function initResponsiveImages() {
        // Handle lazy loading for responsive images
        const lazyImages = document.querySelectorAll('.banner .image.responsive-image .responsive-img[loading="lazy"]');
        
        if (lazyImages.length > 0) {
            // Use Intersection Observer for better performance
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.addEventListener('load', function() {
                                img.classList.add('loaded');
                            });
                            observer.unobserve(img);
                        }
                    });
                }, {
                    rootMargin: '50px 0px',
                    threshold: 0.1
                });
                
                lazyImages.forEach(function(img) {
                    imageObserver.observe(img);
                });
            } else {
                // Fallback for older browsers
                lazyImages.forEach(function(img) {
                    img.addEventListener('load', function() {
                        img.classList.add('loaded');
                    });
                    // Force loading for browsers without Intersection Observer
                    if (img.src) {
                        img.classList.add('loaded');
                    }
                });
            }
        }
        
        // Handle responsive image positioning based on device orientation and screen size
        function updateImagePositioning() {
            const bannerImages = document.querySelectorAll('.banner .image.responsive-image .responsive-img');
            
            bannerImages.forEach(function(img) {
                const banner = img.closest('.banner');
                const isPortrait = window.innerHeight > window.innerWidth;
                const isMobile = window.innerWidth <= 768;
                const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
                
                // Remove any previously applied dynamic styles
                img.style.objectPosition = '';
                
                // Apply responsive positioning
                if (isMobile) {
                    if (isPortrait) {
                        // Mobile portrait: focus on upper portion of image
                        if (banner.classList.contains('image-position-center')) {
                            img.style.objectPosition = 'center 20%';
                        }
                    } else {
                        // Mobile landscape: center the image
                        img.style.objectPosition = 'center center';
                    }
                } else if (isTablet && isPortrait) {
                    // Tablet portrait: slight upper focus
                    img.style.objectPosition = 'center 30%';
                } else {
                    // Desktop and tablet landscape: center positioning
                    img.style.objectPosition = 'center center';
                }
            });
        }
        
        // Update positioning on load, resize, and orientation change
        updateImagePositioning();
        window.addEventListener('resize', debounce(updateImagePositioning, 250));
        window.addEventListener('orientationchange', function() {
            setTimeout(updateImagePositioning, 100);
        });
        
        // Preload critical banner images for better performance
        const criticalImages = document.querySelectorAll('.banner .image.responsive-image .responsive-img');
        if (criticalImages.length > 0) {
            const firstImage = criticalImages[0];
            if (firstImage.loading === 'lazy') {
                firstImage.loading = 'eager';
            }
        }
        
        // Enhanced image quality detection
        enhanceImageQuality();
        
        // Handle touch gestures on mobile for better user experience
        if ('ontouchstart' in window) {
            handleTouchInteractions();
        }
    }
    
    // Debounce function to improve performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = function() {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Progressive image enhancement
    function enhanceImageQuality() {
        const images = document.querySelectorAll('.banner .image.responsive-image .responsive-img');
        
        images.forEach(function(img) {
            if (img.complete && img.naturalHeight !== 0) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', function() {
                    img.classList.add('loaded');
                    // Remove loading placeholder
                    const container = img.closest('.responsive-image');
                    if (container) {
                        container.classList.add('loaded');
                    }
                });
                
                img.addEventListener('error', function() {
                    console.warn('Failed to load banner image:', img.src);
                    // Add error styling instead of hiding
                    img.style.backgroundColor = '#f0f0f0';
                    img.alt = 'Image failed to load';
                });
            }
        });
    }
    
    // Handle touch interactions for mobile devices
    function handleTouchInteractions() {
        const bannerImages = document.querySelectorAll('.banner .image.responsive-image');
        
        bannerImages.forEach(function(imageContainer) {
            let startY = 0;
            let startTime = 0;
            
            imageContainer.addEventListener('touchstart', function(e) {
                startY = e.touches[0].clientY;
                startTime = Date.now();
            }, { passive: true });
            
            imageContainer.addEventListener('touchmove', function(e) {
                // Prevent rubber band effect on iOS
                const currentY = e.touches[0].clientY;
                const deltaY = currentY - startY;
                const timeDiff = Date.now() - startTime;
                
                // If scrolling is happening too fast, don't prevent default
                if (Math.abs(deltaY) > 10 && timeDiff < 300) {
                    return;
                }
            }, { passive: true });
        });
    }
    
    // Initialize image quality enhancement immediately
    enhanceImageQuality();
    
    // Performance monitoring
    if (window.performance && window.performance.mark) {
        window.performance.mark('responsive-images-init-start');
        
        window.addEventListener('load', function() {
            window.performance.mark('responsive-images-init-end');
            window.performance.measure('responsive-images-init', 'responsive-images-init-start', 'responsive-images-init-end');
        });
    }
    
})();
