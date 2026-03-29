import Tag from './Tag';

const statusStyles = {
  published: 'bg-[#ecfdf5] text-[#166534]',
  review: 'bg-[#fef9ec] text-[#92640a]',
  submitted: 'bg-accent/[0.07] text-accent',
};

const borderColors = {
  gold: 'var(--color-gold)',
  accent: 'var(--color-accent)',
};

export default function PublicationItem({ pub, onAbstractClick }) {
  return (
    <div
      className="px-7 py-6 bg-card-bg border border-border rounded-r-2xl mb-5 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(10,22,40,0.08)] hover:-translate-y-[1px] max-[480px]:px-5 max-[480px]:py-5"
      style={{ borderLeft: `4px solid ${borderColors[pub.borderColor] || borderColors.accent}`, borderRadius: '0 16px 16px 0' }}
    >
      <div className="flex justify-between items-start gap-3 flex-wrap mb-2.5">
        <span className={`inline-flex items-center gap-[5px] font-dm text-[0.78rem] font-semibold px-3 py-1 rounded-lg ${statusStyles[pub.status]}`}>
          {pub.statusLabel}
        </span>
        <span className="font-dm text-[0.8rem] text-text-muted bg-surface px-2.5 py-0.5 rounded-md">{pub.date}</span>
      </div>
      <div className="font-playfair text-[1.12rem] font-bold text-navy mb-2 leading-[1.4]">{pub.title}</div>
      <div className="text-[0.92rem] text-text-muted mb-1.5 italic" dangerouslySetInnerHTML={{ __html: pub.authors }} />
      <div className="font-dm text-[0.88rem] text-accent font-semibold mb-3">
        {pub.venueLink ? (
          <a href={pub.venueLink} target="_blank" rel="noopener noreferrer" className="text-accent no-underline hover:underline">{pub.venue}</a>
        ) : pub.venue}
        {pub.venueFullName && ` ${pub.venueFullName}`}
      </div>
      <div className="flex gap-2.5 mt-3 flex-wrap">
        <button
          onClick={() => onAbstractClick(pub)}
          className="font-dm text-[0.82rem] font-bold px-4 py-2 bg-navy text-white border-none rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue hover:shadow-[0_4px_12px_rgba(10,22,40,0.2)]"
        >
          Abstract
        </button>
        {pub.doi && (
          <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="font-dm text-[0.82rem] font-semibold text-accent no-underline px-4 py-2 border border-accent/30 rounded-lg transition-all duration-200 hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_4px_12px_rgba(59,130,246,0.2)]">
            DOI &rarr;
          </a>
        )}
        {pub.tags.map((tag, i) => (
          <Tag key={i} label={tag} variant={pub.tagVariants?.[i] || ''} />
        ))}
      </div>
    </div>
  );
}
