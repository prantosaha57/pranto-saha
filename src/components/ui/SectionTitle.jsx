export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <div className="font-playfair text-[1.75rem] font-bold text-navy mb-2.5 pb-3 relative inline-block max-[480px]:text-[1.4rem] tracking-[-0.01em]">
        {title}
        <div className="absolute bottom-0 left-0 h-[3px] rounded-full" style={{ width: '48px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))' }} />
      </div>
      {subtitle && <div className="text-[0.92rem] text-text-muted mb-7 font-dm">{subtitle}</div>}
    </div>
  );
}
