import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import Timeline from '../components/ui/Timeline';
import Tag from '../components/ui/Tag';
import teaching from '../data/teaching.json';

export default function Teaching() {
  return (
    <>
      <HeroSection
        label="Teaching"
        title="Teaching"
        description="Dedicated to making complex CS and AI concepts accessible — from classrooms to YouTube."
      />

      <div className="px-16 pt-14 pb-16 max-w-[1400px] mx-auto max-[900px]:px-8 max-[900px]:pt-10 max-[900px]:pb-12 max-[480px]:px-5 max-[480px]:pt-7 max-[480px]:pb-10">
        {/* Teaching Philosophy */}
        <div className="fade-in-up">
          <SectionTitle title="Teaching Philosophy" />
          <div className="bio-section mb-12">
            {teaching.philosophy.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>

        {/* Academic Positions */}
        <div className="fade-in-up fade-in-up-delay-1">
          <SectionTitle title="Academic Positions" subtitle="Teaching and instructional experience" />
          <div className="mb-12">
            <Timeline items={teaching.positions} />
          </div>
        </div>

        {/* Subjects Taught */}
        <div className="fade-in-up fade-in-up-delay-2">
          <SectionTitle title="Subjects Taught" />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 mb-12">
            {teaching.subjects.map((subj, i) => (
              <div key={i} className="bg-card-bg border border-border rounded-2xl px-6 py-6 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(10,22,40,0.07)] hover:-translate-y-[2px] group">
                <div className="font-playfair text-[1rem] font-bold text-navy mb-2 group-hover:text-accent transition-colors duration-200">{subj.title}</div>
                <div className="text-[0.88rem] text-text-muted leading-[1.7]">{subj.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Content */}
        <div className="fade-in-up fade-in-up-delay-3">
          <SectionTitle title="Educational Content" />
          <div className="bg-card-bg border border-border rounded-r-2xl px-7 py-7 mb-5 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(10,22,40,0.08)] hover:-translate-y-[1px] max-[480px]:px-5" style={{ borderLeft: '4px solid #ef4444', borderRadius: '0 16px 16px 0' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="font-playfair text-[1.15rem] font-bold text-navy">
                {teaching.youtube.title} — <a href={teaching.youtube.url} target="_blank" rel="noopener noreferrer" className="text-accent no-underline hover:underline">YouTube Channel</a>
              </div>
            </div>
            <div className="text-[0.95rem] text-text-muted leading-[1.7]" dangerouslySetInnerHTML={{ __html: teaching.youtube.description }} />
            <div className="mt-4">
              {teaching.youtube.tags.map((t, i) => <Tag key={i} label={t} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
