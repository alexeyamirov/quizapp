/**
 * Utility function to get the correct image URL based on the environment
 * This ensures images work both locally and when deployed to GitHub Pages
 */
export const getImageUrl = (relativePath: string): string => {
  // If the path already includes the full URL or is an external URL, return it as is
  if (relativePath.startsWith('http') || relativePath.startsWith('https')) {
    return relativePath;
  }

  // Remove leading slash if present for consistency
  const cleanPath = relativePath.startsWith('/') ? relativePath.substring(1) : relativePath;
  
  // Check if we're in production and using GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  // Check if the URL path includes '/quizapp' (both for GitHub Pages and local with /quizapp)
  const hasQuizAppInPath = window.location.pathname.includes('/quizapp');
  
  // If on GitHub Pages or local with /quizapp in path, prepend '/quizapp/'
  if (isGitHubPages || hasQuizAppInPath) {
    return `/quizapp/${cleanPath}`;
  }
  
  // For standard local development without /quizapp in path
  return `/${cleanPath}`;
};