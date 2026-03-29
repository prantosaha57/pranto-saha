import { useState, useEffect } from 'react';
import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import TestimonialCard from '../components/ui/TestimonialCard';
import Modal from '../components/ui/Modal';
import { useModal } from '../hooks/useModal';
import data from '../data/testimonials.json';

export default function Recommendations() {
  const modal = useModal();
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ name: '', role: '', relation: '', text: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try { setNotes(JSON.parse(localStorage.getItem('ps_notes') || '[]')); } catch { setNotes([]); }
  }, []);

  const submitNote = () => {
    if (!form.name || !form.text || !form.relation) {
      alert('Please fill in your name, relationship, and recommendation.');
      return;
    }
    const newNotes = [{ ...form, date: new Date().toLocaleDateString() }, ...notes];
    setNotes(newNotes);
    localStorage.setItem('ps_notes', JSON.stringify(newNotes));

    const subject = encodeURIComponent('Website Recommendation from ' + form.name);
    const body = encodeURIComponent(`Name: ${form.name}\nRole: ${form.role}\nRelationship: ${form.relation}\n\nRecommendation:\n${form.text}`);
    window.open(`mailto:saha15-4157@diu.edu.bd?subject=${subject}&body=${body}`);

    setSubmitted(true);
    setForm({ name: '', role: '', relation: '', text: '' });
  };

  const inputClass = "w-full px-4 py-3 font-dm text-[0.95rem] text-text-primary bg-surface border border-border rounded-xl outline-none transition-all duration-200 focus:border-accent focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)] focus:bg-white";

  return (
    <>
      <HeroSection
        label="Recommendations"
        title="Recommendations"
        description="Words from colleagues, students, and professors — and Letters of Recommendation from my supervisors."
      />

      <div className="px-16 pt-14 pb-16 max-w-[1400px] mx-auto max-[900px]:px-8 max-[900px]:pt-10 max-[900px]:pb-12 max-[480px]:px-5 max-[480px]:pt-7 max-[480px]:pb-10">
        {/* LORs */}
        <div className="fade-in-up">
          <SectionTitle title="Letters of Recommendation" subtitle="Click to view each letter" />
          {data.lors.map((lor) => (
            <div key={lor.id} className="flex items-center justify-between gap-4 px-6 py-5 bg-card-bg border border-border rounded-2xl mb-4 flex-wrap transition-all duration-300 hover:shadow-[0_8px_24px_rgba(10,22,40,0.06)] max-[480px]:px-4 max-[480px]:py-4">
              <div className="flex gap-4 items-center">
                <div className="text-[1.6rem] w-12 h-12 rounded-xl bg-surface flex items-center justify-center">{lor.icon}</div>
                <div>
                  <div className="font-playfair font-bold text-[1.05rem] text-navy">{lor.name}</div>
                  <div className="font-dm text-[0.82rem] text-text-muted" dangerouslySetInnerHTML={{ __html: lor.role }} />
                </div>
              </div>
              <button
                onClick={() => modal.open(lor)}
                className="font-dm text-[0.82rem] font-bold px-5 py-2.5 bg-navy text-white border-none rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap hover:bg-blue hover:shadow-[0_4px_12px_rgba(10,22,40,0.2)]"
              >
                View LOR
              </button>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-14 fade-in-up fade-in-up-delay-1">
          <SectionTitle title="Testimonials" subtitle="From colleagues, students & professors" />
          {data.testimonials.map((t, i) => (
            <TestimonialCard key={i} text={t.text} name={t.name} role={t.role} initials={t.initials} />
          ))}
        </div>

        {/* Public Note Form */}
        <div className="mt-14 fade-in-up fade-in-up-delay-2">
          <SectionTitle title="Leave a Recommendation" subtitle="Colleagues, students, or anyone — leave a note about working with Pranto" />
          <div className="bg-card-bg border border-border rounded-2xl px-8 py-8 mb-12 max-[480px]:px-5 max-[480px]:py-6">
            <div className="grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
              <div className="mb-4">
                <label className="block font-dm text-[0.78rem] font-bold text-text-muted uppercase tracking-[0.8px] mb-2.5">Your Name *</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Dr. John Smith" className={inputClass} />
              </div>
              <div className="mb-4">
                <label className="block font-dm text-[0.78rem] font-bold text-text-muted uppercase tracking-[0.8px] mb-2.5">Your Role / Institution</label>
                <input type="text" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="e.g. Professor at XYZ University" className={inputClass} />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-dm text-[0.78rem] font-bold text-text-muted uppercase tracking-[0.8px] mb-2.5">Relationship to Pranto *</label>
              <select value={form.relation} onChange={(e) => setForm({ ...form, relation: e.target.value })} className={inputClass}>
                <option value="">Select your relationship...</option>
                <option value="Professor / Supervisor">Professor / Supervisor</option>
                <option value="Research Collaborator">Research Collaborator</option>
                <option value="Student / Mentee">Student / Mentee</option>
                <option value="Colleague">Colleague</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block font-dm text-[0.78rem] font-bold text-text-muted uppercase tracking-[0.8px] mb-2.5">Your Recommendation *</label>
              <textarea value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} placeholder="Share your experience working with Pranto..." className={`${inputClass} resize-y min-h-[130px] leading-[1.7]`} />
            </div>
            <button onClick={submitNote} className="bg-navy text-white font-dm text-[0.92rem] font-bold px-8 py-3.5 border-none rounded-xl cursor-pointer transition-all duration-200 tracking-[0.2px] hover:bg-blue hover:shadow-[0_4px_12px_rgba(10,22,40,0.2)]">
              Submit Recommendation
            </button>
            {submitted && (
              <div className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-xl px-5 py-4 font-dm text-[0.92rem] text-[#166534] mt-5">
                Thank you! Your recommendation has been submitted via email. Pranto will review and add it to this page.
              </div>
            )}
          </div>
        </div>

        {/* Community Notes */}
        <div className="fade-in-up fade-in-up-delay-3">
          <SectionTitle title="Community Notes" subtitle="Public recommendations submitted through this page" />
          {notes.length === 0 ? (
            <div className="px-7 py-8 text-center text-text-muted font-dm text-[0.95rem] bg-card-bg border border-border rounded-2xl">
              No community notes yet. Be the first to leave a recommendation above!
            </div>
          ) : (
            notes.map((n, i) => (
              <TestimonialCard
                key={i}
                text={n.text}
                name={n.name}
                role={`${n.role || ''} ${n.relation ? '\u00b7 ' + n.relation : ''}`}
                initials={n.name.charAt(0).toUpperCase()}
                avatarBg="linear-gradient(135deg, var(--color-blue), var(--color-accent))"
              />
            ))
          )}
        </div>
      </div>

      {/* LOR Modal */}
      <Modal isOpen={modal.isOpen} onClose={modal.close} title={`Letter of Recommendation \u2014 ${modal.content?.name || ''}`}>
        <div dangerouslySetInnerHTML={{ __html: modal.content?.content || '' }} />
      </Modal>
    </>
  );
}
