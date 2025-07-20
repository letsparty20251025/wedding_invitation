# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a wedding invitation website built with Hugo using the "hugo-story" theme. It's a single-page responsive site designed to showcase wedding details through banners, spotlights, gallery, and informational sections.

## Development Commands

### Local Development
- `hugo server` - Start local development server (http://localhost:1313/)
- `hugo server -D` - Include draft content
- `hugo server --bind=0.0.0.0` - Bind to all interfaces

### Build Commands
- `hugo` - Build the site for production (outputs to `public/`)
- `hugo --minify` - Build with minification
- `hugo -e production` - Build using production config

### Environment-Specific Builds
- `hugo -e development` - Use development config
- `hugo -e production` - Use production config

## Architecture

### Site Structure
- **Content**: Managed through YAML data files in `/data/` directory
  - `banner.yml` - Hero/banner section configuration
  - `gallery.yml` - Photo gallery settings and images
  - `items.yml` - Information sections/cards
  - `spotlight1.yml`, `spotlight2.yml`, `spotlight3.yml` - Featured content sections

### Layout System
- **Main Layout**: `layouts/index.html` defines the page structure using Hugo partials
- **Partials**: Located in `layouts/partials/` - modular components for different sections
  - `banner.html`, `spotlight.html`, `gallery.html`, `items.html`, etc.
- **Base Template**: `layouts/_default/baseof.html` provides the HTML foundation

### Configuration
- **Multi-environment**: Separate configs in `config/` folder for development/production
- **Theme**: Uses hugo-story theme with customizations in root `layouts/` folder
- **Assets**: Static files in `static/` directory, theme assets in `themes/hugo-story/`

### Content Management
- No traditional markdown content - everything configured via YAML data files
- Images stored in `static/images/` with separate `gallery/fulls/` and `gallery/thumbs/` folders
- Favicon and web manifest files included for PWA features

### Theme Integration
- Theme files can be overridden by placing equivalent files in root `layouts/` directory
- SASS compilation handled by Hugo Pipes (requires Hugo Extended)
- FontAwesome icons included via theme assets

## Key Development Notes

- Requires Hugo Extended version for SASS/SCSS compilation
- Site uses relative URLs by default for local development
- Built files go to `public/` directory which is included in git
- Theme is fully integrated (not a git submodule) for easier customization