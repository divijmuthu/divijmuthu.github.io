export interface Link {
  name: string;
  url: string;
}

export interface Project {
  title: string;
  thumbnail: string;
  authors: string;
  venue: string;
  description: string;
  links: Link[];
  tags: string[];
}

export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  image: string;
  social: {
    github?: string;
    scholar?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface Experience {
  title: string;
  company: string;
  location?: string;
  date: string;
  description: string[];
  tags?: string[];
}

export interface Content {
  profile: Profile;
  research: Project[];
  projects: Project[];
  experiences: Experience[];
}

export const content: Content = {
  profile: {
    name: "Divij Muthu",
    tagline: "Electrical Engineering and Computer Sciences Student at UC Berkeley",
    bio: "Hi! I'm Divij Muthu...welcome to my personal website! I'm passionate about machine learning, software applications, and research. Currently pursuing a Bachelor of Science in EECS at UC Berkeley with a 4.00 GPA.",
    image: "/images/profile.jpg",
    social: {
      github: "https://github.com/divijmuthu",
      linkedin: "https://www.linkedin.com/in/divij-muthu",
      email: "divij_muthu@berkeley.edu",
    },
  },
  research: [
    {
      title: "3D Image Reconstruction via Ultrasound Transducers and Compressed Sensing",
      thumbnail: "/images/sensor-research.png",
      authors: "Divij Muthu",
      venue: "IEEE MEMS 2026 (Accepted, Oral Presentation)",
      description: "Built an automated data acquisition pipeline using Python, C++, and PySerial to interface with Teensy/Arduino MEGA microcontrollers, including firmware for precise sub-microsecond pulse timing, retrieving real-time oscilloscope ADC data via SPI, and signal processing via background subtraction and Butterworth filtering. Adapted MATLAB simulation from EE367: Computational Imaging to test novel setup for 3D image reconstruction via ultrasound transducers (PMUTs), compressed sensing, and reconstruction algorithms (FISTA, ADMM-TV). Designing a custom mixed-signal PCB in KiCad to miniaturize the system, integrating a Teensy 4.1, transmit/receive switching, signal amplification (TI VCA5807), and an 18-bit ADC into a compact device for portable deployment. Collaborating with Berkeley AI Research (Waller Lab) to accelerate reconstruction pipelines using machine learning techniques.",
      links: [
        { name: "Paper", url: "https://drive.google.com/file/d/1vQMwxJSRwGlUDrlGdhpbOuK76OzTVRa2/view?usp=sharing" },
        { name: "IEEE MEMS 2026", url: "https://mems26.org" },
      ],
      tags: ["Embedded Systems", "Signal Processing", "Compressed Sensing", "Hardware Design", "Machine Learning"],
    },
    {
      title: "Analysis and Implementation of Machine Learning Approaches to Identifying DDoS & Benign Network Traffic",
      thumbnail: "/images/ddos-research.png",
      authors: "Divij Muthu",
      venue: "UCIxGATI Science Journal",
      description: "Guided by Georgia Tech Postdoc, published in UCIxGATI journal. Observed ~95% accuracy in traffic identification for an industry benchmark dataset involving simulated DDoS attacks. Compared and contrasted pros and cons of tested ML models from Scikit-learn such as Decision Tree, Random Forest, SVM for cleaned dataset using SMOTE, provided recommendations on future approaches.",
      links: [
        { name: "Paper", url: "https://scienceyouth.org/web/viewer.php?id=175" },
      ],
      tags: ["Machine Learning", "Network Security", "DDoS Detection"],
    },
  ],
  projects: [
    {
      title: "Real-Time Sensor Simulation and Activity Classification with C++ & PyTorch",
      thumbnail: "/images/sensor-project.png",
      authors: "Divij Muthu",
      venue: "Personal Project",
      description: "Implemented C++ modules to simulate noisy sensor data streams (IMU, GPS, Compass, Barometer), and extract features including mean, variance of 3D coordinates, DFT for motion frequencies, modeling activities like walking, jumping. Trained a lightweight neural network in PyTorch to classify the activity being performed from a live data window of 256 samples via extracted features, observing ~98% accuracy & 0.98 f1-score with 100 Hz sampling rate and 6 activities. Built an interactive demo in PyGame with ~59 fps, ~30 us to simulate data in C++, ~0.05 ms to classify with ML.",
      links: [
        { name: "Code", url: "https://github.com/divijmuthu/simSensors" },
      ],
      tags: ["C++", "PyTorch", "Machine Learning", "Embedded Systems", "Signal Processing"],
    },
  ],
  experiences: [
    {
      title: "Software Development Intern",
      company: "TopSeeds LLC",
      location: "Pleasanton, CA",
      date: "December 2025 - Present",
      description: [
        "Developing an AI-powered executive recruiting platform using React and Node.js, integrating the Gemini LLM API to automate screening various roles for candidate fit and generate natural language advice on pursuing these openings.",
        "Engineering secure backend microservices to synchronize live data with Google Sheets and Excel Online, implementing OAuth 2.0 authentication flows to ensure data integrity and security.",
        "Collaborating on the full-stack architecture for a system designed to process 50+ candidates weekly, optimizing database interactions to reduce latency in candidate-to-recruiter matching.",
      ],
      tags: ["React", "Node.js", "LLM", "OAuth 2.0", "Full-Stack"],
    },
    {
      title: "Undergraduate Researcher",
      company: "Liwei Lin Lab - Berkeley Sensor and Actuator Center",
      location: "Berkeley, CA",
      date: "April 2025 - Present",
      description: [
        "Built an automated data acquisition pipeline using Python, C++, and PySerial to interface with Teensy/Arduino MEGA microcontrollers, including firmware for precise sub-microsecond pulse timing, retrieving real-time oscilloscope ADC data via SPI, and signal processing via background subtraction, Butterworth filtering from SciPy.",
        "Adapted MATLAB simulation from EE367: Computational Imaging to test novel setup for 3D image reconstruction via ultrasound transducers (PMUTs), compressed sensing, and reconstruction algorithms (FISTA, ADMM-TV).",
        "Designing a custom mixed-signal PCB in KiCad to miniaturize the system, integrating a Teensy 4.1, transmit/receive switching, signal amplification (TI VCA5807), and an 18-bit ADC into a compact device for portable deployment.",
        "Paper accepted to IEEE MEMS 2026 for an oral presentation, presented findings at Rice GCURS, collaborating with Berkeley AI Research (Waller Lab) to accelerate reconstruction pipelines using machine learning techniques.",
      ],
      tags: ["Python", "C++", "Embedded Systems", "Signal Processing", "Hardware Design", "KiCad"],
    },
    {
      title: "Full Stack Software Engineering Intern",
      company: "Take2 Movies and Shows",
      location: "Virtual",
      date: "March 2025 - August 2025",
      description: [
        "Spearheaded full-stack feature development for a social media app within a Google Cloud (GCP) and Firebase ecosystem, building core functionalities with Firebase Auth, Cloud Firestore (NoSQL), and React Native.",
        "Engineered several intuitive user-facing features, including app-wide movie/show and notification preference systems, front-end and back-end list sorting via a reusable component, and UI fixes for Android and dark mode.",
        "Reduced network latency for filtering by ~20% and improved application performance by implementing batch updates, local caching, and optimized data fetching strategies with RESTful APIs e.g. TMDB API for movie/show data.",
      ],
      tags: ["React Native", "Firebase", "GCP", "NoSQL", "Full-Stack"],
    },
  ],
};

