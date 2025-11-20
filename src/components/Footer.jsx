"use client";
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaDiscord,
  FaLinkedin,
  FaReddit,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaEnvelope, href: "", label: "Mail" },
    { icon: FaInstagram, href: "", label: "Instagram" },
    { icon: FaTiktok, href: "", label: "TikTok" },
    { icon: FaTwitter, href: "", label: "Twitter" },
    { icon: FaDiscord, href: "", label: "Discord" },
    { icon: FaLinkedin, href: "", label: "LinkedIn" },
    { icon: FaReddit, href: "", label: "Reddit" },
    { icon: FaYoutube, href: "", label: "YouTube" },
  ];

  const footerColumns = [
    {
      heading: "Product",
      links: [
        { label: "EPFdesk", href: "https://www.epfdesk.com/" },
        { label: "Temp Staffing", href: "/tempstaffing" },
        { label: "Payroll", href: "/payroll-processing" },
        { label: "Labour Law", href: "/labour-law" },
      ],
    },
    // {
    //   heading: "Capabilities",
    //   links: [
    //     { label: "Cascade", href: "/cascade" },
    //     { label: "Tab", href: "/tab" },
    //     { label: "JetBrains Plugin", href: "/plugins/jetbrains" },
    //   ],
    // },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/aboutUs" },
        { label: "Jobs", href: "/jobs" },
        // { label: "Careers", href: "/careers" },
        // { label: "Contact", href: "/contact" },
        // { label: "Partnerships", href: "/partnerships" },
        // { label: "Terms of Service", href: "/terms" },
        // { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    // {
    //   heading: "Resources",
    //   links: [
    //     { label: "Docs", href: "/docs" },
    //     { label: "Changelog", href: "/changelog" },
    //     { label: "Releases", href: "/releases" },
    //     { label: "Support", href: "/support" },
    //     { label: "Feature Requests", href: "/features" },
    //     { label: "University", href: "/university" },
    //   ],
    // },
    // {
    //   heading: "Connect",
    //   links: [
    //     { label: "Contact", href: "/contact" },
    //     { label: "Events", href: "/events" },
    //     { label: "Hackathons", href: "/hackathons" },
    //     { label: "Community", href: "/community" },
    //     { label: "Students", href: "/students" },
    //   ],
    // },
  ];

  return (
    <footer className="relative bg-[#011e3c] text-white">
      {/* Desktop wave background */}
      <img
        src="/images/footer_wave_desktop.svg"
        alt="Footer wave"
        className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[2000px] h-[300px] pointer-events-none select-none"
      />

      {/* Mobile wave background */}
      <img
        src="/images/mobile_footer_wave.png"
        alt="Footer mobile wave"
        className="md:hidden absolute inset-0 h-full w-full object-bottom object-cover"
      />

      <div className="relative z-10 px-6 pt-16 pb-8 max-w-7xl mx-auto">
        {/* Logo + Social */}
        <div className="lg:flex lg:justify-between lg:items-start mb-12">
          <div className="space-y-4 max-w-sm mb-10 lg:mb-0">
            <h1 className="text-xl font-main font-bold">WORKFORCE</h1>
            <p className="text-sm font-subtitle text-white/60">
              Building the Compliance Brain of the Nation
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 hover:opacity-80" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Link Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {footerColumns.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-navbar font-semibold uppercase mb-3">
                  {col.heading}
                </h4>
                <ul className="space-y-2 text-sm text-white/60">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="hover:text-white font-subtitle transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-white/60">
          <p>© 2025, Workforce Ltd. All rights reserved.</p>
          <p>Workforce Ltd.</p>
        </div>
      </div>
    </footer>
  );
}

// export default function Footer () {
//   return (
//     <div style={{ width: "1000px",
//     height: "250px",
//     background: "#ffffff38",
//     color: "black",
//     backdropFilter: "blur(19px)",
//     borderRadius: "10px",
//   margin:'auto'}}>hello</div>
//   )
// }
