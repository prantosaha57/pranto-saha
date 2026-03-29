import { useState } from 'react';
import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import BlogCard from '../components/ui/BlogCard';
import blogPosts from '../data/blog.json';

const filters = ['all', 'linkedin', 'journal', 'medium', 'facebook'];
const filterLabels = { all: 'All', linkedin: 'LinkedIn', journal: 'Journal / Academic', medium: 'Medium / Personal', facebook: 'Facebook' };

export default function Blog() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? blogPosts : blogPosts.filter((p) => p.source === active);

  return (
    <>
      <HeroSection
        label="Blog & Writing"
        title="Blog"
        description="Articles, research summaries, and thoughts — shared from academic journals, LinkedIn, and beyond."
      />

      <div className="px-16 pt-14 pb-16 max-w-[960px] max-[900px]:px-8 max-[900px]:pt-10 max-[900px]:pb-12 max-[480px]:px-5 max-[480px]:pt-7 max-[480px]:pb-10">
        <div className="fade-in-up">
          <SectionTitle title="All Writings" subtitle="Filter by source or topic" />

          {/* Filter Bar */}
          <div className="flex gap-2.5 flex-wrap mb-9">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-dm text-[0.82rem] font-semibold px-5 py-2.5 rounded-xl border cursor-pointer transition-all duration-250 ${
                  active === f
                    ? 'bg-navy text-white border-navy shadow-[0_4px_12px_rgba(10,22,40,0.15)]'
                    : 'bg-card-bg text-text-muted border-border hover:bg-navy hover:text-white hover:border-navy hover:shadow-[0_4px_12px_rgba(10,22,40,0.1)]'
                }`}
              >
                {filterLabels[f]}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5 max-[480px]:grid-cols-1 fade-in-up fade-in-up-delay-1">
          {filtered.map((post, i) => <BlogCard key={i} post={post} />)}
        </div>

        {/* Add new post note */}
        <div className="mt-12 px-7 py-7 bg-surface border border-dashed border-border rounded-2xl text-center fade-in-up fade-in-up-delay-2">
          <div className="font-dm text-[0.92rem] text-text-muted mb-1.5 font-semibold">Want to add a new post?</div>
          <div className="text-[0.88rem] text-text-muted">
            Edit <code className="bg-border/50 px-2 py-0.5 rounded-md text-[0.82rem] font-dm">src/data/blog.json</code> to add new entries.
          </div>
        </div>
      </div>
    </>
  );
}
