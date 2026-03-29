import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/HeroSection';
import StatBox from '../components/ui/StatBox';
import SectionTitle from '../components/ui/SectionTitle';
import Tag from '../components/ui/Tag';
import stats from '../data/stats.json';
import news from '../data/news.json';
import contactData from '../data/contact.json';

const badgeStyles = {
  pub: 'bg-[#ecfdf5] text-[#166534]',
  award: 'bg-[#fef9ec] text-[#92640a]',
  position: 'bg-accent/[0.07] text-accent',
  event: 'bg-[#f5f3ff] text-[#6d28d9]',
};

const researchInterests = [
  'Medical Image Processing', 'Semi-Supervised Learning', 'Computer Vision',
  'Deep Learning', 'NLP (Bengali)', 'Object Detection', 'Multi-Object Tracking',
  'Precision Agriculture', 'Explainable AI', 'LLMs / VLMs',
];


export default function Home() {
  return (
    <>
      <HeroSection label="About Me" title="Pranto Saha" className="pb-18">
        <div className="flex items-center gap-5 mb-4 flex-wrap">
          <div>
            <p className="text-[1.15rem] text-white/90 mb-2 font-semibold not-italic font-dm max-[480px]:text-base">Lecturer &middot; Researcher &middot; MSc Student &middot; PhD Aspirant</p>
            <p className="mb-1.5 text-white/55 text-[1rem] max-[480px]:text-[0.95rem] font-dm">
              Lecturer (Contractual), Dept. of Software Engineering &middot;{' '}
              <a href="https://daffodilvarsity.edu.bd/" target="_blank" rel="noopener noreferrer" className="text-gold no-underline font-semibold hover:text-gold-light transition-colors">Daffodil International University</a>
            </p>
            <p className="text-white/55 text-[1rem] max-[480px]:text-[0.95rem] font-dm">
              Researcher &middot;{' '}
              <a href="https://hirl.daffodilvarsity.edu.bd/" target="_blank" rel="noopener noreferrer" className="text-gold no-underline font-semibold hover:text-gold-light transition-colors">Health Informatics Research Lab (HIRL)</a>
            </p>
          </div>
        </div>
        <div className="mt-8 flex gap-3.5 flex-wrap">
          <Link to="/research" className="bg-gradient-to-r from-gold to-gold-light text-navy font-dm text-[0.92rem] font-bold px-7 py-3.5 rounded-xl no-underline hover:shadow-[0_8px_24px_rgba(212,168,67,0.3)] transition-all duration-300 hover:-translate-y-[1px]">View Research &rarr;</Link>
          <Link to="/contact" className="bg-white/[0.08] text-white font-dm text-[0.92rem] font-semibold px-7 py-3.5 rounded-xl no-underline border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">Get in Touch</Link>
        </div>
      </HeroSection>

      <div className="px-16 pt-14 pb-16 max-w-[1400px] mx-auto max-[900px]:px-8 max-[900px]:pt-10 max-[900px]:pb-12 max-[480px]:px-5 max-[480px]:pt-7 max-[480px]:pb-10">
        {/* Stats */}
        <div className="flex gap-4 mb-12 flex-wrap fade-in-up">
          {stats.home.map((s, i) => <StatBox key={i} value={s.value} label={s.label} />)}
        </div>

        {/* Bio */}
        <div className="bio-section fade-in-up fade-in-up-delay-1">
          <p>I am <strong>Pranto Saha</strong>, a Lecturer (Contractual) in the Department of Software Engineering at <a href="https://daffodilvarsity.edu.bd/" target="_blank" rel="noopener noreferrer">Daffodil International University</a>, Dhaka, Bangladesh, and an active researcher at the <a href="https://hirl.daffodilvarsity.edu.bd/" target="_blank" rel="noopener noreferrer">Health Informatics Research Lab (HIRL)</a>. My work sits at the intersection of deep learning, computer vision, and biomedical data analysis.</p>
          <p>My research focuses on <strong>semi-supervised learning</strong>, <strong>chest X-ray classification</strong>, <strong>NLP for Bengali</strong>, and <strong>precision agriculture</strong>. I am passionate about making AI accessible — particularly in low-resource languages and underserved healthcare settings.</p>
          <p>I completed my <strong>BSc in Computer Science &amp; Engineering</strong> at <a href="https://daffodilvarsity.edu.bd/" target="_blank" rel="noopener noreferrer">DIU</a> in 2025 with a CGPA of <strong>3.94/4.00 — 4th Rank</strong> in the program. My undergraduate thesis focused on a Hybrid Deep Learning Framework for Multi-Class Chest X-Ray Classification using Self-Supervised Learning, supervised by <a href="mailto:zahid.cse@diu.edu.bd">Dr. Md Zahid Hasan</a>. I am now pursuing my <strong>MSc in CSE (Major: Data Science)</strong> at the same institution.</p>
          <p>Beyond research, I am the <strong>CEO &amp; Co-Founder of Q-Bit Learning</strong> and <strong>Vice President (R&amp;J Wing)</strong> of <a href="https://www.facebook.com/diucpc" target="_blank" rel="noopener noreferrer">DIU Computer &amp; Programming Club</a>. I also create Bengali-language <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">educational content on YouTube</a> to make Python, algorithms, and ML accessible to beginners.</p>
          <p>I am actively seeking <strong>PhD opportunities</strong> in AI, machine learning, and biomedical informatics. My goal is to contribute to impactful research addressing real-world challenges in healthcare and language technology.</p>
        </div>

        {/* Research Interests */}
        <div className="fade-in-up fade-in-up-delay-2">
          <SectionTitle title="Research Interests" />
          <div className="mb-12">
            {researchInterests.map((r, i) => <Tag key={i} label={r} />)}
          </div>
        </div>

        {/* Recent News */}
        <div className="fade-in-up fade-in-up-delay-3">
          <SectionTitle title="Recent News" subtitle="Latest updates, milestones & achievements" />
          <div className="bg-card-bg border border-border rounded-2xl px-7 py-2 mb-12 max-[480px]:px-4">
            {news.map((item, i) => (
              <div key={i} className={`flex gap-5 py-5 max-[480px]:flex-col max-[480px]:gap-2 ${i < news.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="shrink-0 w-[100px] font-dm text-[0.78rem] font-bold text-text-muted uppercase tracking-[0.5px] pt-1 max-[480px]:w-auto">{item.date}</div>
                <div>
                  <span className={`inline-block font-dm text-[0.73rem] font-bold px-2.5 py-[3px] rounded-md mb-2 ${badgeStyles[item.badgeType] || ''}`}>
                    {item.badgeLabel}
                  </span>
                  <div className="font-bold text-[1rem] text-navy mb-1 leading-[1.4]">{item.title}</div>
                  <div className="text-[0.92rem] text-text-muted leading-[1.65]" dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Profiles */}
        <div className="fade-in-up fade-in-up-delay-4">
          <SectionTitle title="Contact & Profiles" />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4 mb-8">
            {contactData.homeContact.map((item, i) => (
              <div key={i} className="flex items-start gap-3.5 px-5 py-5 bg-card-bg border border-border rounded-2xl transition-all duration-300 hover:shadow-[0_8px_24px_rgba(10,22,40,0.06)] hover:-translate-y-[1px]">
                <div className="text-[1.3rem] w-10 h-10 rounded-xl bg-surface flex items-center justify-center shrink-0" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <div>
                  <div className="font-dm text-[0.75rem] font-bold uppercase tracking-[0.8px] text-text-muted mb-1">{item.label}</div>
                  <div className="text-[0.93rem] text-text-primary font-medium">
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-accent no-underline hover:underline">{item.value}</a>
                    ) : item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
