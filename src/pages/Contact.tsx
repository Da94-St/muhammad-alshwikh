import { usePageMeta } from '../hooks/usePageMeta';
import { Section } from '../components/layout/Section';
import { SocialRow } from '../components/social/SocialRow';
import { GlassPanel } from '../components/glass/GlassPanel';
import { profile } from '../data/profile';

export default function Contact() {
  usePageMeta({
    title: 'Contact',
    description: 'The fastest way to reach me is WhatsApp or email.',
  });

  const email = profile.email;
  const phone = profile.phone;
  const whatsapp = profile.links.whatsapp;
  const location = profile.location;

  return (
    <Section eyebrow="Contact" title="Let's talk">
      <p className="max-w-3xl text-xl leading-relaxed text-[var(--color-dim)]">
        The fastest way to reach me is{' '}
        <span className="text-[var(--color-ink)]">WhatsApp</span> or{' '}
        <span className="text-[var(--color-ink)]">email</span>. I reply to most
        messages within 24 hours.
      </p>

      <div className="mt-10">
        <SocialRow size="lg" />
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <GlassPanel>
          <div className="p-6">
            <p className="font-mono text-md uppercase tracking-widest text-[var(--color-dim)]">
              Email
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-2 block break-all text-xl text-[var(--color-ink)] hover:underline"
            >
              {email}
            </a>
          </div>
        </GlassPanel>

        <GlassPanel>
          <div className="p-6">
            <p className="font-mono text-md uppercase tracking-widest text-[var(--color-dim)]">
              Phone
            </p>
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="mt-2 block text-xl text-[var(--color-ink)] hover:underline"
            >
              {phone}
            </a>
          </div>
        </GlassPanel>

        <GlassPanel>
          <div className="p-6">
            <p className="font-mono text-md uppercase tracking-widest text-[var(--color-dim)]">
              WhatsApp
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-xl text-[var(--color-ink)] hover:underline"
            >
              Send a message ↗
            </a>
          </div>
        </GlassPanel>

        <GlassPanel>
          <div className="p-6">
            <p className="font-mono text-md uppercase tracking-widest text-[var(--color-dim)]">
              Location
            </p>
            <p className="mt-2 text-xl text-[var(--color-ink)]">{location}</p>
          </div>
        </GlassPanel>

        <GlassPanel>
          <div className="p-6">
            <p className="font-mono text-md uppercase tracking-widest text-[var(--color-dim)]">
              Response time
            </p>
            <p className="mt-2 text-xl text-[var(--color-ink)]">
              Usually under 24 hours
            </p>
          </div>
        </GlassPanel>
      </div>

      <p className="mt-12 max-w-3xl text-xl text-[var(--color-dim)]">
        Prefer a call? Send me your availability by email and we'll find a
        time.
      </p>
    </Section>
  );
}