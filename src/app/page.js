import FadeInWhenVisible from "@/components/FadeEffects";
import Footer from "@/components/Footer";
import WindsurfNav from "@/components/Navbar";
import WindsurfStatsLayout from "@/components/StatsSection";
import VisionSection from "@/components/VisionSection";
import { deliversData, enterpriseData, heroData, partnerData, sectionData, visionData } from "@/utils/data";
import HeroSection from "@/components/Hero";
import ImageHighlightSlider from "@/components/Slider";
import FeatureCards from "@/components/FeatureCards";
import Enterprise from "@/components/Enterprise";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import Delivers from "@/components/Delivers";
import FAQAccordion from "@/components/FAQ";
import CaseStudyTestimonials from "@/components/Testimonial";
import ClosuresCritical from "@/components/ClosureCritical";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";

export const metadata = {
  title: "Workforce - India's Employment Law Infrastructure",
  description:
    "Workforce executes employment law compliance for Indian companies—EPF, ESIC, Factories Act, S&E, Contract Labour—across all 36 states. Monthly compliance, registrations, and closures handled automatically. Zero penalties guaranteed.",
  alternates: { canonical: "https://www.wflimited.com/" },
  openGraph: {
    title: "Workforce - India's Employment Law Infrastructure",
    description:
      "Workforce provides full-stack compliance execution for Indian employers: EPF, ESIC, Factories Act, Shops & Establishments, and Contract Labour compliance handled automatically across all 36 states.",
    url: "https://www.wflimited.com/",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Workforce - India's Employment Law Infrastructure",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workforce - India's Employment Law Infrastructure",
    description:
      "End-to-end employment law compliance across India. EPF, ESIC, CLRA, and Factories Act handled automatically — zero penalties guaranteed.",
    images: ["https://www.wflimited.com/og-image.jpg"],
  },
};

const Page = () => {
  return (
    <>
    <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Workforce Limited",
              url: "https://www.wflimited.com/",
              logo: "https://www.wflimited.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/workforce-limited/",
                "https://twitter.com/workforce_in",
              ],
              description:
                "Workforce Limited is India's employment law infrastructure company, executing EPF, ESIC, Factories Act, Shops & Establishments, and Contract Labour compliance across all 36 states. Zero penalties guaranteed.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Church street, Bengaluru",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560001",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-99459-33333",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />
      {/* <WindsurfNav /> */}
      <FadeInWhenVisible>
        <HeroSection data={heroData}/>
      </FadeInWhenVisible>
        <VisionSection data={visionData}/>
      {/* <FadeInWhenVisible type="zoom-in" delay={0.1}>
        <ImageHighlightSlider sectionData={sectionData} />
      </FadeInWhenVisible>
  
      <FadeInWhenVisible type="slide-right" delay={0.2}>
        <FeatureCards />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ImageHighlightSlider sectionData={partnerData} />
      </FadeInWhenVisible>
      <FadeInWhenVisible type="slide-left" delay={0.3}>
        <WindsurfStatsLayout />
      </FadeInWhenVisible> */}
      {/* <Enterprise /> */}
      <EnterpriseChoose data={enterpriseData}/>
      {/* <Delivers data={deliversData}/> */}
      <CaseStudyTestimonials/>
      <ClosuresCritical />
      <ContactWorkforce/>
      {/* <FAQAccordion /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Page;


// "use client";
// import { motion } from "framer-motion";
// import { useMemo } from "react";
// import {
//   ArrowRight,
//   ShieldCheck,
//   PlayCircle,
//   CheckCircle2,
// } from "lucide-react";
// // ------------------------------------------------------------
// // Workforce – Cinematic Homepage (Single-file React Component)
// // Next.js (App Router) compatible. Tailwind + Framer Motion.
// // Drop this into /app/page.tsx or any route. Ensure Tailwind + Framer Motion installed.
// // ------------------------------------------------------------
// const fadeUp = {
//   hidden: { opacity: 0, y: 16 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };
// const stagger = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.08 } },
// };
// const Pill = ({ children }) => (
//   <span
//     className="inline-flex items-center rounded-full border border-white/15 bg-white/5
// px-3 py-1 text-xs text-white/80 backdrop-blur-sm"
//   >
//     {children}
//   </span>
// );
// const Stat = ({ value, label }) => (
//   <div className="flex flex-col items-start">
//     <div className="text-3xl font-semibold tracking-tight text-white">
//       {value}
//     </div>
//     <div className="mt-1 text-sm text-white/70">{label}</div>
//   </div>
// );
// const Card = ({ title, children }) => (
//   <div
//     className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg ring-1 ringblack/
// 5"
//   >
//     <h4 className="mb-3 text-base font-semibold text-white">{title}</h4>
//     <div className="text-sm text-white/80">{children}</div>
//   </div>
// );
// const Badge = ({ children }) => (
//   <span
//     className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium textemerald-
// 300 ring-1 ring-inset ring-emerald-500/30"
//   >
//     {children}
//   </span>
// );
// export default function WorkforceHome() {
//   const industries = useMemo(
//     () => [
//       "Hospitality",
//       "Healthcare",
//       "Education",
//       "Manufacturing",
//       "IT",
//       "Logistics",
//       "Retail",
//       "Construction",
//       "Energy",
//       "Finance",
//       "Media",
//       "Agriculture",
//       "Telecom",
//       "Real Estate",
//       "NGOs",
//     ],
//     []
//   );
//   const states = useMemo(
//     () => [
//       "Karnataka",
//       "Telangana",
//       "Goa",
//       "Tamil Nadu",
//       "Maharashtra",
//       "Delhi",
//       "Gujarat",
//       "Kerala",
//       "Rajasthan",
//       "Uttar Pradesh",
//       "Madhya Pradesh",
//       "Punjab",
//       "Haryana",
//       "West Bengal",
//       "Odisha",
//       "Chhattisgarh",
//     ],
//     []
//   );
//   return (
//     <div className="min-h-screen bg-[#08090b] text-white">
//       {/* --- HERO --- */}
//       <section className="relative overflow-hidden">
//         <div className="pointer-events-none absolute inset-0 -z-10">
//           {/* abstract grid glow */}
//           <div
//             className="absolute -left-40 top-0 h-[80rem] w-[80rem] rounded-full bg-gradientradial
// from-emerald-500/10 via-emerald-400/0 to-transparent blur-3xl"
//           />
//           <div
//             className="absolute -right-40 -top-20 h-[70rem] w-[70rem] rounded-full bggradient-
// radial from-cyan-400/10 via-cyan-400/0 to-transparent blur-3xl"
//           />
//         </div>
//         <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:pt-36">
//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="show"
//             className="mx-auto
// max-w-3xl text-center"
//           >
//             <motion.div
//               variants={fadeUp}
//               className="mb-6 flex items-center justify-center
// gap-2"
//             >
//               <Pill>Regulatory Execution Engine</Pill>
//               <Pill>100+ Acts</Pill>
//               <Pill>36 States & UTs</Pill>
//             </motion.div>
//             <motion.h1
//               variants={fadeUp}
//               className="text-balance text-5xl font-semibold
// tracking-tight sm:text-6xl"
//             >
//               Regulation, Executed.
//             </motion.h1>
//             <motion.p
//               variants={fadeUp}
//               className="mx-auto mt-5 max-w-2xl text-lg text-white/
// 80"
//             >
//               A unified system that runs every compliance, license,
//               registration, and renewal your company will ever need— across
//               industries and states. Build without fear. We handle the law.
//             </motion.p>
//             <motion.div
//               variants={fadeUp}
//               className="mt-8 flex items-center justify-center
// gap-3"
//             >
//               <a
//                 href="#get-started"
//                 className="inline-flex items-center gap-2 rounded-xl bgemerald-
// 500 px-5 py-3 text-sm font-semibold text-black shadow-emerald-500/30 transition
// hover:bg-emerald-400"
//               >
//                 Build on Workforce <ArrowRight className="h-4 w-4" />
//               </a>
//               <a
//                 href="#how-it-works"
//                 className="inline-flex items-center gap-2 rounded-xl
// border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition
// hover:bg-white/10"
//               >
//                 See How It Works <PlayCircle className="h-4 w-4" />
//               </a>
//             </motion.div>
//             <motion.div
//               variants={fadeUp}
//               className="mt-8 grid grid-cols-3 gap-6 sm:gridcols-
// 3"
//             >
//               <Stat value="10,000+" label="Compliances executed" />
//               <Stat value="30+" label="Industries covered" />
//               <Stat value="99%" label="SLA accuracy" />
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//       {/* --- TRUST STRIP --- */}
//       <section className="border-t border-white/10 bg-white/5">
//         <div className="mx-auto max-w-7xl px-6 py-10">
//           <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
//             {Array.from({ length: 6 }).map((_, i) => (
//               <div key={i} className="h-8 w-28 rounded bg-white/10" />
//             ))}
//           </div>
//           <p className="mt-4 text-center text-xs text-white/60">
//             Trusted by high‑growth operators and their investors
//           </p>
//         </div>
//       </section>
//       {/* --- PROBLEM --- */}
//       <section className="mx-auto max-w-7xl px-6 py-24" id="problem">
//         <div className="grid items-start gap-12 md:grid-cols-2">
//           <div>
//             <h2 className="text-3xl font-semibold">
//               The Operating Layer is Broken
//             </h2>
//             <p className="mt-4 text-white/80">
//               Compliance isn’t paperwork—it’s the control plane of a nation.
//               100+ Acts, 5,000+ departments, thousands of deadlines—and no
//               system of record. It slows founders, distracts teams, and caps
//               growth.
//             </p>
//           </div>
//           <div className="grid gap-4">
//             {[
//               "Fragmented departments",
//               "Spreadsheet governance",
//               "Missed renewals & penalties",
//               "No single source of truth",
//             ].map((t) => (
//               <div
//                 key={t}
//                 className="flex items-center gap-3 rounded-xl border border-white/10
// bg-white/5 p-4"
//               >
//                 <ShieldCheck className="h-5 w-5 text-white/70" />
//                 <span className="text-sm text-white/80">{t}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* --- ANSWER --- */}
//       <section className="mx-auto max-w-7xl px-6 py-24" id="answer">
//         <div className="mb-10 max-w-3xl">
//           <h2 className="text-3xl font-semibold">
//             A Regulatory Execution Engine
//           </h2>
//           <p className="mt-4 text-white/80">
//             We convert law into infrastructure. Workforce maps every
//             requirement, executes filings on your behalf, tracks officer‑level
//             progress, and renews everything automatically.
//           </p>
//         </div>
//         <div className="grid gap-6 md:grid-cols-4">
//           <Card title="Discover">
//             Know every compliance you need—by state, industry, and scale.
//           </Card>
//           <Card title="Execute">
//             Registrations, inspections, approvals—digital + on‑ground.
//           </Card>
//           <Card title="Track">
//             Real‑time status, document vault, officer timeline, SLAs.
//           </Card>
//           <Card title="Sustain">
//             Renewals, amendments, closures—zero lapses.
//           </Card>
//         </div>
//       </section>
//       {/* --- PRODUCT TOUR --- */}
//       <section
//         className="relative border-y border-white/10 bg-gradient-to-b from-white/5 totransparent"
//         id="how-it-works"
//       >
//         <div className="mx-auto max-w-7xl px-6 py-24">
//           <div className="mx-auto max-w-3xl text-center">
//             <h3 className="text-2xl font-semibold">
//               From Red Tape to Source Code
//             </h3>
//             <p className="mt-3 text-white/80">
//               Each filing becomes data. Timelines, rejections, inspection notes,
//               and fees feed the Regulatory Intelligence Graph—making every
//               future execution faster and safer.
//             </p>
//           </div>
//           <div className="mt-12 grid gap-6 md:grid-cols-3">
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
//               <Badge>Map</Badge>
//               <h4 className="mt-3 font-semibold">What applies to me?</h4>
//               <p className="mt-2 text-sm text-white/80">
//                 State × Industry × Act matrix with instant scoping.
//               </p>
//               <div className="mt-4 h-36 rounded-lg bg-white/10" />
//             </div>
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
//               <Badge>Workflow</Badge>
//               <h4 className="mt-3 font-semibold">Submission → Approval</h4>
//               <p className="mt-2 text-sm text-white/80">
//                 Sequenced filings, inspection scheduling, fee challans.
//               </p>
//               <div className="mt-4 h-36 rounded-lg bg-white/10" />
//             </div>
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
//               <Badge>Tracking</Badge>
//               <h4 className="mt-3 font-semibold">Officer‑level telemetry</h4>
//               <p className="mt-2 text-sm text-white/80">
//                 File number, timestamps, documents, SLA alerts.
//               </p>
//               <div className="mt-4 h-36 rounded-lg bg-white/10" />
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* --- COVERAGE GRID --- */}
//       <section className="mx-auto max-w-7xl px-6 py-24" id="coverage">
//         <div className="mb-8 flex items-center justify-between gap-6">
//           <h3 className="text-2xl font-semibold">Nation‑Scale on Day One</h3>
//           <a
//             href="#industries"
//             className="text-sm font-semibold text-emerald-300 hover:textemerald-
// 200"
//           >
//             Explore Industry Modules →
//           </a>
//         </div>
//         <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
//           {states.map((s) => (
//             <div
//               key={s}
//               className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm
// text-white/80"
//             >
//               {s}
//             </div>
//           ))}
//         </div>
//         <div
//           className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
//           id="industries"
//         >
//           {industries.map((i) => (
//             <div
//               key={i}
//               className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm
// text-white/80"
//             >
//               {i}
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* --- OUTCOMES --- */}
//       <section className="mx-auto max-w-7xl px-6 py-24" id="outcomes">
//         <div className="grid gap-10 md:grid-cols-3">
//           <div>
//             <h3 className="text-2xl font-semibold">
//               What changes when compliance becomes infrastructure
//             </h3>
//             <p className="mt-3 text-white/80">
//               Legal continuity as a product feature.
//             </p>
//           </div>
//           <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
//             <div className="text-4xl font-semibold text-emerald-300">0</div>
//             <div className="mt-1 text-sm text-white/70">Missed renewals</div>
//           </div>
//           <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
//             <div className="text-4xl font-semibold text-emerald-300">
//               30–60%
//             </div>
//             <div className="mt-1 text-sm text-white/70">Faster approvals</div>
//           </div>
//         </div>
//       </section>
//       {/* --- PROOF / CASES --- */}
//       <section className="mx-auto max-w-7xl px-6 py-24" id="cases">
//         <h3 className="text-2xl font-semibold">Execution Proof</h3>
//         <div className="mt-8 grid gap-6 md:grid-cols-3">
//           <Card title="F&B chain (KA/TN/TS)">
//             220 licenses unified; Fire + FSSAI renewals automated; expansion in
//             90 days.
//           </Card>
//           <Card title="Hospital network (TS)">
//             Clinical + bio‑waste + labour filings; zero penalties.
//           </Card>
//           <Card title="Manufacturer (TN)">
//             Factory license + boiler + PCB consents; audit‑ready dashboard.
//           </Card>
//         </div>
//         <div className="mt-6 text-right text-sm">
//           <a
//             href="#"
//             className="font-semibold text-emerald-300 hover:text-emerald-200"
//           >
//             See more executions →
//           </a>
//         </div>
//       </section>
//       {/* --- ROLES --- */}
//       <section className="mx-auto max-w-7xl px-6 py-24" id="roles">
//         <h3 className="text-2xl font-semibold">Who builds on Workforce</h3>
//         <div className="mt-8 grid gap-6 md:grid-cols-4">
//           <Card title="Founders & Promoters">
//             Launch and expand with legal uptime across states.
//           </Card>
//           <Card title="Enterprises">
//             Unify multi‑state operations into one pane of glass.
//           </Card>
//           <Card title="Investors & Boards">
//             Portfolio‑level compliance telemetry.
//           </Card>
//           <Card title="Govt & Partners">
//             Digitize and de‑risk critical workflows.
//           </Card>
//         </div>
//       </section>
//       {/* --- HOW IT WORKS --- */}
//       <section className="mx-auto max-w-7xl px-6 py-24" id="flow">
//         <h3 className="text-2xl font-semibold">How it works</h3>
//         <div className="mt-8 grid gap-6 md:grid-cols-4">
//           {[
//             { t: "Assess", d: "We map every applicable requirement." },
//             {
//               t: "Assemble",
//               d: "Docs, affidavits, fees prepared & validated.",
//             },
//             {
//               t: "Execute",
//               d: "Filings, inspections, approvals (digital + field).",
//             },
//             { t: "Sustain", d: "Renewals and changes auto‑handled." },
//           ].map((s) => (
//             <div
//               key={s.t}
//               className="rounded-2xl border border-white/10 bg-white/5 p-6"
//             >
//               <div className="flex items-center gap-2">
//                 <CheckCircle2 className="h-5 w-5 text-emerald-300" />
//                 <h4 className="font-semibold">{s.t}</h4>
//               </div>
//               <p className="mt-2 text-sm text-white/80">{s.d}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* --- SECURITY --- */}
//       <section className="mx-auto max-w-7xl px-6 py-24" id="security">
//         <div className="grid items-start gap-12 md:grid-cols-2">
//           <div>
//             <h3 className="text-2xl font-semibold">Security & Governance</h3>
//             <p className="mt-3 text-white/80">
//               Encryption in transit & at rest, role‑based access, SSO, audit
//               logs, India data residency options.
//             </p>
//             <div className="mt-6 flex flex-wrap gap-3">
//               <Pill>Data Residency (IN)</Pill>
//               <Pill>RBAC</Pill>
//               <Pill>Audit Trail</Pill>
//               <Pill>SSO</Pill>
//             </div>
//           </div>
//           <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
//             <h4 className="font-semibold">Compliance Stack</h4>
//             <ul className="mt-3 list-inside list-disc text-sm text-white/80">
//               <li>Document vault & versioning</li>
//               <li>Department‑linked timelines & SLAs</li>
//               <li>Approval provenance & officer logs</li>
//               <li>Tamper‑evident history</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//       {/* --- PRICING CTA --- */}
//       <section className="mx-auto max-w-7xl px-6 py-24" id="pricing">
//         <div
//           className="rounded-3xl border border-white/10 bg-gradient-to-br fromemerald-
// 500/10 to-cyan-500/10 p-10 text-center"
//         >
//           <h3 className="text-2xl font-semibold">
//             One engine. One contract. All compliances.
//           </h3>
//           <p className="mx-auto mt-3 max-w-2xl text-white/80">
//             Transparent workflows, tracked SLAs, and government challans in one
//             pane of glass.
//           </p>
//           <div className="mt-6 flex items-center justify-center gap-3">
//             <a
//               id="get-started"
//               href="#"
//               className="inline-flex items-center gap-2 rounded-xl bgemerald-
// 500 px-5 py-3 text-sm font-semibold text-black shadow-emerald-500/30 transition
// hover:bg-emerald-400"
//             >
//               Get a Quote <ArrowRight className="h-4 w-4" />
//             </a>
//             <a
//               href="#"
//               className="inline-flex items-center gap-2 rounded-xl border border-white/
// 15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
//             >
//               Schedule a Walkthrough
//             </a>
//           </div>
//         </div>
//       </section>
//       {/* --- FAQ --- */}
//       <section className="mx-auto max-w-7xl px-6 py-24" id="faq">
//         <h3 className="text-2xl font-semibold">FAQ</h3>
//         <div className="mt-8 grid gap-6 md:grid-cols-2">
//           <Card title="Are you a consultancy or a platform?">
//             We’re an execution engine with field ops—software + verified liaison
//             network.
//           </Card>
//           <Card title="Do you cover my state/industry?">
//             Yes—36 states & UTs, 30+ industries. Start with your state; we map
//             the rest.
//           </Card>
//           <Card title="Can you handle inspections & submissions?">
//             Yes—end‑to‑end filings, inspections, approvals; all logged with
//             provenance.
//           </Card>
//           <Card title="How do renewals work?">
//             Auto‑tracked and pre‑filed before expiry; fees reconciled with
//             challans.
//           </Card>
//         </div>
//       </section>
//       {/* --- MANIFESTO / FINAL CTA --- */}
//       <section className="relative overflow-hidden border-t border-white/10">
//         <div className="pointer-events-none absolute inset-0 -z-10">
//           <div
//             className="absolute left-1/2 top-[-10rem] h-[40rem] w-[40rem] -translate-x-1/2
// rounded-full bg-gradient-radial from-emerald-400/10 via-emerald-400/0 to-transparent
// blur-3xl"
//           />
//         </div>
//         <div className="mx-auto max-w-4xl px-6 py-24 text-center">
//           <h2 className="text-3xl font-semibold">
//             Build without fear. We handle the law.
//           </h2>
//           <p className="mx-auto mt-3 max-w-2xl text-white/80">
//             Compliance used to be a tax on ambition. Workforce turns it into
//             infrastructure— predictable, programmable, perpetual.
//           </p>
//           <div className="mt-6 flex items-center justify-center gap-3">
//             <a
//               href="#get-started"
//               className="inline-flex items-center gap-2 rounded-xl bgemerald-
// 500 px-5 py-3 text-sm font-semibold text-black shadow-emerald-500/30 transition
// hover:bg-emerald-400"
//             >
//               Build on Workforce <ArrowRight className="h-4 w-4" />
//             </a>
//             <a
//               href="#"
//               className="inline-flex items-center gap-2 rounded-xl border border-white/
// 15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
//             >
//               Talk to the Founders
//             </a>
//           </div>
//         </div>
//       </section>
//       {/* --- FOOTER --- */}
//       <footer className="border-t border-white/10">
//         <div className="mx-auto max-w-7xl px-6 py-10">
//           <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
//             <p className="text-xs text-white/60">
//               Workforce is building the Regulatory Grid: the execution backbone
//               for rule‑based economies.
//             </p>
//             <nav className="flex flex-wrap items-center gap-4 text-xs text-white/70">
//               <a href="#">Product</a>
//               <a href="#industries">Industries</a>
//               <a href="#coverage">States</a>
//               <a href="#security">Security</a>
//               <a href="#">Careers</a>
//               <a href="#">Press</a>
//               <a href="#">Contact</a>
//             </nav>
//           </div>
//           <div className="mt-6 text-center text-[11px] text-white/50">
//             © {new Date().getFullYear()} Workforce
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }