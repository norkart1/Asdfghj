# Sibaq-22 Project

## Overview
This is a Next.js application for Sibaq-22, the national art fest of DHIU (Darul Huda Islamic University). The project is a responsive website showcasing the festival with event information, downloads, news, and registration features.

## Project Architecture
- **Framework**: Next.js 12.2.5
- **Frontend**: React 18.2.0 with Redux Toolkit for state management
- **Styling**: SASS modules with responsive design
- **Images**: Next.js Image optimization
- **UI Components**: Custom components with SVG icons, Swiper carousel
- **Port**: Configured to run on port 5000 for Replit environment

## Setup Completed
- ✅ Dependencies installed via npm
- ✅ Next.js configured for Replit proxy environment (allows all hosts)
- ✅ Package.json scripts updated to bind to 0.0.0.0:5000
- ✅ Frontend workflow configured and running
- ✅ Deployment configuration set for production (autoscale)
- ✅ Cache control headers added for proper refresh behavior

## Current State
- Frontend server running successfully on port 5000
- Application accessible via Replit preview
- Some development warnings present (hydration mismatches) but not blocking functionality

## Recent Changes (Sep 19, 2025)
- Configured Next.js for Replit environment
- Set up proper host binding and port configuration
- Added cache control headers
- Configured deployment settings

## File Structure
- `pages/` - Next.js pages (home, auth, news, etc.)
- `components/` - Reusable React components
- `styles/` - SASS module styles
- `public/assets/` - Static assets (images, downloads, SVGs)
- `api/` - API utility classes
- `helpers/` - Helper functions and data