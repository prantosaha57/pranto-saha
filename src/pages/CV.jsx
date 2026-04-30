import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import Timeline from '../components/ui/Timeline';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import education from '../data/education.json';
import experience from '../data/experience.json';
import skills from '../data/skills.json';

export default function CV() {
  return (
    <>
      <HeroSection label="Curriculum Vitae" title="CV / R&eacute;sum&eacute;" description="Full academic and professional record — education, experience, skills, and certifications.">
        <div className="mt-7">
          <a href="/Pranto CV.pdf" download className="bg-gradient-to-r from-gold to-gold-light text-navy font-dm text-[0.92rem] font-bold px-7 py-3.5 rounded-xl no-underline inline-block hover:shadow-[0_8px_24px_rgba(212,168,67,0.3)] transition-all duration-300 hover:-translate-y-[1px]">Download Full CV (PDF)</a>
        </div>
      </HeroSection>

      <div className="px-16 pt-14 pb-16 max-w-[1400px] mx-auto max-[900px]:px-8 max-[900px]:pt-10 max-[900px]:pb-12 max-[480px]:px-5 max-[480px]:pt-7 max-[480px]:pb-10">
        {/* Education */}
        <div className="fade-in-up">
          <SectionTitle title="Education" />
          <div className="mb-12">
            <Timeline items={education} />
          </div>
        </div>

        {/* Experience */}
        <div className="fade-in-up fade-in-up-delay-1">
          <SectionTitle title="Professional Experience" />
          <div className="mb-12">
            <Timeline items={experience} />
          </div>
        </div>

        {/* Skills */}
        <div className="fade-in-up fade-in-up-delay-2">
          <SectionTitle title="Skills" />
          <div className="mb-12">
            {skills.map((group, i) => (
              <div key={i} className="mb-8">
                <div className="font-dm text-[0.82rem] font-bold uppercase tracking-[1.5px] text-text-muted mb-3">{group.title}</div>
                {group.tags.map((t, j) => <Tag key={j} label={t.label} variant={t.variant} />)}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="fade-in-up fade-in-up-delay-3">
          <SectionTitle title="Certifications" />
          <Card>
            <div className="font-playfair text-[1.15rem] font-bold text-navy leading-[1.4]">Deep Learning with Computer Vision</div>
            <div className="font-dm text-[0.88rem] text-accent font-semibold">Innovative Skills</div>
          </Card>
          <Card>
            <div className="font-playfair text-[1.15rem] font-bold text-navy leading-[1.4]">
              <a href="https://www.coursera.org/specializations/machine-learning-introduction" target="_blank" rel="noopener noreferrer" className="text-accent no-underline hover:underline">Machine Learning — Advanced Learning Algorithms</a>
            </div>
            <div className="font-dm text-[0.88rem] text-accent font-semibold">
              <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer" className="text-accent no-underline hover:underline">Coursera</a> — Machine Learning Specialization by <a href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer" className="text-accent no-underline hover:underline">Stanford University</a>
            </div>
          </Card>
        </div>

        {/* References */}
        <div className="mt-12 fade-in-up fade-in-up-delay-4">
          <SectionTitle title="References" />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            <Card>
              <div className="font-playfair text-[1.15rem] font-bold text-navy">Prof. Dr. Bimal Chandra Das</div>
              <div className="font-dm text-[0.88rem] text-accent font-semibold mb-2">Associate Dean, FSIT <br />Dept. of ITM &middot; <a href="https://daffodilvarsity.edu.bd/" target="_blank" rel="noopener noreferrer" className="text-accent no-underline hover:underline">DIU</a></div>
              <div className="text-[0.95rem] text-text-muted"><a href="mailto:bcdas@daffodilvarsity.edu.bd" className="text-accent no-underline hover:underline">bcdas@daffodilvarsity.edu.bd</a></div>
            </Card>
            <Card>
              <div className="font-playfair text-[1.15rem] font-bold text-navy">Dr. Md. Zahid Hasan</div>
              <div className="font-dm text-[0.88rem] text-accent font-semibold mb-2">Associate Professor &amp; Lab Director <br />Dept. of CSE &middot; <a href="https://daffodilvarsity.edu.bd/" target="_blank" rel="noopener noreferrer" className="text-accent no-underline hover:underline">DIU</a></div>
              <div className="text-[0.95rem] text-text-muted"><a href="mailto:zahid.cse@diu.edu.bd" className="text-accent no-underline hover:underline">zahid.cse@diu.edu.bd</a></div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
