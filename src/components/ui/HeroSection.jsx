export default function HeroSection({ label, title, description, children, className = '' }) {
  return (
    <div className={`relative text-white px-16 pt-18 pb-16 overflow-hidden max-[900px]:px-8 max-[900px]:pt-12 max-[900px]:pb-10 max-[480px]:px-5 max-[480px]:pt-8 max-[480px]:pb-7 ${className}`}
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #132240 40%, #1a3a6e 100%)' }}
    >
      {/* Decorative floating orbs */}
      <div className="absolute -right-[80px] -top-[80px] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', animation: 'float 8s ease-in-out infinite' }}
      />
      <div className="absolute -left-[40px] bottom-[-60px] w-[250px] h-[250px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)', animation: 'floatReverse 10s ease-in-out infinite' }}
      />
      <div className="absolute right-[20%] top-[30%] w-[8px] h-[8px] rounded-full bg-gold/30 pointer-events-none"
        style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
      />
      <div className="absolute left-[15%] bottom-[25%] w-[5px] h-[5px] rounded-full bg-accent/25 pointer-events-none"
        style={{ animation: 'pulse-glow 4s ease-in-out infinite 1s' }}
      />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />

      <div className="relative z-10 fade-in-up">
        {label && (
          <div className="font-dm text-[0.78rem] font-semibold uppercase tracking-[3px] text-gold/90 mb-4">{label}</div>
        )}
        <h1 className="font-playfair text-[3.2rem] font-bold leading-[1.1] mb-4 tracking-[-0.02em] max-[900px]:text-[2.3rem] max-[480px]:text-[1.85rem]">{title}</h1>
        {description && (
          <p className="text-[1.1rem] text-white/60 max-w-[600px] leading-[1.75] font-dm font-light max-[480px]:text-base">{description}</p>
        )}
        {children}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
