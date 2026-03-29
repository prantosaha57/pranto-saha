export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-navy/60 z-[9999] flex items-center justify-center p-6 backdrop-blur-md max-[480px]:p-3"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl max-w-[740px] w-full max-h-[85vh] overflow-y-auto shadow-[0_24px_80px_rgba(10,22,40,0.25),0_0_0_1px_rgba(255,255,255,0.1)] animate-modal-in">
        <div className="flex justify-between items-start px-8 pt-7 pb-4 border-b border-border gap-4 max-[480px]:px-5">
          <div className="font-playfair text-[1.2rem] font-bold text-navy leading-[1.4]">{title}</div>
          <button onClick={onClose} className="bg-surface border-none text-[1.2rem] cursor-pointer text-text-muted leading-none w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-border hover:text-navy shrink-0">
            &#x2715;
          </button>
        </div>
        <div className="px-8 pt-5 pb-8 text-[1rem] leading-[1.8] text-text-primary [&_p]:mb-3.5 [&_strong]:text-navy max-[480px]:px-5">
          {children}
        </div>
      </div>
    </div>
  );
}
