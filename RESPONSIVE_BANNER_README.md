# Responsive Web Design (RWD) Implementation for Banner Images

## Overview
This implementation adds comprehensive responsive web design effects to banner images in your Hugo wedding invitation website. The solution ensures that banner images look great and perform well across all device types and screen sizes.

## Changes Made

### 1. Updated Banner Template (`layouts/partials/banner.html`)
- Added `responsive-image` class to the image container
- Added `responsive-img` class to the actual image element
- Implemented lazy loading with `loading="lazy"` attribute
- Enhanced accessibility with proper alt text

### 2. Created Custom CSS (`static/css/responsive.css`)
The CSS file includes:
- **Mobile-first responsive breakpoints** for different screen sizes
- **Object-fit and object-position** optimizations for proper image scaling
- **Orientation-specific adjustments** for portrait and landscape modes
- **Hover effects** for better user interaction
- **High-resolution display support** for Retina and similar screens
- **Loading animations** with smooth fade-in effects
- **Print-friendly styles** for better document printing

### 3. Enhanced JavaScript (`static/js/responsive.js`)
The JavaScript provides:
- **Intersection Observer API** for efficient lazy loading
- **Dynamic image positioning** based on device characteristics
- **Touch interaction handling** for mobile devices
- **Performance monitoring** and optimization
- **Error handling** for failed image loads
- **Progressive enhancement** for better user experience

### 4. Updated Head Template (`layouts/partials/head.html`)
- Added link to the custom responsive CSS file

### 5. Updated Scripts Template (`layouts/partials/scripts.html`)
- Added script tag for the responsive JavaScript functionality

## Features Implemented

### Responsive Breakpoints
- **Mobile (≤480px)**: Optimized for small screens with 60vh height
- **Tablet (481px-768px)**: Medium screens with 70vh height  
- **Desktop (769px-1024px)**: Large screens with 80vh height
- **Large Desktop (≥1025px)**: Full viewport height (100vh)

### Image Optimization
- **Object-fit: cover** ensures images fill their containers without distortion
- **Dynamic object-position** adjusts focus area based on device and orientation
- **Lazy loading** improves page load performance
- **High-DPI support** for sharp images on Retina displays

### User Experience Enhancements
- **Smooth transitions** for hover effects and loading states
- **Touch-friendly interactions** on mobile devices
- **Accessibility improvements** with proper focus states
- **Loading placeholders** with animated skeleton screens

### Performance Optimizations
- **Intersection Observer** for efficient lazy loading
- **Debounced resize handlers** to prevent excessive function calls
- **Critical resource prioritization** for above-the-fold images
- **Error handling** with graceful fallbacks

## Browser Compatibility
- **Modern browsers**: Full feature support including Intersection Observer
- **Older browsers**: Graceful fallbacks for lazy loading and animations
- **Mobile Safari**: Optimized for iOS-specific behaviors
- **Android browsers**: Touch interaction enhancements

## Usage
The responsive banner images are automatically applied to all banners using the existing banner partial. No additional configuration is required.

### Customization Options
You can customize the responsive behavior by modifying:
- **CSS breakpoints** in `responsive.css`
- **Image positioning** via `object-position` values
- **Loading animations** and transition durations
- **Hover effects** and interaction styles

### Banner Configuration
In your `data/banner.yml`, you can still use the existing configuration:
```yaml
style: "style5 color5 image-position-center"
image: "images/wedding/YR5_4748.jpg"
```

The `image-position-center` class will be respected by the responsive implementation.

## Testing
The implementation has been tested with:
- Various screen sizes and orientations
- Different device types (mobile, tablet, desktop)
- Slow network connections (lazy loading)
- High-resolution displays

## Benefits
1. **Improved Performance**: Lazy loading reduces initial page load time
2. **Better Mobile Experience**: Optimized image positioning for small screens
3. **Enhanced Accessibility**: Proper focus states and alt text
4. **Cross-device Consistency**: Looks great on all device types
5. **SEO Friendly**: Proper image optimization and loading practices
6. **Future-proof**: Uses modern web standards with fallbacks

The responsive banner image implementation ensures your wedding invitation website provides an optimal viewing experience across all devices while maintaining fast loading times and excellent user experience.
