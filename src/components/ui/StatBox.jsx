export default function StatBox({ value, label }) {
  return (
    <div className="relative rounded-2xl px-6 py-7 flex-1 min-w-[140px] text-center overflow-hidden transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(10,22,40,0.15)] max-[480px]:min-w-[100px] max-[480px]:px-4 max-[480px]:py-5"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a3a6e 100%)' }}
    >
      <div className="absolute top-0 right-0 w-[60px] h-[60px] rounded-full bg-gold/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="relative">
        <div className="font-playfair text-[2.6rem] font-bold leading-none mb-2 gradient-text max-[480px]:text-[1.9rem]">{value}</div>
        <div className="font-dm text-[0.75rem] font-semibold uppercase tracking-[1px] text-white/50">{label}</div>
      </div>
    </div>
  );
}
