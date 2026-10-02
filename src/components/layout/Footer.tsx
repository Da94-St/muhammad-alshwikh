import { Link } from 'react-router-dom';
import { routes } from '../../lib/routes';
import { PhoenixMark } from '../icons/PhoenixMark';
import { SocialRow } from '../social/SocialRow';
import { profile } from '../../data/profile';

export function Footer() {
  const year = new Date().getFullYear();
  const email =
    profile.email === 'FILL_ME_IN' ? 'hello@example.com' : profile.email;
  const location =
    profile.location === 'FILL_ME_IN' ? 'Location TBD' : profile.location;

  return (
    <footer className="w-full border-t border-[var(--color-line)] bg-[var(--color-bg)]/70 backdrop-blur-md">
      <div className="mx-auto w-[90vw] py-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.8fr_1fr_1fr_1.5fr] md:gap-10">
          <div>
            <Link
              to={routes.home}
              className="group flex items-center gap-2.5"
              aria-label="Home"
            >
              <PhoenixMark
                size={52}
                alt=""
                className="transition-transform duration-300 group-hover:rotate-3"
              />
              <span className="nav-name">Muhammad Alshwikh</span>
            </Link>
            <p className="mt-4 max-w-md text-md leading-relaxed text-[var(--color-dim)]">
              Data, analytics, and cybersecurity. Freelance consultant building
              tools and dashboards that ship.
            </p>
            <p className="mt-3 font-mono text-md uppercase tracking-widest text-[var(--color-dim)]">
              {profile.availability === 'freelance'
                ? '● Available for freelance'
                : profile.availability === 'open'
                  ? '● Open to offers'
                  : '● Currently unavailable'}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-lg uppercase tracking-widest text-[var(--color-ink)]">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to={routes.home} className="footer-link">Home</Link>
              </li>
              <li>
                <Link to={routes.projects} className="footer-link">Projects</Link>
              </li>
              <li>
                <Link to={routes.about} className="footer-link">About</Link>
              </li>
              <li>
                <Link to={routes.contact} className="footer-link">Contact</Link>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Resume ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-lg uppercase tracking-widest text-[var(--color-ink)]">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li><span className="footer-static">Data Analysis</span></li>
              <li><span className="footer-static">AI &amp; Machine Learning</span></li>
              <li><span className="footer-static">Cybersecurity</span></li>
              <li><span className="footer-static">Analytics Engineering</span></li>
              <li><span className="footer-static">Freelance Consulting</span></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-lg uppercase tracking-widest text-[var(--color-ink)]">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href={`mailto:${email}`} className="footer-link">
                  {email}
                </a>
              </li>
              <li>
                <span className="footer-static">{location}</span>
              </li>
              <li>
                <span className="footer-static">Response time: ~24h</span>
              </li>
            </ul>
            <div className="mt-4">
              <SocialRow size="sm" nowrap />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex w-[90vw] flex-col items-start justify-between gap-2 py-5 text-md text-[var(--color-dim)] sm:flex-row sm:items-center">
          <p>© {year} Muhammad Alshwikh. All rights reserved.</p>
          <p className="font-mono text-md">Built with React, Vite, Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}