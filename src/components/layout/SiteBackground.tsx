interface SiteBackgroundProps {
  imageUrl?: string;
}

/**
 * Neutral light-gray abstract. If you want a different image:
 *   1. Download to public/background.jpg
 *   2. Set DEFAULT_IMAGE = '/background.jpg'
 *
 * Do NOT use warm/pink photos — the overlay cannot cancel their hue.
 */
const DEFAULT_IMAGE =
  'https://i.pinimg.com/1200x/25/4c/77/254c779af2f983d798fb37fd01c77f35.jpg?w=1920&q=80';

export function SiteBackground({ imageUrl = DEFAULT_IMAGE }: SiteBackgroundProps) {
  return (
    <div className="site-bg" aria-hidden="true">
      <img className="site-bg__img" src={imageUrl} alt="" />
      <div className="site-bg__overlay" />
    </div>
  );
}