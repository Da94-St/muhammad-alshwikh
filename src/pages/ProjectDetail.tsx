import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProjectMedia } from '../hooks/useProjectMedia';
import { Container } from '../components/layout/Container';
import { GlassButton } from '../components/glass/GlassButton';
import { ProjectHero } from '../components/portfolio/ProjectHero';
import { MediaSlideshow } from '../components/portfolio/MediaSlideshow';
import { LiveDemoEmbed } from '../components/portfolio/LiveDemoEmbed';
import NotFound from './NotFound';
import {
  getProjectBySlug,
  getAdjacentProjects,
} from '../data/projects';
import { routes } from '../lib/routes';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const media = useProjectMedia(
    project ?? {
      slug: '',
      title: '',
      tagline: '',
      description: '',
      year: 0,
      status: 'archived',
      category: 'experiment',
      tags: [],
      stack: [],
      thumbnail: '',
    },
  );

  usePageMeta({
    title: project?.title ?? 'Not found',
    description: project?.tagline,
  });

  if (!project) return <NotFound />;

  const { prev, next } = getAdjacentProjects(project.slug);
  const hasEmbed = Boolean(project.liveEmbed && project.embedUrl);

  return (
    <article>
      <ProjectHero project={project} />

      <Container className="py-16 md:py-20">
        <div className="space-y-12">
          {media.images.length > 0 && (
            <MediaSlideshow images={media.images} loading={media.loading} />
          )}

          <div className="prose-invert max-w-2xl space-y-4 text-[var(--color-dim)] [&_a]:text-[var(--color-accent)] [&_a]:underline [&_code]:rounded [&_code]:bg-[var(--color-glass)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[var(--color-ink)] [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[var(--color-ink)] [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-[var(--color-line)] [&_pre]:bg-[var(--color-bg-2)] [&_pre]:p-4 [&_ul]:space-y-1">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {project.description}
            </ReactMarkdown>
          </div>

          {project.metrics && Object.keys(project.metrics).length > 0 && (
            <div>
              <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-dim)]">
                At a glance
              </h2>
              <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {Object.entries(project.metrics).map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-lg border border-[var(--color-line)] bg-[var(--color-glass)] p-4"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-dim)]">
                      {k}
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-[var(--color-ink)]">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {hasEmbed && project.embedUrl && (
            <div>
              <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-dim)]">
                Live demo
              </h2>
              <LiveDemoEmbed url={project.embedUrl} title={project.title} />
            </div>
          )}

          <nav className="flex flex-col gap-4 border-t border-[var(--color-line)] pt-8 sm:flex-row sm:items-center sm:justify-between">
            {prev ? (
              <Link
                to={routes.projectDetail(prev.slug)}
                className="text-sm text-[var(--color-dim)] hover:text-[var(--color-ink)]"
              >
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to={routes.projectDetail(next.slug)}
                className="text-sm text-[var(--color-dim)] hover:text-[var(--color-ink)] sm:text-right"
              >
                {next.title} →
              </Link>
            ) : (
              <span />
            )}
          </nav>

          <div>
            <GlassButton onClick={() => navigate(routes.projects)}>
              All projects
            </GlassButton>
          </div>
        </div>
      </Container>
    </article>
  );
}