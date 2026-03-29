import HeroSection from '../components/ui/HeroSection';
import StatBox from '../components/ui/StatBox';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import PublicationItem from '../components/ui/PublicationItem';
import Modal from '../components/ui/Modal';
import { useModal } from '../hooks/useModal';
import stats from '../data/stats.json';
import publications from '../data/publications.json';
import research from '../data/research.json';

export default function Research() {
  const modal = useModal();

  return (
    <>
      <HeroSection
        label="Research & Publications"
        title="Research"
        description="Medical image analysis, deep learning, NLP, and precision agriculture — building AI solutions that matter."
      />

      <div className="px-16 pt-14 pb-16 max-w-[960px] max-[900px]:px-8 max-[900px]:pt-10 max-[900px]:pb-12 max-[480px]:px-5 max-[480px]:pt-7 max-[480px]:pb-10">
        {/* Stats */}
        <div className="flex gap-4 mb-12 flex-wrap fade-in-up">
          {stats.research.map((s, i) => <StatBox key={i} value={s.value} label={s.label} />)}
        </div>

        {/* Research Areas */}
        <div className="fade-in-up fade-in-up-delay-1">
          <SectionTitle title="Research Areas" subtitle="Current focus domains" />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 mb-12">
            {research.areas.map((area, i) => (
              <div key={i} className="bg-card-bg border border-border rounded-2xl px-6 py-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(10,22,40,0.08)] hover:-translate-y-[2px] group max-[480px]:px-4 max-[480px]:py-4" style={{ borderTop: `3px solid ${area.borderColor}` }}>
                <div className="text-[1.6rem] mb-3 w-12 h-12 rounded-xl bg-surface flex items-center justify-center group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
                <div className="font-playfair text-[1.02rem] font-bold text-navy mb-1.5 group-hover:text-accent transition-colors duration-200">{area.title}</div>
                <div className="text-[0.88rem] text-text-muted leading-[1.7]">{area.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="fade-in-up fade-in-up-delay-2">
          <SectionTitle title="Publications" subtitle='Click "Abstract" on any paper to read the full abstract' />
          {publications.map((pub) => (
            <PublicationItem key={pub.id} pub={pub} onAbstractClick={(p) => modal.open(p)} />
          ))}
        </div>

        {/* Projects */}
        <div className="mt-12 fade-in-up fade-in-up-delay-3">
          <SectionTitle title="Selected Projects" subtitle="Machine learning, computer vision & software engineering" />
          {research.projects.map((proj, i) => (
            <Card key={i}>
              <div className="flex justify-between items-start gap-3 mb-2 max-[600px]:flex-col max-[600px]:gap-1.5">
                <div className="font-playfair text-[1.15rem] font-bold text-navy leading-[1.4]">{proj.title}</div>
                <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="font-dm text-[0.82rem] font-semibold text-accent no-underline px-4 py-1.5 border border-accent/30 rounded-lg transition-all duration-200 hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_4px_12px_rgba(59,130,246,0.2)]">GitHub &rarr;</a>
              </div>
              <div className="text-[0.95rem] text-text-muted leading-[1.7]" dangerouslySetInnerHTML={{ __html: proj.description }} />
              <div className="mt-3">
                {proj.tags.map((t, j) => <Tag key={j} label={t} />)}
              </div>
            </Card>
          ))}
        </div>

        {/* Thesis */}
        <div className="mt-12 fade-in-up fade-in-up-delay-4">
          <SectionTitle title="Undergraduate Thesis" />
          <Card borderColor="var(--color-gold)">
            <div className="flex justify-between items-start gap-3 mb-2.5 max-[600px]:flex-col max-[600px]:gap-1.5">
              <div className="font-playfair text-[1.15rem] font-bold text-navy leading-[1.4]">{research.thesis.title}</div>
              <div className="font-dm text-[0.82rem] text-text-muted whitespace-nowrap bg-surface px-2.5 py-0.5 rounded-md">{research.thesis.status}</div>
            </div>
            <div className="font-dm text-[0.88rem] text-accent font-semibold mb-2">
              Supervisor: <a href={`mailto:${research.thesis.supervisorEmail}`} className="text-accent">{research.thesis.supervisor}</a>, {research.thesis.supervisorTitle}, <a href="https://daffodilvarsity.edu.bd/" target="_blank" rel="noopener noreferrer" className="text-accent">DIU</a>
            </div>
            <div className="text-[0.95rem] text-text-muted leading-[1.7]" dangerouslySetInnerHTML={{ __html: research.thesis.description }} />
            <div className="mt-3">
              {research.thesis.tags.map((t, j) => <Tag key={j} label={t.label} variant={t.variant} />)}
            </div>
          </Card>
        </div>
      </div>

      {/* Abstract Modal */}
      <Modal isOpen={modal.isOpen} onClose={modal.close} title={modal.content?.title || ''}>
        <div className="font-dm text-[0.78rem] font-bold uppercase tracking-[1.5px] text-text-muted mb-3">Abstract</div>
        <div dangerouslySetInnerHTML={{ __html: modal.content?.abstract || '' }} />
      </Modal>
    </>
  );
}
