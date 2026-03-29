import Tag from './Tag';

export default function Timeline({ items }) {
  return (
    <div className="relative pl-8">
      {/* Gradient line */}
      <div className="absolute left-[9px] top-2 bottom-2 w-[2px] rounded-full" style={{ background: 'linear-gradient(180deg, var(--color-gold), var(--color-border))' }} />
      {items.map((item, i) => (
        <div key={i} className="relative mb-9">
          {/* Animated dot */}
          <div className="absolute -left-8 top-[8px] w-[18px] h-[18px] rounded-full bg-card-bg border-[3px] border-gold flex items-center justify-center">
            <div className="w-[6px] h-[6px] rounded-full bg-gold" />
          </div>
          <div className="font-dm text-[0.78rem] font-semibold text-text-muted uppercase tracking-[1px] mb-1.5 bg-surface inline-block px-2.5 py-0.5 rounded-md">{item.date}</div>
          <div className="font-playfair text-[1.1rem] font-bold text-navy mb-1 leading-[1.4]" dangerouslySetInnerHTML={{ __html: item.title }} />
          {item.org && <div className="font-dm text-[0.88rem] text-accent font-semibold mb-1.5" dangerouslySetInnerHTML={{ __html: item.org }} />}
          {item.description && <div className="text-[0.95rem] text-text-muted leading-[1.7]" dangerouslySetInnerHTML={{ __html: item.description }} />}
          {item.tags && item.tags.length > 0 && (
            <div className="mt-3">
              {item.tags.map((tag, j) => (
                <Tag key={j} label={typeof tag === 'string' ? tag : tag.label} variant={typeof tag === 'string' ? '' : tag.variant} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
