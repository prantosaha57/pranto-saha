export default function AwardItem({ icon, title, detail }) {
  return (
    <div className="flex gap-4 items-start px-6 py-5 bg-card-bg border border-border rounded-2xl mb-4 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(10,22,40,0.06)] hover:-translate-y-[1px] max-[480px]:px-4 max-[480px]:py-4">
      <div className="text-[1.6rem] w-12 h-12 rounded-xl bg-gold/[0.08] flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <div className="font-bold font-playfair text-navy text-[1.05rem] mb-1 leading-[1.4]" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="text-[0.9rem] text-text-muted font-dm leading-[1.65]" dangerouslySetInnerHTML={{ __html: detail }} />
      </div>
    </div>
  );
}
