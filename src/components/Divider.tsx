export default function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden>
      <span className="gold-rule w-16 sm:w-28" />
      <svg width="18" height="18" viewBox="0 0 24 24" className="text-gold shrink-0">
        <path
          fill="currentColor"
          d="M12 2c.6 2.8 1.9 4.6 4.6 5.4-2.7.8-4 2.6-4.6 5.4-.6-2.8-1.9-4.6-4.6-5.4C10.1 6.6 11.4 4.8 12 2Zm7.5 9c.3 1.5 1 2.4 2.5 2.9-1.5.5-2.2 1.4-2.5 2.9-.3-1.5-1-2.4-2.5-2.9 1.5-.5 2.2-1.4 2.5-2.9ZM4.5 11c.3 1.5 1 2.4 2.5 2.9-1.5.5-2.2 1.4-2.5 2.9-.3-1.5-1-2.4-2.5-2.9 1.5-.5 2.2-1.4 2.5-2.9Z"
        />
      </svg>
      <span className="gold-rule w-16 sm:w-28" />
    </div>
  );
}
