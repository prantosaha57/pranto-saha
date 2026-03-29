const variants = {
  '': 'bg-accent/[0.07] text-accent border-accent/20',
  gold: 'bg-[#fdf5e6] text-[#96690a] border-[#f0d89a]',
  green: 'bg-[#ecfdf5] text-[#166534] border-[#a7f3d0]',
  red: 'bg-[#fef2f2] text-[#991b1b] border-[#fecaca]',
};

export default function Tag({ label, variant = '' }) {
  return (
    <span className={`inline-block font-dm text-[0.78rem] font-semibold px-3 py-[5px] rounded-lg border mr-1.5 mb-1.5 transition-colors duration-200 ${variants[variant] || variants['']}`}>
      {label}
    </span>
  );
}
