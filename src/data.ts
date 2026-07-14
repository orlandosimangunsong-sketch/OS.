/**
 * PETUNJUK PEMBARUAN KONTEN:
 * Anda dapat memperbarui seluruh teks pada website ini hanya dengan mengubah nilai-nilai di file ini.
 * - Untuk menambah pengalaman, tambahkan object baru ke array `experiences`.
 * - Untuk menambah kategori proyek, tambahkan object baru ke array `projectCategories`.
 * - Perubahan akan langsung terlihat tanpa perlu mengubah kode komponen UI.
 */

export const personalInfo = {
  name: "Orlando Simangunsong",
  headline: "Renewable Energy Consultant | Solar PV Engineer | Battery Storage Specialist",
  summary: "Electrical Engineer with over 13 years of experience in renewable energy, specializing in solar PV, battery storage, and off-grid electrification. Led major rural electrification projects in Papua, Wakatobi, and Sumba, delivering clean and reliable energy to underserved communities. Adept at system design using PVsyst, project management, and integration of battery systems to optimize energy usage. Seeking opportunities to apply this expertise within large-scale operations such as mining or infrastructure.",
  email: "orlandosimangunsong@gmail.com",
  phone: "+62 853 7071 6686",
  location: "Bogor, Indonesia",
  socials: {
    linkedin: "https://www.linkedin.com/in/orlandosimangunsong",
    youtube: "https://www.youtube.com/@orlandosimangunsong/playlists",
    videoPortfolio: "https://www.youtube.com/watch?v=-H0sGOTMEYI"
  }
};

export const experiences = [
  {
    id: 1,
    company: "Toba Energi Nusajaya",
    period: "Feb 2020 - Present",
    role: "Renewable Energy Consultant",
    location: "Bogor, Indonesia",
    description: "Designed and implemented solar PV systems for residential and commercial clients, achieving up to 50% energy cost savings. Delivered hybrid PV and battery systems, ensuring compliance with IEC 61727 and grid performance standards. Conducted detailed energy audits, ROI analysis, and system sizing using PVsyst. Negotiated with suppliers and developed tailored storage solutions for improved reliability. Oversaw project execution, commissioning, and customer technical support.",
  },
  {
    id: 2,
    company: "Fluidic Indonesia",
    period: "May 2012 - Feb 2020",
    role: "Product Support Engineer",
    location: "Bogor, Indonesia",
    description: "Supervised solar PV and battery system installation and commissioning across 45+ remote villages. Led energy system design and deployment for telecommunications operators (Telkomsel, Indosat Ooredoo, Hutchison Three), supporting power reliability for network infrastructure across 45+ remote sites and cutting diesel generator use by up to 15%. Conducted knowledge transfer sessions for field technicians in rural areas. Managed performance monitoring, report writing, and system optimization.",
  },
  {
    id: 3,
    company: "RT/RW Net",
    period: "2011 - 2012",
    role: "Network Technician (Co-Founder)",
    location: "Bogor, Indonesia",
    description: "Co-founded and operated a community-based internet network (RT/RW Net) together with a university friend shortly after graduation. Configured and maintained network routing, IP addressing, and Mikrotik router setups to provide shared internet access to local households.",
  }
];

export const projectCategories = [
  {
    id: "hybrid",
    title: "Residential & Commercial Hybrid Solar PV Systems",
    items: [
      "5 kWp Hybrid – South Jakarta (2024): Reduced grid reliance by 30%.",
      "4 kWp Hybrid – Bogor (2024): Tailored energy solution for suburban home.",
      "9 kWp Hybrid – Bekasi (2024): Lowered energy cost for commercial client by 20%.",
      "10 kWp Hybrid – North Jakarta (2023): 14 MWh/year yield; saving approx. Rp 23.8 million/year."
    ]
  },
  {
    id: "offgrid",
    title: "Off-Grid & Rural Electrification",
    items: [
      "1 MWp+ Off-Grid Solar PV – Papua (2016–2017): Powered 900+ homes, clinics, schools.",
      "809.88 kWp – Wakatobi (2017–2018): Delivered electricity to isolated villages.",
      "492 kWp – Sumba (2018–2019): Improved quality of life for 900+ households."
    ]
  },
  {
    id: "bess",
    title: "Battery Energy Storage Systems (BESS)",
    items: [
      "Telkomsel – Nias (2018): Ensured uptime for telecom infrastructure.",
      "Hutchison Three – Riau (2015–2016): Reduced diesel dependency by 15%.",
      "Indosat Ooredoo – North Sumatra (2012–2015): Improved power reliability with multiple BESS systems."
    ]
  }
];

export const skills = {
  coreCompetencies: [
    "PVsyst",
    "Solar PV Design",
    "Battery Energy Storage",
    "Grid Integration",
    "Energy Audits",
    "Off-Grid Electrification",
    "Project Management",
    "Technical Writing",
    "ETAP",
    "System Commissioning",
    "Load Analysis",
    "IEC 61727",
    "Rural Electrification",
    "MS Office"
  ],
  personalProjects: [
    {
      title: "Modbus Data Acquisition & Logging Tool (Python)",
      description: "Built Python scripts to communicate with industrial devices over Modbus RTU (serial) and Modbus TCP (network) protocols. Parsed real-time device/sensor readings and automated logging of results into Excel for monitoring and analysis. Self-initiated project undertaken to build practical skills in network engineering and data automation, alongside an electrical/energy systems background."
    },
    {
      title: "PVsyst Tutorial YouTube Channel",
      description: "Created and published a series of educational video tutorials on PVsyst solar simulation software, targeted at engineers and students entering the renewable energy field. Demonstrates strong subject-matter expertise, communication skills, and commitment to knowledge sharing within the industry."
    }
  ]
};
