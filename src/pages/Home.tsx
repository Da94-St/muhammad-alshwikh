import { useNavigate } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { Section } from '../components/layout/Section';
import { FeaturedFrame } from '../components/glass/FeaturedFrame';
import { GlassButton } from '../components/glass/GlassButton';
import { Chip } from '../components/ui/Chip';
import { VectorBoundingBox } from '../components/glass/VectorBoundingBox';
import { ProjectSlideshow } from '../components/portfolio/ProjectSlideshow';
import { getFeaturedProject, getRecentProjects } from '../data/projects';
import { profile } from '../data/profile';
import { routes } from '../lib/routes';

const TITLES = [
  'AI Data Analyst',
  'Machine Learning Specialist',
  'Full-Stack Developer',
  'Cybersecurity (in progress)',
  'Freelance Consultant',
];

export default function Home() {
  const navigate = useNavigate();
  usePageMeta({ title: profile.name, description: profile.bio });

  const featured = getFeaturedProject();
  const slideshow = getRecentProjects(4);

  const locationLabel =
    profile.location === 'FILL_ME_IN' ? 'Location TBD' : profile.location;

  return (
    <>
      <section className="relative border-b border-[var(--color-line)]">
        <div className="mx-auto w-[90vw] py-14 md:py-20">
          <div className="grid items-center gap-12 md:grid-cols-[auto_1fr]">
            <div className="mx-auto md:mx-0">
              <img
                src="/mine.png"
                alt={profile.name}
                width={240}
                height={240}
                className="hero-portrait"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="mb-3 font-mono text-sm uppercase tracking-widest text-[var(--color-dim)]">
                {profile.nickname} · {profile.handle}
              </p>

              <h1 className="hero-name">{profile.name}</h1>

              <p className="mt-6 max-w-xl text-xl text-[var(--color-dim)]">
                {profile.role}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <GlassButton
                  tone="crimson"
                  onClick={() => navigate(routes.projects)}
                >
                  View projects
                </GlassButton>
                <GlassButton onClick={() => navigate(routes.contact)}>
                  Get in touch
                </GlassButton>
              </div>
            </div>
          </div>

          <div className="mt-14 flex w-full justify-center">
            <div className="w-full max-w-[680px]">
              <VectorBoundingBox
                size="large"
                label={profile.name}
                hoverLabel={
                  <span className="vbb-titles">
                    {TITLES.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </span>
                }
                hint1="Hover to reveal titles"
                hint2="Click to get in touch"
                focusLabel="Press Enter to get in touch"
                onClick={() => navigate(routes.contact)}
              />
            </div>
          </div>
        </div>
      </section>

      {featured && (
        <Section eyebrow="Featured" title="Selected work">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-[var(--color-dim)]">
                {featured.category} · {featured.year}
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-dim)]">
                {featured.tagline}
              </p>
              {featured.stack.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {featured.stack.map((s) => (
                    <li key={s}>
                      <Chip>{s}</Chip>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex justify-start md:justify-end">
              <FeaturedFrame
                label="Open case study"
                hoverLabel="View full project"
                focusLabel="Press Enter to open"
                onClick={() => navigate(routes.projectDetail(featured.slug))}
              />
            </div>
          </div>
        </Section>
      )}

      {slideshow.length > 0 && (
        <Section eyebrow="Recent" title="More projects">
          <ProjectSlideshow projects={slideshow} />
          <div className="mt-8">
            <GlassButton tone="accent" onClick={() => navigate(routes.projects)}>
              All projects
            </GlassButton>
          </div>
        </Section>
      )}

      <Section eyebrow="About" title="A short version">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-dim)]">
            Based in {locationLabel}. {profile.bio} Currently available for{' '}
            <span className="text-[var(--color-ink)]">
              {profile.availability}
            </span>{' '}
            work.
          </p>
          <GlassButton tone="warm" onClick={() => navigate(routes.about)}>
            Read more
          </GlassButton>
        </div>
      </Section>
    </>
  );
}