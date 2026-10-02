import type { Language } from '../../data/types';

interface LanguagePipsProps {
  languages: Language[];
}

export function LanguagePips({ languages }: LanguagePipsProps) {
  if (languages.length === 0) return null;
  return (
    <ul className="space-y-4">
      {languages.map((lang) => (
        <li key={lang.name} className="flex items-center justify-between gap-6">
          <div>
            <p className="font-medium text-[var(--color-ink)]">{lang.name}</p>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-dim)]">
              {lang.level}
            </p>
          </div>
          <div className="flex items-center gap-1.5" aria-label={`${lang.fluency} of 5`}>
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                aria-hidden="true"
                className={
                  i <= lang.fluency ? 'lang-pip lang-pip--on' : 'lang-pip'
                }
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}