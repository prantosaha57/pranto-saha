import Tag from './Tag';

const sourceColors = {
  linkedin: 'text-[#0a66c2] bg-[#0a66c2]/[0.06]',
  journal: 'text-gold bg-gold/[0.08]',
  medium: 'text-[#333] bg-[#333]/[0.06]',
  facebook: 'text-[#1877f2] bg-[#1877f2]/[0.06]',
};

export default function BlogCard({ post }) {
  return (
    <div className="bg-card-bg border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(10,22,40,0.1)] hover:-translate-y-[3px] hover:border-border/70 flex flex-col group">
      <div className="px-7 py-6 flex-1 max-[480px]:px-5 max-[480px]:py-5">
        <div className={`inline-block font-dm text-[0.75rem] font-bold uppercase tracking-[1.5px] mb-3 px-2.5 py-1 rounded-md ${sourceColors[post.source] || ''}`}>
          {post.sourceLabel}
        </div>
        <div className="font-playfair text-[1.15rem] font-bold text-navy mb-2.5 leading-[1.4] group-hover:text-accent transition-colors duration-200">{post.title}</div>
        <div className="text-[0.93rem] text-text-muted leading-[1.7] mb-4">{post.excerpt}</div>
        <div className="flex flex-wrap">
          {post.tags.map((tag, i) => <Tag key={i} label={tag} />)}
        </div>
      </div>
      <div className="flex justify-between items-center px-7 py-4 bg-surface/50 border-t border-border flex-wrap gap-2 max-[480px]:px-5">
        <span className="font-dm text-[0.8rem] text-text-muted">{post.date}</span>
        <a
          href={post.link}
          target={post.link.startsWith('http') ? '_blank' : undefined}
          rel={post.link.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="font-dm text-[0.82rem] font-bold text-accent no-underline px-4 py-1.5 border border-accent/30 rounded-lg transition-all duration-200 hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_4px_12px_rgba(59,130,246,0.2)]"
        >
          {post.linkLabel}
        </a>
      </div>
    </div>
  );
}
