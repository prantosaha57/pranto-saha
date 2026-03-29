export default function CertificateCard({ cert, onClick }) {
  return (
    <div
      className="bg-card-bg border border-border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-[0_12px_40px_rgba(10,22,40,0.1)] hover:-translate-y-[3px] hover:border-border/70 group"
      onClick={onClick}
    >
      <div
        className="h-[140px] flex items-center justify-center text-[3rem] relative overflow-hidden"
        style={{ background: cert.thumbGradient || 'linear-gradient(135deg, #0a1628 0%, #1a3a6e 100%)' }}
      >
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
        <div className="relative transition-transform duration-300 group-hover:scale-110">
          {cert.icon}
        </div>
      </div>
      <div className="px-5 py-5">
        <div className="font-dm text-[0.92rem] font-bold text-navy mb-1.5 leading-tight group-hover:text-accent transition-colors duration-200">{cert.title}</div>
        <div className="text-[0.82rem] text-text-muted font-dm">{cert.issuer}</div>
        <div className="text-[0.78rem] font-bold mt-2 font-dm gradient-text inline-block">{cert.year}</div>
      </div>
    </div>
  );
}
