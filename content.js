/* WNIS LAB WEBSITE CONTENT
 * Edit this file to update text, people, research areas, and publications.
 * Keep quotation marks, commas, brackets, and property names intact.
 */
window.WNIS_CONTENT = {
  site: {
    name: "WNIS Lab",
    fullName: "Wireless Networks & Intelligent Systems Lab",
    description: "Wireless Networks and Intelligent Systems Lab at Saint Louis University.",
    email: "nan.cen@slu.edu",
    address: "Ritter Hall 301, Saint Louis University, St. Louis, Missouri",
    sluUrl: "https://www.slu.edu/science-and-engineering/academics/computer-science/index.php",
    scholarUrl: "https://scholar.google.com/citations?user=yufHhUsAAAAJ&hl=en"
  },
  home: {
    lead: "We build intelligent wireless systems that connect the physical and digital worlds.",
    introduction: "Our work brings together wireless communication, sensing, artificial intelligence, and programmable networking. We design and evaluate next-generation systems spanning optical and underwater links, aerial networks, hybrid radio environments, and digital twins.",
    affiliation: "The WNIS Lab is part of the Department of Computer Science at Saint Louis University.",
    researchHeading: "Research areas",
    researchAreas: [
      { title: "Optical Wireless Networks", text: "Visible-light, laser, and underwater optical communication and sensing systems." },
      { title: "Intelligent Network Control", text: "Learning-driven association, resource allocation, routing, and orchestration for complex networks." },
      { title: "Integrated Sensing & Communication", text: "Joint system designs that use wireless and optical signals for communication and environmental sensing." },
      { title: "Digital Twins", text: "Real-time physical-to-digital systems for network modeling, construction, and autonomous decision-making." },
      { title: "Space, Air & Ground Networks", text: "Programmable networking for UAVs, mobile platforms, and heterogeneous terrestrial and non-terrestrial systems." },
      { title: "Wireless Security", text: "Understanding and countering side channels and other threats in emerging wireless systems." }
    ]
  },
  team: {
    director: {
      name: "Dr. Nan Cen", role: "Lab Director · Assistant Professor",
      email: "nan.cen@slu.edu", photo: "assets/images/profile/nan-cen.jpg",
      url: "https://sites.google.com/view/nancen/home?authuser=0",
      bio: "Dr. Cen directs the WNIS Lab, with research interests in modeling, control, and system design for next-generation intelligent wireless networks."
    },
    students: [
      { name: "Peijun Hou", role: "Ph.D. Candidate", email: "", photo: "assets/images/team/peijun-hou.jpg", url: "https://sites.google.com/view/peijunhou/home", interests: "Intelligent network control, hybrid LiFi/WiFi systems, and digital twins." },
      { name: "Yue Zhang", role: "Ph.D. Candidate", email: "yue.zhang.5@slu.edu", photo: "assets/images/team/yue-zhang.webp", url: "https://www.yzn95.com/", interests: "Optical wireless communication and sensing, security, and UAV networking." },
      { name: "Yi Wei", role: "Ph.D. Student", email: "", photo: "assets/images/team/yi-wei.jpg", url: "", interests: "Wireless networks and intelligent systems." }
    ],
    alumni: [
      { name: "Jack Manhardt", role: "Alumnus", email: "", photo: "", url: "https://www.linkedin.com/in/jackmanhardt/", interests: "" },
      { name: "Yuwei Long", role: "Alumnus", email: "", photo: "", url: "https://sites.google.com/view/ylw22/home", interests: "" }
    ],
    pastVisitors: [
      { name: "Sri Siva Sai Kasturi", role: "Past Visitor", email: "", photo: "", url: "https://www.linkedin.com/in/sri-siva-sai-kasturi-6bb9611a0/", interests: "" },
      { name: "Hamza Abu Khalaf", role: "Past Visitor", email: "", photo: "", url: "https://www.linkedin.com/in/hakat/", interests: "" }
    ]
  },
  publications: {
    introduction: "",
    items: [
      { year: "2026", type: "Conference", title: "AquaSaC: A Single Optical Waveform for Underwater Sensing and Communication", authors: "Y. Zhang, P. Hou, and N. Cen", venue: "IEEE INFOCOM 2026", link: "https://doi.org/10.1109/INFOCOM59046.2026.11571529" },
      { year: "2026", type: "Conference", title: "LightTells: Lights Reveal What You Are Doing", authors: "Y. Zhang, N. Cen, and P. Hou", venue: "ACM SenSys 2026", link: "https://doi.org/10.1145/3774906.3800483" },
      { year: "2026", type: "Conference", title: "GUARD: GNN-Guided Adaptive Routing with DRL in Hybrid FSO/RF SAGIN", authors: "P. Hou, Y. Zhang, and N. Cen", venue: "IEEE WoWMoM 2026", link: "https://doi.org/10.1109/WoWMoM69805.2026.00043" },
      { year: "2025", type: "Journal", title: "Deep Reinforcement Learning-Based Device Association in Hybrid LiFi/WiFi Indoor IoT Networks", authors: "P. Hou and N. Cen", venue: "Computer Networks · Article 111932", link: "https://doi.org/10.1016/j.comnet.2025.111932" },
      { year: "2025", type: "Journal", title: "O-AAV: Programmable Software-Defined Optical Wireless Communication AAV Networking Testbed", authors: "Y. Zhang and N. Cen", venue: "IEEE/ACM Transactions on Networking", link: "https://doi.org/10.1109/TON.2025.3559767" },
      { year: "2025", type: "Conference", title: "OPTICS: Human Activity-Aware Integrated Optical Wireless Communication and Sensing", authors: "Y. Zhang, W. Wang, and N. Cen", venue: "IEEE INFOCOM 2025", link: "https://doi.org/10.1109/INFOCOM55648.2025.11044687" },
      { year: "2025", type: "Preprint", title: "Deep Reinforcement Learning-Based User Association in Hybrid LiFi/WiFi Indoor Networks", authors: "P. Hou and N. Cen", venue: "arXiv:2503.01803", link: "https://doi.org/10.48550/arXiv.2503.01803" },
      { year: "2024", type: "Conference", title: "DC-PPO for Joint User Association and Power Allocation in Dynamic Indoor Hybrid VLC/RF Networks", authors: "P. Hou and N. Cen", venue: "IEEE WoWMoM 2024 · Best Paper Award Finalist", link: "https://doi.org/10.1109/WoWMoM60985.2024.00040" },
      { year: "2024", type: "Conference", title: "Countering RF Side-Channel Sniffing in Optical Wireless Communication", authors: "Y. Zhang and N. Cen", venue: "IEEE ICC 2024", link: "https://doi.org/10.1109/ICC51166.2024.10622777" },
      { year: "2023", type: "Conference", title: "Q-Learning for Sum-Throughput Optimization in Wireless Visible-Light UAV Networks", authors: "Y. Long and N. Cen", venue: "IEEE INFOCOM Workshops 2023", link: "https://doi.org/10.1109/INFOCOMWKSHPS57453.2023.10225783" },
      { year: "2023", type: "Conference", title: "Proximal Policy Optimization for User Association in Hybrid LiFi/WiFi Indoor Networks", authors: "P. Hou and N. Cen", venue: "IEEE GLOBECOM 2023", link: "https://doi.org/10.1109/GLOBECOM54140.2023.10437559" },
      { year: "2023", type: "Conference", title: "Programmable Software-Defined Testbed for Visible Light UAV Networks: Architecture Design and Implementation", authors: "Y. Zhang and N. Cen", venue: "IEEE CCNC 2023", link: "https://doi.org/10.1109/CCNC51644.2023.10060808" },
      { year: "2022", type: "Conference", title: "Sum-Rate Optimization for Visible-Light-Band UAV Networks Based on Particle Swarm Optimization", authors: "Y. Long and N. Cen", venue: "IEEE CCNC 2022", link: "https://doi.org/10.1109/CCNC49033.2022.9700623" },
      { year: "2021", type: "Journal", title: "Extensive Thiol Profiling for Assessment of Intracellular Redox Status in Cultured Cells by HPLC-MS/MS", authors: "J. Wu, A. Chernatynskaya, A. Pfaff, H. Kou, N. Cen, N. Ercal, and H. Shi", venue: "Antioxidants 11(1) · Article 24", link: "https://doi.org/10.3390/antiox11010024" },
      { year: "2021", type: "Journal", title: "Development of a HPLC-MS/MS Method for Assessment of Thiol Redox Status in Human Tear Fluids", authors: "J. Wu, A. Sigler, A. Pfaff, N. Cen, N. Ercal, and H. Shi", venue: "Analytical Biochemistry 629 · Article 114295", link: "https://doi.org/10.1016/j.ab.2021.114295" },
      { year: "2021", type: "Journal", title: "Compressed Sensing Based Low-Power Multi-View Video Coding and Transmission in Wireless Multi-Path Multi-Hop Networks", authors: "N. Cen, Z. Guan, and T. Melodia", venue: "IEEE Transactions on Mobile Computing 21(9) · 3122–3137", link: "https://doi.org/10.1109/TMC.2021.3049797" },
      { year: "2020", type: "Journal", title: "Distributed Joint Power, Association and Flight Control for Massive-MIMO Self-Organizing Flying Drones", authors: "Z. Guan, N. Cen, T. Melodia, and S. M. Pudlewski", venue: "IEEE/ACM Transactions on Networking", link: "https://doi.org/10.1109/TNET.2020.2985972" },
      { year: "2020", type: "Conference", title: "FLight: Toward Programmable Visible-Light-Band Wireless UAV Networking", authors: "N. Cen", venue: "ACM MobiCom Workshop on Light Up the IoT 2020", link: "https://doi.org/10.1145/3412449.3412549" }
    ]
  }
};
