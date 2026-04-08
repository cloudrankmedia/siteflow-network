const BENEFITS = [
  {
    title: "Progress Monitoring",
    copy: "Weekly drone flights compared against BIM models and schedules. Catch delays before they escalate into claims.",
    icon: (
      <svg className="w-4 h-4 stroke-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Volumetric Analysis",
    copy: "Precise cut/fill calculations and stockpile tracking for billing verification and earthwork planning.",
    icon: (
      <svg className="w-4 h-4 stroke-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    title: "3D Models & Point Clouds",
    copy: "Mesh models for clash detection, visualization, and stakeholder sign-off meetings.",
    icon: (
      <svg className="w-4 h-4 stroke-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4v10l-9 4-9-4V7z" />
      </svg>
    ),
  },
  {
    title: "As-Built Documentation",
    copy: "Permanent records of each construction phase. Underground utilities documented before burial.",
    icon: (
      <svg className="w-4 h-4 stroke-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20H5a2 2 0 01-2-2V6a2 2 0 012-2h11l4 4v12a2 2 0 01-2 2h-4m-6 0v-6h8v6m-8 0h8" />
      </svg>
    ),
  },
  {
    title: "Site Mapping",
    copy: "High-res orthomosaics and topo maps for grading verification, planning, and regulatory submittals.",
    icon: (
      <svg className="w-4 h-4 stroke-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Quality Inspections",
    copy: "Identify defects, verify installations, and document conditions for warranty and compliance requirements.",
    icon: (
      <svg className="w-4 h-4 stroke-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium tracking-widest uppercase text-brand-orange mb-2">
          What You Get
        </p>
        <h2 className="font-display text-4xl text-gray-900 tracking-wide mb-3">
          Every Data Type Your Project Needs
        </h2>
        <p className="text-sm text-gray-500 max-w-xl leading-relaxed mb-10">
          From groundbreaking to final as-builts — every phase documented with
          survey-grade precision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENEFITS.map(({ title, copy, icon }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-5 border border-gray-100 hover:border-brand-orange/30 transition-colors"
            >
              <div className="w-9 h-9 bg-brand-orange-pale rounded-lg flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
