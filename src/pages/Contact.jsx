import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import ContactLinkBox from '../components/ui/ContactLinkBox';
import contactData from '../data/contact.json';

export default function Contact() {
  return (
    <>
      <HeroSection
        label="Contact"
        title="Get in Touch"
        description="Open to research collaborations, PhD inquiries, academic discussions, and teaching opportunities."
      />

      <div className="px-16 pt-14 pb-16 max-w-[960px] max-[900px]:px-8 max-[900px]:pt-10 max-[900px]:pb-12 max-[480px]:px-5 max-[480px]:pt-7 max-[480px]:pb-10">
        {/* PhD Banner */}
        <div className="relative rounded-2xl px-10 py-10 mb-12 text-white overflow-hidden fade-in-up max-[480px]:px-6 max-[480px]:py-7"
          style={{ background: 'linear-gradient(135deg, #0a1628 0%, #132240 40%, #1a3a6e 100%)' }}
        >
          <div className="absolute -right-[40px] -top-[40px] w-[200px] h-[200px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.1) 0%, transparent 70%)' }}
          />
          <div className="relative z-10">
            <div className="font-dm text-[0.78rem] font-bold uppercase tracking-[2.5px] text-gold/90 mb-3">PhD Opportunities</div>
            <div className="font-playfair text-[1.5rem] font-bold mb-3 max-[480px]:text-[1.25rem]">Seeking PhD Supervision</div>
            <p className="text-[1rem] text-white/65 mb-6 leading-[1.8] font-dm max-w-[580px]">I am actively seeking PhD opportunities in <strong className="text-white/90">AI, Machine Learning, Medical Image Analysis, or NLP</strong>. If you are a potential supervisor or know of openings, I would love to connect.</p>
            <a href="mailto:saha15-4157@diu.edu.bd?subject=PhD%20Opportunity" className="bg-gradient-to-r from-gold to-gold-light text-navy font-dm text-[0.9rem] font-bold px-7 py-3.5 rounded-xl no-underline inline-block hover:shadow-[0_8px_24px_rgba(212,168,67,0.3)] transition-all duration-300 hover:-translate-y-[1px]">Email Me About PhD</a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="fade-in-up fade-in-up-delay-1">
          <SectionTitle title="Contact Details" />
          {contactData.details.map((d, i) => (
            <ContactLinkBox key={i} icon={d.icon} label={d.label} value={d.value} href={d.href} />
          ))}
        </div>

        {/* Online Profiles */}
        <div className="mt-12 fade-in-up fade-in-up-delay-2">
          <SectionTitle title="Online Profiles" />
          {contactData.profiles.map((p, i) => (
            <ContactLinkBox key={i} icon={p.icon} label={p.label} value={p.value} href={p.href} />
          ))}
        </div>

        {/* Open For */}
        <div className="mt-12 fade-in-up fade-in-up-delay-3">
          <SectionTitle title="Open For" />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {contactData.openFor.map((item, i) => (
              <div key={i} className="bg-card-bg border border-border rounded-2xl px-5 py-7 text-center transition-all duration-300 hover:shadow-[0_8px_24px_rgba(10,22,40,0.07)] hover:-translate-y-[2px] group">
                <div className="text-[1.5rem] mb-3 w-12 h-12 rounded-xl bg-surface flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <div className="font-dm text-[0.95rem] font-bold text-navy group-hover:text-accent transition-colors duration-200">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
