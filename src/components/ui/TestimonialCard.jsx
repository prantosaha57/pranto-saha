export default function TestimonialCard({ text, name, role, initials, avatarBg }) {
  return (
    <div className="bg-card-bg border border-border rounded-2xl px-7 py-7 mb-5 relative transition-all duration-300 hover:shadow-[0_8px_30px_rgba(10,22,40,0.06)] max-[480px]:px-5 max-[480px]:py-5">
      {/* Decorative quote mark */}
      <div className="text-[4rem] leading-none font-playfair mb-1 gradient-text select-none" style={{ opacity: 0.6 }}>&ldquo;</div>
      <div className="text-[1.02rem] text-text-primary leading-[1.85] italic mb-6">{text}</div>
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center font-dm font-bold text-white text-[0.95rem] shrink-0 shadow-[0_4px_12px_rgba(10,22,40,0.1)]"
          style={{ background: avatarBg || 'linear-gradient(135deg, var(--color-navy), var(--color-blue))' }}
        >
          {initials}
        </div>
        <div>
          <div className="font-dm font-bold text-[0.95rem] text-navy">{name}</div>
          <div className="font-dm text-[0.82rem] text-text-muted">{role}</div>
        </div>
      </div>
    </div>
  );
}
