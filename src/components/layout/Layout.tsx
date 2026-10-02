import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SiteBackground } from './SiteBackground';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export function Layout() {
  useScrollToTop();
  return (
    <>
      <SiteBackground />
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}