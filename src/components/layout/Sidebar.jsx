import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import navigation from '../../data/navigation.json';

export default function Sidebar() {
  const { profile, links, social } = navigation;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="hidden max-[900px]:flex items-center justify-between bg-navy text-white px-5 py-3 sticky top-0 z-[101] backdrop-blur-xl bg-navy/95">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full border-2 border-gold overflow-hidden shrink-0 shadow-[0_0_16px_rgba(212,168,67,0.25)]">
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <div className="font-playfair text-[1rem] font-bold leading-tight">{profile.name}</div>
            <div className="text-[0.7rem] text-accent-light italic">{profile.title}</div>
          </div>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white text-2xl bg-transparent border-none cursor-pointer p-2 transition-transform duration-200" style={{ transform: mobileOpen ? 'rotate(90deg)' : 'none' }}>
          {mobileOpen ? '\u2715' : '\u2630'}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <div className="hidden max-[900px]:block bg-navy/98 border-t border-white/10 sticky top-[68px] z-[100] backdrop-blur-xl">
          <nav className="flex flex-wrap">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 no-underline font-dm text-[0.88rem] font-medium transition-all duration-200 ${
                    isActive ? 'text-white bg-white/[0.08]' : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex justify-center gap-2.5 px-4 py-3.5 border-t border-white/[0.08]">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                className="text-white/50 text-[0.82rem] no-underline px-3 py-1.5 rounded-lg bg-white/[0.06] font-dm transition-all duration-200 hover:text-gold hover:bg-white/10"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="w-[280px] bg-gradient-to-b from-navy to-navy-light text-white fixed top-0 left-0 bottom-0 flex flex-col z-[100] overflow-y-auto max-[900px]:hidden">
        {/* Profile section */}
        <div className="px-6 pt-10 pb-8 border-b border-white/[0.06] text-center relative">
          {/* Decorative glow behind avatar */}
          <div className="absolute left-1/2 top-[60px] -translate-x-1/2 w-[140px] h-[140px] rounded-full bg-gold/10 blur-2xl pointer-events-none" />
          <div className="relative w-[170px] h-[170px] rounded-full mx-auto mb-5 group">
            <div className="absolute inset-[-3px] rounded-full bg-gradient-to-br from-gold to-gold-light opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-navy">
              <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div>
            <div className="font-playfair text-[1.3rem] font-bold text-white leading-tight mb-2 tracking-[-0.01em]">{profile.name}</div>
            <div className="text-[0.8rem] text-accent-light/80 italic tracking-[0.3px] font-dm">{profile.title}</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-4 flex-1">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-2.5 py-3 px-7 no-underline font-dm text-[0.92rem] font-medium tracking-[0.2px] transition-all duration-200 border-l-[3px] relative ${
                  isActive
                    ? 'text-white bg-white/[0.08] border-l-gold'
                    : 'text-white/55 border-l-transparent hover:text-white/90 hover:bg-white/[0.04] hover:border-l-gold/50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Social + footer */}
        <div className="px-6 py-5 border-t border-white/[0.06]">
          <div className="flex justify-center gap-2.5 mb-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                className="text-white/45 text-[0.8rem] no-underline transition-all duration-200 px-3 py-1.5 rounded-lg bg-white/[0.04] font-dm hover:text-gold hover:bg-white/[0.08] hover:shadow-[0_2px_8px_rgba(212,168,67,0.1)]"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p className="text-[0.7rem] text-white/25 text-center font-dm tracking-wide">&copy; 2025 Pranto Saha</p>
        </div>
      </aside>
    </>
  );
}
