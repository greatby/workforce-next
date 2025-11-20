export default function sitemap() {
  const base = "https://wflimited.com";
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/jobs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/aboutUs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contract-labour-consultant-bangalore`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
      {
      url: `${base}/labour-lawyer-bangalore`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
     {
      url: `${base}/shops-establishment-registration-bangalore`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
     {
      url: `${base}/labour-law`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
      {
      url: `${base}/payroll-processing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
       {
      url: `${base}/tempstaffing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
