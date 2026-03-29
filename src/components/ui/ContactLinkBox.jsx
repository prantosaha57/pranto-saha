export default function ContactLinkBox({ icon, label, value, href }) {
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href ? {
    href,
    target: href.startsWith('http') ? '_blank' : undefined,
    rel: href.startsWith('http') ? 'noopener noreferrer' : undefined,
  } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="flex items-center gap-5 px-6 py-5 bg-card-bg border border-border rounded-2xl mb-4 no-underline text-text-primary transition-all duration-300 hover:shadow-[0_8px_24px_rgba(10,22,40,0.07)] hover:border-accent/30 hover:-translate-y-[1px] group max-[480px]:px-4 max-[480px]:py-4"
      style={!href ? { cursor: 'default' } : {}}
    >
      <div className="text-[1.5rem] w-11 h-11 rounded-xl bg-surface flex items-center justify-center transition-colors duration-200 group-hover:bg-accent/[0.07]" dangerouslySetInnerHTML={{ __html: icon }} />
      <div>
        <div className="font-dm text-[0.78rem] font-bold uppercase tracking-[0.8px] text-text-muted mb-0.5">{label}</div>
        <div className="text-[0.98rem] text-accent font-medium" dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </Wrapper>
  );
}
