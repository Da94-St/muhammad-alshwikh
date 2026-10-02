import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { PhoenixMark } from '../components/icons/PhoenixMark';
import { routes } from '../lib/routes';

export default function NotFound() {
  return (
    <Container size="narrow" className="py-24 md:py-32">
      <div className="flex flex-col items-center text-center">
        <div className="opacity-40">
          <PhoenixMark size={96} alt="" />
        </div>
        <p className="mt-8 font-mono text-xs uppercase tracking-widest text-[var(--color-dim)]">
          404
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
          This page does not exist.
        </h1>
        <p className="mt-3 max-w-sm text-sm text-[var(--color-dim)]">
          The link may be broken, or the page may have moved.
        </p>
        <Link
          to={routes.home}
          className="mt-8 text-sm text-[var(--color-accent)] hover:underline"
        >
          ← Back home
        </Link>
      </div>
    </Container>
  );
}