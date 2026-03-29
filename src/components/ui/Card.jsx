export default function Card({ title, meta, org, children, borderColor, className = '', style }) {
  return (
    <div
      className={`bg-card-bg border border-border rounded-2xl px-7 py-6 mb-5 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(10,22,40,0.08)] hover:-translate-y-[2px] hover:border-border/80 max-[480px]:px-5 max-[480px]:py-5 max-[480px]:rounded-xl ${className}`}
      style={{
        ...(borderColor ? { borderLeft: `4px solid ${borderColor}`, borderRadius: '0 16px 16px 0' } : {}),
        ...style,
      }}
    >
      {(title || meta) && (
        <div className="flex justify-between items-start gap-3 mb-2.5 max-[600px]:flex-col max-[600px]:gap-1">
          {title && <div className="font-playfair text-[1.15rem] font-bold text-navy leading-[1.4]" dangerouslySetInnerHTML={{ __html: title }} />}
          {meta && <div className="font-dm text-[0.82rem] text-text-muted whitespace-nowrap pt-[3px] bg-surface px-2.5 py-0.5 rounded-md">{meta}</div>}
        </div>
      )}
      {org && <div className="font-dm text-[0.88rem] text-accent font-semibold mb-2" dangerouslySetInnerHTML={{ __html: org }} />}
      {children}
    </div>
  );
}
