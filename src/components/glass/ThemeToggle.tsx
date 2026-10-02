import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="onoff-btn"
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      onClick={toggle}
    >
      <svg
        className="onoff-btn__icon"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        aria-hidden="true"
      >
        <g
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        >
          <polyline points="12,1 12,10" />
          <circle
            cx="12"
            cy="13"
            r="9"
            strokeDasharray="49.48 7.07"
            strokeDashoffset="10.6"
          />
        </g>
      </svg>
    </button>
  );
}