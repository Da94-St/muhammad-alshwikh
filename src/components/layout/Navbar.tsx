import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { routes, navItems } from '../../lib/routes';
import { PhoenixMark } from '../icons/PhoenixMark';
import { ThemeToggle } from '../glass/ThemeToggle';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const handleNavClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-line)] bg-[var(--color-bg)]/70 backdrop-blur-md">
      <nav className="mx-auto flex w-[96vw] items-center gap-10 py-3">
        <Link
          to={routes.home}
          className="group flex shrink-0 items-center gap-1.5"
          aria-label="Home"
          onClick={handleNavClick}
        >
          <PhoenixMark
            size={46}
            alt=""
            className="transition-transform duration-300 group-hover:rotate-3"
          />
          <span className="nav-name hidden sm:inline">Muhammad Alshwikh</span>
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === routes.home}
                className="glass-pill"
                onClick={handleNavClick}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="glass-icon-btn md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="w-full border-t border-[var(--color-line)] md:hidden">
          <ul className="mx-auto flex w-[96vw] flex-col gap-2 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  end={item.href === routes.home}
                  className="glass-pill w-full justify-center"
                  onClick={handleNavClick}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}