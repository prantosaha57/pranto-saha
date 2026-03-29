import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import AwardItem from '../components/ui/AwardItem';
import CertificateCard from '../components/ui/CertificateCard';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import Modal from '../components/ui/Modal';
import { useModal } from '../hooks/useModal';
import awards from '../data/awards.json';
import certificates from '../data/certificates.json';
import contactData from '../data/contact.json';

export default function Achievements() {
  const modal = useModal();

  return (
    <>
      <HeroSection
        label="Achievements & News"
        title="Achievements"
        description="Awards, honors, certifications, conference participation, and recent news."
      />

      <div className="px-16 pt-14 pb-16 max-w-[1400px] mx-auto max-[900px]:px-8 max-[900px]:pt-10 max-[900px]:pb-12 max-[480px]:px-5 max-[480px]:pt-7 max-[480px]:pb-10">
        {/* Awards */}
        <div className="fade-in-up">
          <SectionTitle title="Awards & Honors" subtitle="Academic excellence and recognition" />
          {awards.map((a, i) => <AwardItem key={i} icon={a.icon} title={a.title} detail={a.detail} />)}
        </div>

        {/* Certificates */}
        <div className="mt-14 fade-in-up fade-in-up-delay-1">
          <SectionTitle title="Certificates & Credentials" subtitle="Click any certificate to view details" />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 mb-12">
            {certificates.map((cert, i) => (
              <CertificateCard key={i} cert={cert} onClick={() => modal.open(cert)} />
            ))}
          </div>
        </div>

        {/* Conferences */}
        <div className="fade-in-up fade-in-up-delay-2">
          <SectionTitle title="Conferences & Events" />
          {contactData.conferences.map((conf, i) => (
            <Card key={i} title={conf.title} meta={conf.meta} org={conf.org}>
              {conf.body && <div className="text-[0.95rem] text-text-muted leading-[1.7]">{conf.body}</div>}
              {conf.tags?.length > 0 && (
                <div className="mt-2.5">
                  {conf.tags.map((t, j) => <Tag key={j} label={t.label} variant={t.variant} />)}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Leadership */}
        <div className="mt-12 fade-in-up fade-in-up-delay-3">
          <SectionTitle title="Leadership & Contest Roles" />
          {contactData.leadership.map((item, i) => (
            <Card key={i} title={item.title} meta={item.meta} org={item.org}>
              {item.body && <div className="text-[0.95rem] text-text-muted leading-[1.7]">{item.body}</div>}
            </Card>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <Modal isOpen={modal.isOpen} onClose={modal.close} title={modal.content?.title || 'Certificate'}>
        <div className="text-center">
          <div className="text-[4.5rem] mb-5">{modal.content?.icon}</div>
          <div className="font-playfair text-[1.3rem] font-bold text-navy mb-2">{modal.content?.title}</div>
          <div className="font-dm text-[0.95rem] text-accent font-semibold mb-1.5">{modal.content?.issuer}</div>
          <div className="font-dm text-[0.82rem] text-text-muted mb-5">{modal.content?.year}</div>
          <div className="text-[1rem] text-text-primary leading-[1.75]">{modal.content?.description}</div>
        </div>
      </Modal>
    </>
  );
}
