import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top on every route change. Uses both documentElement and body
 * so it works whether the scroll container is <html> or <body>.
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    html.scrollTop = 0;
    document.body.scrollTop = 0;
    html.style.scrollBehavior = prev;
  }, [pathname]);
}