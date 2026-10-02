import { useNavigate } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { Section } from '../components/layout/Section';
import { GlassPanel } from '../components/glass/GlassPanel';
import { GlassButton } from '../components/glass/GlassButton';
import { GlassToggle } from '../components/glass/GlassToggle';
import { SocialRow } from '../components/social/SocialRow';
import { Timeline } from '../components/portfolio/Timeline';
import { LanguagePips } from '../components/portfolio/LanguagePips';
import { profile } from '../data/profile';
import { routes } from '../lib/routes';

function downloadResume() {
  const a = document.createElement('a');
  a.href = profile.resumePath;
  a.download = 'Muhammad_Alshwikh_CV.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function About() {
  const navigate = useNavigate();
  usePageMeta({ title: 'About', description: profile.bio });

  const availabilityLabel =
    profile.availability === 'freelance'
      ? 'Available for freelance work'
      : profile.availability === 'open'
        ? 'Open to new opportunities'
        : 'Currently unavailable';

  return (
    <>
      <Section eyebrow="About" title="A short version">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <img
            src="/mine.png"
            alt={profile.name}
            width={180}
            height={180}
            className="hero-portrait mx-auto md:mx-0"
          />
          <div>
            <p className="text-lg leading-relaxed text-[var(--color-dim)]">
              {profile.bio}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-dim)]">
              Based in {profile.location}.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <GlassButton tone="warm" onClick={downloadResume}>
                Download résumé
              </GlassButton>
              <GlassButton onClick={() => navigate(routes.contact)}>
                Get in touch
              </GlassButton>
            </div>

            <div className="mt-8">
              <SocialRow size="md" />
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Availability" title="Current status">
        <GlassPanel variant="hi">
          <div className="flex flex-wrap items-center justify-between gap-6 p-6">
            <div>
              <p className="text-lg font-medium text-[var(--color-ink)]">
                {availabilityLabel}
              </p>
              <p className="mt-1 text-sm text-[var(--color-dim)]">
                Response time is usually under 24 hours.
              </p>
            </div>
            <div className="pointer-events-none">
              <GlassToggle
                label="Availability indicator"
                checked={profile.availability !== 'closed'}
                onChange={() => undefined}
              />
            </div>
          </div>
        </GlassPanel>
      </Section>

      <Section eyebrow="Experience" title="Career timeline">
        <Timeline entries={profile.timeline} />
      </Section>

      <Section eyebrow="Languages" title="What I speak">
        <GlassPanel>
          <div className="p-6">
            <LanguagePips languages={profile.languages} />
          </div>
        </GlassPanel>
      </Section>

      <Section eyebrow="Contact" title="One more thing">
        <div className="flex flex-wrap items-center gap-4">
          <GlassButton tone="crimson" onClick={() => navigate(routes.contact)}>
            All ways to reach me
          </GlassButton>
        </div>
      </Section>
    </>
  );
}