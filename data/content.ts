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
      tags: ["C++", "PyTorch", "PyGame", "Machine Learning", "Signal Processing"],
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
      tags: ["Scikit-learn","SMOTE","Machine Learning", "Networking", "Cybersecurity"],
    },
    {
      title: "Tabu Search-guided Sigmoid Heuristic for Identification of the Longest Common Subsequence of Multiple Sequences",
      thumbnail: "/images/lcs-research.png",
      authors: "Divij Muthu",
      venue: "Pioneer Academics",
      description: "Completed with Pioneer Academics, mentored by a Computer Science Professor from Colgate University. Abstract: The problem of determining the longest common subsequence for an arbitrary number of strings is NP hard...the optimal approach is of exponential time complexity when the number of input strings varies; as such, a heuristic-based solution is appealing, since it can return a reasonably accurate solution relatively quickly. Implemented algorithm in Java and created a piece of generative art using the algorithm’s output for a Lindenmayer System.",
      links: [
        { name: "Paper", url: "https://drive.google.com/file/d/1JmIS5PAURsnsc84VaG2rja__rcAIpvAS/view?usp=sharing"},
      ],
      tags: ["Algorithms", "Heuristics", "Optimization", "Generative Art", "p5.js", "Java", "openprocessing.org"],
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
    // there's too much bro, let's just do big ones
    {
      title: "Dispatch",
      type: "Game",
      review: "Really enjoyed this one, the story is excellent and the character design is fantastic, so AdHoc Studio pretty much hit it out of the park when it comes to the most critical aspect of this type of game. The dispatching gameplay is great, it's a good blend of challenge and reward, although once you understand the synergy mechanic and get some decent levels + abilities you can basically just send certain pairs mindlessly and effectively be guaranteed a success (which is satisfying after so many fails!!!). The hacking is mediocre but not bad and an acceptable change of pace, the autofail mechanic is cool but probably should've been mentioned earlier before a first-timer puts too many points into strength across the overall team. As usual the choices don't really matter but this honestly works pretty well, it's the same strong core story with some fun choices sprinked throughout. The buildup throughout the story is fantastic, again it's just really good on this front and there's not too much to say. Overall a very strong new IP with huge potential, and the Youtuber VAs are great too.",
    },
    {
      title: "Pokemon Legends: Z-A",
      type: "Game",
      review: "Pretty good, honestly agree with the general 8/10 consensus, the story is okay but like SV it really picks up at the end with a strong climax (if only we could have had this momentum or some hints on the way), the gameplay is quite enjoyable but I think PL:A was more fun personally, I didn't feel as engaged and it honestly got boring a lot faster especially when the city looks the same everywhere, feel like there was much more scope for a variety of environments even within the city, and most of the buildings just being inaccessible bricks really hurts the vibe. I think these are moreso symptoms of the underlying focus on making these games cheaply and quickly which naturally has some major drawbacks from an artistic perspective, which is very painful in a highly competitive gaming landscape where works of extreme passion and absurd quality seem to be emerging from every corner. The new megas are fine and took some time to grow on me, but the battles generally end so fast with the new real-time system that it's hard to recommend this new approach over traditional Pokemon battles which relied more on careful strategy and benefited from the classic dynamic of outplaying your opponent.",
    },
    {
      title: "Clair Obscur: Expedition 33",
      type: "Game",
      review: "The absolute GOAT. This entire game is a work of art (spoiler but this is very literal), every character is compelling, every environment is insanely detailed and it's hard not to just pause and stare in awe at what Sandfall has created here. The gameplay is exactly what I've been looking for (see the M&L series discussion below) and this is one of the truly fantastic games where I'm glued to it for weeks and can't wait to play more. Will probably circle back to it for NG+ and the new update when the next Clair Obscur is announced, not surprised it swept the awards as it's a game you just have to experience. The game's at its best when it's capturing the fear of the unknown and you have no idea what's going on, learning about this massive world bit by bit alongside the Expeditioners is rewarding and deeply satisfying. Be prepared for strong emotional responses, this story is very visceral and intense, again not much to say other than it's a masterpiece. Like most Overwhelmingly Positive games I saw the vision from the very beginning with the Gommage and couldn't stop till I got to the end, Acts 1 and 2 are a fantastic story that will constantly drive you forwards to really understand what's going on in this world, and Act 3 was a little messy with respect to the best sequence to pursue the vast array of 'postgame' content, but it came together pretty nicely and led to a fantastic finish (couldn't really handle the superboss tho...everything else was great). Lorien Testard's soundtrack is peak, enough said.",
    },
    {
      title: "Monster Hunter Stories",
      type: "Game",
      review: "Surprisingly great and got sucked into this one, it really is superior to modern Pokemon in a lot of ways BUT it struggles with something I think the Pokemon Legends games have done well, which is cycling new Pokemon consistently since the wild encounters are of a good enough or even higher level which justifies their addition to the team, making the party building process much more compelling. MHS was pretty strong in this regard but starting everything off at Level 1 kinda hurts. But of course I'm generally of the opinion that this game is a fantastic example of the 'creature capture' genre, and it was a great first experience with the MH franchise. All the monsters look awesome (which fits my personal taste a bit better than the wide variety of Pokemon which often have more cute or simplistic designs), and the story was pretty good, definitely better than a lot of the repetitive Pokemon narratives. Of course there's more to this than pure comparisons, the game stands out by merging traditional MH mechanics with a turn-based system and fighting alongside the monsters, which just radiates aura. In fact you need to acquire a lot of aura by acting in sync with your partner 'monstie' to execute the most powerful attacks. The huge cast of monsters from MH lore really shines here, and it makes this adventure a pleasure to see through (although like many RPGs it suffers from isolated postgame content that requires a dedicated grind to level up enough to enjoy)",
    },
    {
      title: "TLOZ: The Windwaker",
      type: "Game",
      review: "Came back to this after a LONG time, from HD back to the original, ",
    },
    {
      title: "Balatro",
      type: "Game",
      review: "",
    },
    {
      title: "TLOZ: Breath of the Wild",
      type: "Game",
      review: "",
    },
    {
      title: "TLOZ: Echoes of Wisdom",
      type: "Game",
      review: "",
    },
    {
      title: "Mario and Luigi: SS, PiT, BIS, Brothership, and tbh Super Mario RPG as well",
      type: "Game",
      review: "Compiled this series into a single overall review.",
    },
    {
      title: "Pokemon Violet",
      type: "Game",
      review: "",
    },
    {
      title: "Pokemon Legends: Arceus",
      type: "Game",
      review: "",
    },
    {
      title: "BTD6",
      type: "Game",
      review: "",
    },
    {
      title: "Civilization VI",
      type: "Game",
      review: "",
    },
    {
      title: "Catan",
      type: "Game",
      review: "I guess this counts, it's a solid board game and I haven't played it much to be honest, mainly interesting as a sort of predecessor to Civ VI. The hexes are memorable, there's a good amount of strategic depth, but the competitiveness is kinda cooked, ties in to my general preference for PvE games and collaboration/achieving something with friends.",
    },
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

