import { useState } from 'react';

interface Props {
  img?: string;
  emoji?: string;
  className?: string;
  alt?: string;
}

/**
 * Tries to load a generated image from /images/<img>.png. If the image key is
 * missing or the file 404s (not generated yet), it gracefully falls back to
 * showing the emoji instead - so the app works today and upgrades automatically
 * once real images are dropped into /public/images.
 */
export default function TechImage({ img, emoji, className = '', alt = '' }: Props) {
  const [failed, setFailed] = useState(false);

  if (!img || failed) {
    return <span className={className}>{emoji}</span>;
  }

  return (
    <img
      src={`/images/${img}.png`}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
