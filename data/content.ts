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

export interface MediaReview {
  title: string;
  type: "Movie" | "TV Show" | "Book" | "Game" | "Album" | "Podcast" | "Band" | "Other";
  icon?: string; // Path to icon/image
  rating?: number; // 1-10 or 1-5 scale
  review: string;
  date?: string;
}

export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  image: string;
  hobbies?: string[];
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

export interface Highlight {
  date: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
}

export interface Content {
  profile: Profile;
  research: Project[];
  projects: Project[];
  experiences: Experience[];
  highlights: Highlight[];
  mediaReviews: MediaReview[];
}

export const content: Content = {
  profile: {
    name: "Divij Muthu",
    tagline: "Studying EECS at UC Berkeley",
    bio: "Hi! I'm Divij Muthu, currently a sophomore studying Electrical Engineering and Computer Sciences at UC Berkeley. I'm working on 3D image reconstruction via PMUTs in the Liwei Lin Lab, and I'm also interested in signal processing, machine learning, and software development.",
    image: "/images/profile.jpg",
    hobbies: ["Badminton", "Video Games", "Music"],
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
      authors: "Nikita G. Lukhanin, Divij Muthu, Chaoying Gu, Megan Teng, Kamyar Behrouzi, Chun-Ming Chen, Laura Waller, and Liwei Lin",
      venue: "IEEE MEMS 2026 (Accepted for oral presentation)",
      description: "A novel system for 3D image reconstruction via ultrasound transducers and compressed sensing.",
      links: [
        // { name: "Paper", url: "https://drive.google.com/file/d/1vQMwxJSRwGlUDrlGdhpbOuK76OzTVRa2/view?usp=sharing" },
        // { name: "IEEE MEMS 2026", url: "https://mems26.org" },
      ],
      tags: ["Embedded Systems", "Signal Processing", "Compressed Sensing", "Convex Optimization", "Computational Imaging"],
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
      tags: ["C++", "PyTorch", "Machine Learning", "Signal Processing"],
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
      tags: ["Machine Learning", "Networking", "Cybersecurity"],
    },
    {
      title: "Tabu Search-guided Sigmoid Heuristic for Identification of the Longest Common Subsequence of Multiple Sequences",
      thumbnail: "/images/lcs-research.png",
      authors: "Divij Muthu",
      venue: "Pioneer Academics",
      description: "Completed with Pioneer Academics, mentored by a Computer Science Professor from Colgate University. The problem of determining the longest common subsequence for an arbitrary number of strings is NP hard...the optimal approach is of exponential time complexity when the number of input strings varies; as such, a heuristic-based solution is appealing, since it can return a reasonably accurate solution relatively quickly.",
      links: [
        { name: "Paper", url: "https://drive.google.com/file/d/1JmIS5PAURsnsc84VaG2rja__rcAIpvAS/view?usp=sharing"},
      ],
      tags: ["Algorithms", "Heuristics", "Optimization"],
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
      tags: ["React", "Node.js", "Gemini LLM API", "OAuth 2.0", "Full-Stack"],
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
      ],
      tags: ["Python", "Embedded Systems", "Signal Processing", "Hardware and PCB Design", "KiCad"],
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
      tags: ["React Native", "TypeScript", "Firebase", "Google Cloud Platform", "Cloud Functions","XCode", "Android Emulator", "Jira"],
    },
  ],
  highlights: [
    {
      date: "Oct. 2025",
      description: "A paper was accepted for an oral presentation at ",
      link: {
        text: "IEEE MEMS 2026",
        url: "https://mems26.org",
      },
    },
    {
      date: "Sept. 2025",
      description: "I was accepted to give a talk at Rice University's ",
      link: {
        text: "Gulf Coast Undergraduate Research Symposium",
        url: "https://lukhanin.net/images/dmRice.jpeg",
      },
    },
  ],
  mediaReviews: [
    // Add your media reviews here!
    // Example format:
    // {
    //   title: "Movie/Show/Book Title",
    //   type: "Movie", // Options: "Movie" | "TV Show" | "Book" | "Game" | "Album" | "Podcast" | "Other"
    //   icon: "/images/media/placeholder.png", // Optional - place icons in /public/images/media/
    //   rating: 8, // Optional - 1-10 scale
    //   review: "Your review text here. Write as much as you want!",
    //   date: "2025-01-15", // Optional
    // },
    {
      title: "The Battle Cats",
      type: "Game",
      review: "Many MANY enjoyable hours in this game, went through a lot of mobile games back in the day and this is the one that stuck. Can effectively be played for free, especially with 'certain methods' of ensuring you can acquire good gacha units. The gameplay is simple and enjoyable, with surprising strategic depth involved in tailoring your loadout for each stage. SO SO MANY memorable bosses and stages whose names are infamous among the community, and practically infinite content; moved on after 100s of hrs and many years but there is still SO much more, probably never touching 4 crown UL tho. Some of the latest grinds are also concerning e.g. behemoth stones and dark catseyes, the fact that this mobile game managed to make such mechanics which AREN'T pay to win because you literally have to manually complete tons of stages for stones and can't even get more than a few catseyes period is kinda wild.",
    },
    {
      title: "Sabaton",
      type: "Band",
      review: "Enjoyable music, historical themes are pretty cool and have taught me so much about specific heroes and events. Really complex themes, naturally, but the music goes hard and I think it's pretty respectful while acknowledging how messy history can be. Have been listening for quite a while now, in general probably the main standard band I listen to along with various video game soundtracks.",
    }
  ],
};

