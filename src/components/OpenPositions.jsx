"use client";
import { useState, useEffect } from "react";
import Portal from "./Portal";

const jobs = [
  {
    id: "1",
    title: "Legal & Policy Interns",
    department: "Legal & Policy",
    location: "New Delhi / Bangalore / Mumbai",
    type: "Internship",
    duration: "3–6 months (conversion possible)",
    description: `
Work on the frontier where law meets execution.  
You’ll decode Acts, map department processes, and contribute to the nation’s first Regulatory Intelligence Graph.

**You’ll do things like:**
- Dissect and codify labour, environment, and safety laws  
- Draft structured workflows from state Acts  
- Assist live filings, inspections, and NOCs  
- Write explainers that turn regulation into code logic  
- Interface with departments, officers, and field agents  

**What you’ll learn:**  
How laws actually operate — beyond books, beyond courts.  
You’ll graduate understanding how regulation moves the real economy.
    `,
  },
  {
    id: "2",
    title: "Company Secretary (CS) Interns",
    department: "Legal & Policy",
    location: "Mumbai / Bangalore / New Delhi",
    type: "Internship",
    duration: "3–6 months (conversion possible)",
    description: `
We’re reimagining what Company Secretaries do in the digital era.  
Beyond filings — CS interns at Workforce work on structuring legal continuity as a product.

**You’ll do things like:**
- Create unified compliance calendars for multi-state entities  
- Work on digital workflows for board filings, MCA, and Labour Acts  
- Support entity lifecycle management (incorporation → closure)  
- Contribute to compliance automation logic  
- Work alongside our product and tech teams to digitize filings  

**What you’ll learn:**  
Corporate law, not as checklists — but as an operating system.  
You’ll help shape how every future company stays legally alive.
    `,
  },
  {
    id: "3",
    title: "Regulatory Research & Policy Engineering Interns",
    department: "Policy Engineering",
    location: "Bangalore / New Delhi",
    type: "Internship",
    duration: "3–6 months",
    description: `
Turn Acts into APIs.  
Work with our Policy Engineering team to structure legal text into machine-readable workflows.  
You’ll bridge the world between law, language, and logic — creating the models that power Workforce’s compliance engine.
    `,
  },
  {
    id: "4",
    title: "Technology & Automation Interns",
    department: "Technology",
    location: "Bangalore",
    type: "Internship",
    duration: "3–6 months",
    description: `
For those who want to build the backend of governance.  
Automation pipelines, department APIs, document classification, data mapping — this is the frontier of GovTech.

**You’ll work on:**
- Regulatory workflow automation  
- Dashboards, data models, and system maps  
- API layers for state departments  
- Secure audit trails and compliance vaults  

You’re not writing just code — you’re writing the law’s execution layer.
    `,
  },
  {
    id: "5",
    title: "Operations & Field Execution Interns",
    department: "Operations",
    location: "Bangalore / Mumbai / Delhi",
    type: "Internship",
    duration: "3–6 months",
    description: `
Execution is our heartbeat.  
You’ll work on the ground — visiting departments, interacting with officers, understanding real-time process flows, and translating them into data.  
You’ll be part of the only team in India that executes compliance both digitally and physically.  
The system learns from your experience.
    `,
  },
  {
    id: "6",
    title: "Design, Communications & Brand Interns",
    department: "Design & Communications",
    location: "Remote or On-site",
    type: "Internship",
    duration: "3–6 months",
    description: `
Help design how trust looks and feels.  
You’ll work on interfaces, brand communication, motion graphics, and storytelling — turning regulation into something people can see, understand, and believe in.
    `,
  },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filters, setFilters] = useState({
    department: "",
    location: "",
    type: "",
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (selectedJob) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.height = "100vh";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.height = "";
    }
    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.height = "";
    };
  }, [selectedJob]);

  const departments = [...new Set(jobs.map((j) => j.department))];
  const locations = [...new Set(jobs.map((j) => j.location))];
  const types = [...new Set(jobs.map((j) => j.type))];

  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.department === "" || job.department === filters.department) &&
      (filters.location === "" || job.location === filters.location) &&
      (filters.type === "" || job.type === filters.type)
    );
  });

  return (
    <div
      id="positions"
      className="relative z-0 bg-sk-white py-36 text-sk-black"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-5">
        <h1 className="text-5xl font-semibold text-center">Open Positions</h1>

        {/* Filters */}
        {/* <div className="flex flex-wrap gap-4 justify-between bg-[#f6eede] p-6 rounded-md">
          <div className="flex flex-col md:flex-row gap-4">
            <select
              value={filters.department}
              onChange={(e) =>
                setFilters({ ...filters, department: e.target.value })
              }
              className="rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="">All Departments</option>
              {departments.map((dep) => (
                <option key={dep} value={dep}>
                  {dep}
                </option>
              ))}
            </select>

            <select
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
              className="rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="">All Types</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div> */}

        {/* Job List */}
        <div className="grid w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-6">
          {filteredJobs.map((job) => (
            <button
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="flex flex-col gap-4 rounded-lg bg-sk-sand p-4 md:flex-row md:items-center md:justify-between hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-sk-aqua"
            >
              <div className="flex flex-col gap-1 md:gap-0">
                <h3 className="body1 font-medium">{job.title}</h3>
                <div className="body2 opacity-50">
                  {job.location} <span className="mx-2">•</span> {job.type}
                </div>
              </div>
            </button>
          ))}
          {filteredJobs.length === 0 && (
            <p className="text-gray-500">No jobs match the selected filters.</p>
          )}
        </div>
      </div>

      {/* Modal */}

      {selectedJob && (
        <Portal>
          <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedJob(null)}
            ></div>

            {/* Modal Content */}
            <div className="relative z-[10000] max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-md bg-[#f6eede] p-8 md:p-10 shadow-lg">
              {/* Back button */}
              <a
                href="#positions"
                onClick={() => setSelectedJob(null)}
                className="body1 group flex items-center gap-2 opacity-50 mb-4"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.25 6.75 4.75 12l5.5 5.25M19.25 12H5"
                  ></path>
                </svg>
                <span>Back</span>
              </a>

              {/* Header */}
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                  <div className="heading5">{selectedJob.title}</div>
                  <a
                    href={``}
                    className="ml-0 md:ml-3"
                  >
                    <button className="bg-[#00F5D4] text-sk-black px-6 py-4 rounded-[2px] hover:bg-sk-aqua-tint w-full md:w-fit">
                      Apply Now
                    </button>
                  </a>
                </div>
                <div className="body1 flex flex-col justify-between gap-2 opacity-50 sm:flex-row">
                  <span>{selectedJob.location}</span>
                  {selectedJob.duration && (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <span>{selectedJob.duration}</span>
                    </>
                  )}
                  <span className="hidden sm:inline">•</span>
                  <span>{selectedJob.type}</span>
                </div>
              </div>

              {/* Job description */}
              <div className="prose max-w-full">
                {selectedJob.description
                  .split("\n")
                  .map((line, idx) =>
                    line.trim() ? <p key={idx}>{line}</p> : <br key={idx} />
                  )}
              </div>

              {/* Bottom Apply button */}
              <a href={``}>
                <button className="mt-6 bg-[#00F5D4] text-sk-black px-6 py-4 rounded-[2px] hover:bg-sk-aqua-tint w-full md:w-fit">
                  Apply Now
                </button>
              </a>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
