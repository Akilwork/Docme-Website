// Loading Screen Configuration
// Change the import here to switch between loading screen styles

// Full-featured loading screen with animations and progress steps
export { default as LoadingScreen } from './LoadingScreen'

// Simple, minimal loading screen
// export { default as LoadingScreen } from './SimpleLoadingScreen'

// Loading screen settings
export const LOADING_CONFIG = {
  // Minimum loading time in milliseconds (for better UX)
  minLoadTime: 2000,
  
  // Whether to show loading screen on every page load or just first visit
  showOnEveryLoad: true,
  
  // Animation duration for transitions
  transitionDuration: 800,
}