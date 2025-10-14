import Link from 'next/link'
import PropTypes from 'prop-types'

// ClosuresCritical.jsx
// Industry-standard Next.js React component (JSX) styled with Tailwind CSS.
// Usage: import ClosuresCritical from './ClosuresCritical'
// <ClosuresCritical />

export default function ClosuresCritical({
  quoteHref = '/services/closures',
  consultHref = '/closure-consultation',
}) {
  const repercussions = [
    {
      title: 'EPF Closure Violations',
      amount: '₹1,00,000 - ₹5,00,000',
      type: 'Criminal Prosecution Under EPF Act',
      consequences: [
        'Up to ₹5 lakhs + 12% interest on unpaid dues',
        'Section 14 EPF Act - Imprisonment up to 3 years',
        'Personal prosecution of directors/officers',
        'Mass claims filed by exiting employees',
        'Blacklisted from future EPF registrations',
      ],
      example:
        'In 2023, [Company Name] faced ₹8.7 lakh penalty + criminal proceedings for improper EPF closure affecting 47 employees.',
    },
    {
      title: 'ESIC Closure Violations',
      amount: '₹50,000 - ₹3,00,000',
      type: 'Penalties + Medical Liability',
      consequences: [
        '₹50,000 per month of non-compliance',
        "Ongoing liability for employee medical benefits",
        'Unannounced inspections at other units',
        'Retrospective demand for unpaid contributions',
        "Can't surrender; ongoing obligations continue",
      ],
      example:
        "ESIC demanded ₹4.2 lakhs in back contributions 18 months after factory 'closure' because exit formalities weren't completed.",
    },
    {
      title: 'Factories Act Closure Violations',
      amount: '₹2,00,000 - ₹10,00,000',
      type: 'Criminal Offense + State Prosecution',
      consequences: [
        'Closing without license surrender = illegal operation',
        'Ongoing responsibility for factory premises safety',
        'Labour Commissioner can file FIR',
        '₹2 lakh per violation, compounded monthly',
        'Open-ended liability for past employees',
      ],
      example:
        "Manufacturing unit 'closed' in 2021 received ₹12 lakh penalty notice in 2024 because license was never surrendered to state govt.",
    },
    {
      title: 'Contract Labour License Violations',
      amount: '₹1,00,000 - ₹5,00,000',
      type: 'Contractor Liability + Principal Employer Risk',
      consequences: [
        'All contractors become direct employees',
        'Pay all statutory benefits since engagement',
        "Principal employer liable even if contractors violated",
        'Future license blacklist in that state',
        '₹1 lakh per contractor; can cascade to ₹10-20 lakhs',
      ],
      example:
        "Company faced ₹18 lakh demand when 64 contractors were deemed employees due to improper license surrender.",
    },
    {
      title: 'Shops & Establishments Violations',
      amount: '₹25,000 - ₹2,00,000',
      type: 'State Penalties + Tax Liabilities',
      consequences: [
        'Ongoing registration fees charged annually even after closure',
        'Unpaid professional tax continues to compound',
        'Municipal notices: Trade license and S&E violations stack',
        'Each missed renewal = new penalty',
        'Some states have criminal provisions',
      ],
      example:
        "Retail chain discovered ₹3.2 lakh in accumulated S&E penalties across 8 'closed' stores because deregistration was never filed.",
    },
  ]

  return (
    <section id="closures-critical" className="content-section dark-bg py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="closure-dramatic-intro mb-10 sm:mb-14 lg:mb-20">
          <span className="inline-flex items-center gap-2 rounded-md bg-yellow-500/10 px-3 py-1 text-yellow-300 text-sm font-medium ring-1 ring-yellow-600/30">
            <span aria-hidden>⚠</span>
            <span className='font-subtitle'>Critical Compliance</span>
          </span>

          <h2 className="mt-4 font-titile text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">The Cost of Getting Closure Wrong</h2>

          <p className="lead-text mt-4 font-subtitle max-w-3xl text-gray-300 text-lg sm:text-xl">
            When you close a factory, shut down a shop, or exit a location, employment law doesn't just end — it escalates. Improper closure triggers penalties that can destroy businesses and land directors in criminal court.
          </p>
        </div>

        {/* Repercussions Grid */}
        <div className="repercussions-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {repercussions.map((r, idx) => (
            <article key={r.title} className="repercussion-card group rounded-xl bg-gray-800/60 p-6 ring-1 ring-gray-700 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-title font-semibold text-white">{r.title}</h3>
              <div className="penalty-amount font-subtitle mt-2 text-lg font-bold text-yellow-300">{r.amount}</div>
              <p className="violation-type mt-1 text-sm font-subtitle text-gray-300">{r.type}</p>

              <ul className="consequences mt-4 space-y-2 text-sm text-gray-200">
                {r.consequences.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="h-4 w-4 flex-shrink-0 text-yellow-400 mt-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4 10.586a1 1 0 011.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span dangerouslySetInnerHTML={{ __html: c }} />
                  </li>
                ))}
              </ul>

              <p className="real-consequence mt-4 font-subtitle text-sm italic text-gray-300">"{r.example}"</p>
            </article>
          ))}

          {/* Combined impact card spans full width on small screens */}
          <article className="repercussion-card total-impact col-span-1 sm:col-span-2 lg:col-span-1 rounded-xl bg-gradient-to-r from-red-800/80 to-red-700/70 p-6 ring-1 ring-red-900">
            <h3 className="text-xl font-semibold font-title text-white">The Compounding Effect</h3>
            <div className="penalty-amount font-subtitle total mt-2 text-lg font-bold text-white">₹10,00,000+</div>
            <p className="violation-type font-subtitle mt-1 text-sm text-gray-100">Aggregate Liability Across All Acts</p>

            <ul className="consequences mt-4 space-y-2 text-sm text-gray-100">
              <li className="flex items-start gap-3 font-subtitle"><strong>Penalties compound:</strong> EPF + ESIC + Factories + Contract + S&E = ₹10L-30L</li>
              <li className="flex items-start gap-3 font-subtitle"><strong>Criminal proceedings multiply:</strong> Multiple authorities can prosecute simultaneously</li>
              <li className="flex items-start gap-3 font-subtitle"><strong>Director disqualification:</strong> Under Company Law for noncompliance</li>
              <li className="flex items-start gap-3 font-subtitle"><strong>Bank account freezing:</strong> Recovery through account attachment</li>
              <li className="flex items-start gap-3 font-subtitle"><strong>Future venture damage:</strong> Negative records follow you to next business</li>
              <li className="flex items-start gap-3 font-subtitle"><strong>Investor/acquirer diligence failure:</strong> Past violations kill M&A deals</li>
            </ul>

            <p className="real-consequence mt-4 text-sm italic text-gray-100">"Founder couldn't raise Series A because due diligence uncovered ₹22 lakh in unresolved labour law closure violations from previous venture."</p>
          </article>
        </div>

        {/* Clean Exit Solution */}
        <div className="closure-solution mt-10 sm:mt-14 lg:mt-20 bg-gray-900/40 rounded-2xl p-6 ring-1 ring-gray-700">
          <h2 className="text-2xl font-title sm:text-3xl font-bold">The Clean Exit: How Workforce Eliminates All Closure Risk</h2>
          <p className="solution-intro mt-3 font-subtitle text-gray-300 max-w-3xl">Workforce executes complete employment law closure for all 5 acts simultaneously — in 30 days, with zero penalties, zero disputes, and zero future liability. You walk away clean.</p>

          <div className="closure-process mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: 1,
                title: 'Complete Compliance Audit',
                desc: 'We audit every registration, every filing, every obligation across all acts to identify closure requirements and pending liabilities.',
              },
              {
                step: 2,
                title: 'Employee Settlement Coordination',
                desc: 'Final wage calculations, PF settlements, gratuity, leave encashment, ESIC exit formalities — we coordinate every employee\'s clean exit.',
              },
              {
                step: 3,
                title: 'Multi-Act Closure Filing',
                desc: 'Simultaneous closure applications for EPF, ESIC, Factories, Contract Labour, and S&E. All forms filed, all authorities notified, all clearances obtained.',
              },
              {
                step: 4,
                title: 'Authority Liaison & Follow-up',
                desc: 'We manage relationships with Labour Commissioner, EPFO Regional Office, ESIC Branch, State Labour Department — answering queries, submitting documents, obtaining approvals.',
              },
              {
                step: 5,
                title: 'Final Certificates Delivered',
                desc: 'Closure certificates for all 5 acts delivered to you within 30 days. Clean exit documentation. Zero ongoing liability.',
              },
            ].map((s) => (
              <div key={s.step} className="process-step flex flex-col gap-3 rounded-lg bg-gray-800/60 p-4">
                <div className="step-number inline-flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500 text-gray-900 font-bold">{s.step}</div>
                <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                <p className="text-sm text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="closure-guarantee mt-6 rounded-lg bg-gray-800/60 p-4">
            <h3 className="text-lg font-title font-semibold text-white">Our Guarantee</h3>
            <ul className="guarantee-list mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 text-sm text-gray-300">
              <li><strong>30-day completion:</strong> All 5 acts closed within 30 days or we refund our fee</li>
              <li><strong>Zero penalties:</strong> If any penalty arises from our closure process, we pay it</li>
              <li><strong>Zero disputes:</strong> We handle all employee settlements to prevent future litigation</li>
              <li><strong>Complete documentation:</strong> All closure certificates and proof of surrender delivered</li>
              <li><strong>Future protection:</strong> Clean records ensure no issues in future ventures or M&A diligence</li>
            </ul>
          </div>

          <div className="closure-pricing mt-6">
            <h3 className="text-lg font-title font-semibold text-white">Transparent Closure Pricing</h3>
            <div className="pricing-tiers mt-4 grid gap-4 sm:grid-cols-3">
              <div className="pricing-tier rounded-lg bg-gray-800/60 p-4 ring-1 ring-gray-700">
                <h4 className="text-sm font-semibold text-white">Single Unit Closure</h4>
                <div className="price mt-2 text-xl font-bold text-yellow-300">₹75,000 - ₹1,50,000</div>
                <p className="mt-1 text-sm text-gray-300">Based on employee count and number of acts</p>
                <ul className="mt-3 text-sm text-gray-200 space-y-1">
                  <li>Up to 50 employees</li>
                  <li>All 5 acts included</li>
                  <li>30-day guarantee</li>
                </ul>
              </div>

              <div className="pricing-tier featured rounded-lg bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 p-4 ring-1 ring-yellow-700">
                <span className="badge inline-block rounded-full bg-yellow-500/20 px-3 py-1 text-yellow-300 text-xs font-semibold">Most Popular</span>
                <h4 className="mt-3 text-sm font-semibold text-white">Multi-Location Closure</h4>
                <div className="price mt-2 text-xl font-bold text-white">₹2,50,000 - ₹5,00,000</div>
                <p className="mt-1 text-sm text-gray-300">Complete shutdown across multiple locations</p>
                <ul className="mt-3 text-sm text-gray-200 space-y-1">
                  <li>Multiple units/states</li>
                  <li>Coordinated closure timeline</li>
                  <li>Dedicated closure manager</li>
                </ul>
              </div>

              <div className="pricing-tier rounded-lg bg-gray-800/60 p-4 ring-1 ring-gray-700">
                <h4 className="text-sm font-semibold text-white">Enterprise Restructuring</h4>
                <div className="price mt-2 text-xl font-bold text-gray-100">Custom Pricing</div>
                <p className="mt-1 text-sm text-gray-300">Large-scale closures, M&A transitions</p>
                <ul className="mt-3 text-sm text-gray-200 space-y-1">
                  <li>500+ employees</li>
                  <li>Multi-state coordination</li>
                  <li>Legal team support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="closure-cta-section mt-8 rounded-lg bg-gray-800/70 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-title font-semibold text-white">Don't Risk ₹10 Lakhs in Penalties and Criminal Prosecution</h3>
              <p className="mt-2 text-sm text-gray-300">When you close a business unit, employment law compliance doesn't end — it escalates. Workforce guarantees clean closure across all 5 acts in 30 days. No penalties. No disputes. No future liability.</p>
              <p className="closure-urgency mt-3 text-sm text-yellow-300">⚠ <strong>Time-sensitive:</strong> Labour law requires closure filing within 60 days of cessation. Delays multiply penalties. Act now.</p>
            </div>

            <div className="cta-buttons flex gap-3">
              <a  href="mailto:hello@epfdesk.com" className="btn-primary-large inline-flex items-center rounded-md bg-yellow-500 px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
                Get Clean Closure Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ClosuresCritical.propTypes = {
  quoteHref: PropTypes.string,
  consultHref: PropTypes.string,
}
