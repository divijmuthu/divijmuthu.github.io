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
  type: "Movie" | "TV Show" | "Book" | "Game" | "Album" | "Podcast" | "Band" | "Music" | "Other";
  icon?: string; // Path to icon/image
  rating?: number; // 1-10 or 1-5 scale
  review: string;
  date?: string;
  span?: 1 | 2 | 3; // Number of columns to span (1 = 1/3, 2 = 2/3, 3 = full width). Defaults to 1.
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
  link?: string;
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
    bio: "Hi! I'm Divij Muthu, currently a sophomore studying Electrical Engineering and Computer Sciences at UC Berkeley. I'm working on 3D image reconstruction via PMUTs in the Liwei Lin Lab, and I'm interested in signal processing, machine learning, practical hardware incorporating sensors & MEMS devices e.g. PMUTs, and software development.",
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
      venue: "IEEE MEMS 2026",
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
      authors: "",
      venue: "Personal Project",
      description: "Implemented C++ modules to simulate noisy sensor data streams (IMU, GPS, Compass, Barometer), and extract features including mean, variance of 3D coordinates, DFT for motion frequencies, modeling activities like walking, jumping. Used Pybind11 to expose C++ modules to Python for real-time data generation to build the classifier model. Trained a lightweight neural network in PyTorch to classify the activity being performed from a live data window of 256 samples via extracted features, observing ~98% accuracy & 0.98 f1-score with 100 Hz sampling rate and 6 activities. Built an interactive demo in PyGame with ~59 fps, ~30 us to simulate data in C++, ~0.05 ms to classify with ML.",
      links: [
        { name: "Code", url: "https://github.com/divijmuthu/simSensors" },
      ],
      tags: ["C++", "PyTorch", "PyBind", "PyGame", "Machine Learning", "Signal Processing"],
    },
    {
      title: "Secure File Sharing System",
      thumbnail: "/images/ddos-research.png",
      authors: "",
      venue: "CS161: Computer Security",
      description: "Developed a secure file sharing system using Golang, tested with Ginkgo, and incorporating a provided cryptographic library with AES-256 symmetric encryption and HMAC-SHA256 authentication, as well as RSA-2048 asymmetric encryption and Digital Signatures. Allows users to create accounts, store and efficiently append to files, and both share and revoke access to their files in a manner secure from adversaries who can read \& manipulate the underlying database as well as hostile revoked users who seek to regain access.",
      links: [],
      tags: ["Cryptography", 'Go/Golang', 'Ginkgo', "Cybersecurity"],
    },
    {
      title: "Analysis and Implementation of Machine Learning Approaches to Identifying DDoS & Benign Network Traffic",
      thumbnail: "/images/ddos-research.png",
      authors: "",
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
      authors: "",
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
      location: "Pleasant Hill, CA",
      date: "December 2025 - Present",
      link: "https://www.topseedscoach.com",
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
      link: "https://linlab.me.berkeley.edu",
      description: [
        "Built an automated data acquisition pipeline using Python, C++, and PySerial to interface with Teensy/Arduino MEGA microcontrollers, including firmware for precise sub-microsecond pulse timing, retrieving real-time oscilloscope ADC data via SPI, and signal processing via background subtraction, Butterworth filtering from SciPy.",
        "Adapted MATLAB simulation from EE367: Computational Imaging to test novel setup for 3D image reconstruction via ultrasound transducers (PMUTs), compressed sensing, and reconstruction algorithms (FISTA, ADMM-TV).",
        "Designing a custom mixed-signal PCB in KiCad to miniaturize the system, integrating a Teensy 4.1, transmit/receive switching, signal amplification (TI VCA5807), and an 18-bit ADC into a compact device for portable deployment.",
      ],
      tags: ["Python", "C++/Arduino","Embedded Systems", "Signal Processing", "MEMS", "Hardware and PCB Design", "KiCad"],
    },
    {
      title: "Lab Tutor",
      company: "EECS16A: Intro to Signals & Systems",
      location: "Berkeley, CA",
      date: "August 2025 - Present",
      link: "https://eecs16a.org",
      description: [
        "Supporting students' learning of key linear algebra and signal processing concepts, aiding completion of challenging labs e.g. NumPy fundamentals, simplified Shazam, simulating an Acoustic Positioning System, PCA-based Voice Recognition for several words."
      ],
      tags: ["Numpy", "PCA", "Linear Algebra", "Signal Processing"],
    },
    {
      title: "Full Stack Software Engineering Intern",
      company: "Take2 Movies and Shows",
      location: "Virtual",
      date: "March 2025 - August 2025",
      link: "https://apps.apple.com/ca/app/take2-movies-shows/id6737178731",
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
      span: 3,
      review: "Really enjoyed this one, the story is excellent and the character design is fantastic, so AdHoc Studio pretty much hit it out of the park when it comes to the most critical aspect of this type of game. The dispatching gameplay is great, it's a good blend of challenge and reward, although once you understand the synergy mechanic and get some decent levels + abilities you can basically just send certain pairs mindlessly and effectively be guaranteed a success (which is satisfying after so many tricky choices on who to send as well as fails!!!). The hacking is mediocre but not bad and an acceptable change of pace, the autofail mechanic is cool but probably should've been mentioned earlier before a first-timer puts too many points into strength across the overall team. As usual the choices don't really matter but this honestly works pretty well, it's the same strong core story with some fun choices sprinked throughout; unfortunately it also kind of leads to the typical 'clear good ending' issue where one set of choices is pretty clearly ideal (the consequences of this choice are evident in the climax), which in turn makes other options/outcomes feel like subpar mistakes, essentially defeating the point of branching outcomes (even much lauded RPGs like Mass Effect have this issue, you either recruit a party member...or you just don't and lose out on a ton of content). The buildup throughout the story is fantastic, again it's just really good on this front and there's not too much to say without being forced to fully dissect it, including spoilers. Overall a very strong new IP with huge potential, and the Youtuber VAs are great too.",
    },
    {
      title: "Pokemon Legends: Z-A",
      type: "Game",
      span: 3,
      review: "Pretty good, honestly agree with the general 8/10 consensus, the story is okay but like SV it really picks up at the end with a strong climax (if only we could have had this momentum or some hints on the way), the gameplay is quite enjoyable but I think PL:A was more fun personally, I didn't feel as engaged and it honestly got boring a lot faster especially when the city looks the same everywhere, feel like there was much more scope for a variety of environments even within the city, and most of the buildings just being inaccessible bricks really hurts the vibe. I think these are moreso symptoms of the underlying focus on making these games cheaply and quickly which naturally has some major drawbacks from an artistic perspective, and this is acutely felt in a highly competitive gaming landscape where works of extreme passion and absurd quality seem to be emerging from every corner. The new megas are fine and took some time to grow on me, but the battles generally end so fast with the new real-time system that it's hard to recommend this approach over traditional Pokemon battles which relied more on careful strategy and benefited from the classic dynamic of out-thinking your opponent. It's Pokemon so it's still pretty fun and they handled Megas in an interesting way allowing you to use quite a few, Victreebel was an unexpected goat bc healing moves are insanely effective against bosses with boosted HP, the music is strong and the rogue mega battles are an enjoyable refinement of the noble battles in PL:A. Hence the 8/10, it's good fun but could easily be a masterpiece and is somewhat polarizing.",
    },
    {
      title: "Clair Obscur: Expedition 33",
      type: "Game",
      span: 3,
      review: "The absolute GOAT. This entire game is a work of art (spoiler but this is very literal), every character is compelling, every environment is insanely detailed and it's hard not to just pause and stare in awe at what Sandfall has created here. The gameplay is exactly what I've been looking for (see the M&L series discussion below) and this is one of the truly fantastic games where I'm glued to it for weeks and can't wait to play more. Will probably circle back to it for NG+ and the new update when the next Clair Obscur is announced, not surprised it swept the awards as it's a game you just have to experience. The game's at its best when it's capturing the fear of the unknown and you have no idea what's going on, learning about this massive world bit by bit alongside the Expeditioners is rewarding and deeply satisfying. Be prepared for strong emotional responses, this story is very visceral and intense, again not much to say other than it's a masterpiece. Like most Overwhelmingly Positive games I saw the vision from the very beginning with the Gommage and couldn't stop till I got to the end, Acts 1 and 2 are a fantastic story that will constantly drive you forwards to really understand what's going on in this world, and Act 3 was a little messy with respect to the best sequence to pursue the vast array of 'postgame' content, but it came together pretty nicely and led to a fantastic finish (couldn't really handle the superboss tho...everything else was great). Lorien Testard's soundtrack is peak, enough said in that respect. Overall I concur with Esquie, this is a pretty wheeeee experience and the whoooo moments add to its emotional core. Easy 10/10, a generational event with apt comparisons to BG3 which I've ought to get around to at some point. Though this RPG is very accessible and more streamlined than the extremely 'crunchy' CRPG genre, which makes it easy to get sucked into this expedition.",
    },
    {
      title: "Monster Hunter Stories",
      type: "Game",
      span: 3,
      review: "Surprisingly great and got sucked into this one, it really is superior to modern Pokemon in a lot of ways BUT it struggles with something I think the Pokemon Legends games have done well, which is cycling new Pokemon consistently since the wild encounters are of a good enough or even higher level which justifies their addition to the team, making the party building process much more compelling. MHS was pretty strong in this regard but starting everything off at Level 1 kinda hurts. But of course I'm generally of the opinion that this game is a fantastic example of the 'creature capture' genre, and it was a great first experience with the MH franchise. All the monsters look awesome (which fits my personal taste a bit better than the wide variety of Pokemon which often have more cute or simplistic designs), and the story was pretty good, definitely better than a lot of the repetitive Pokemon narratives. Of course there's more to this than pure comparisons, the game stands out by merging traditional MH mechanics with a turn-based system and fighting alongside the monsters, which just radiates aura. In fact you need to acquire a lot of aura by acting in sync with your partner 'monstie' to execute the most powerful attacks; your monstie is probably doing most of the heavy lifting, leading to a nuanced system where the player is directly involved in fights but extremely vulnerable and supposedly more of a supporting combatant, although you can just attack with both like I did :p. The huge cast of monsters from MH lore really shines here, and it makes this adventure a pleasure to see through--although like many RPGs it suffers from isolated postgame content that requires a dedicated grind to level up enough to enjoy, beat Kushala Daora and acquired a few elder dragons but between the gene slot alignment mess, ridiculous power increase for Silver Rathalos, and slow leveling, I was ready to move on.",
    },
    {
      title: "South Park: The Stick of Truth",
      type: "Game",
      span: 3,
      review: "Funny af but not for the light-hearted, in the sense that it's got your typical highly edgy South Park humor. As an example, one of the major bosses, which I'll refer to as the GNZF, is so absurd and hilarious and controversial and ridiculous that it perfectly captures the shocking yet hysterical humor characteristic of South Park. The gameplay is again weirdly similar to Mario & Luigi and Expedition 33, although instead of dodging your careful inputs just mitigate some damage. Ironically the inputs needed are often much simpler but also trickier and easy to mess up, and a battle's momentum can easily turn against you, especially against some of the more resilient enemies later on. Fortunately it's pretty easy to get good at the combat, particularly via the bleed effect which does ridiculous recurring damage to enemies and is only limited by the cap on bleed stacks that the player can inflict upon opponents. In fact, all the status effects are pretty hilarious subversions of typical RPG ailments, and like much of the game they do an excellent job of indulging the boys' imaginations while carrying substantial power against normal foes; the same goes for the weapons and badge equipment, leading to a solid system for character builds. The city of South Park itself is captured well, it's fun to explore with tons of secrets and valuable loot for your efforts, and the plot is wonderful. This game confirms my suspicions that Matt and Trey often just need some time to cook, the South Park games inherently can't be made in a week like the show itself and I feel like that does wonders for the quality of the humor and the strength of the overall plot. The satirical approach to gaming tropes is spot on, if slightly dated, and the sheer dedication behind this game is evident even in the mere flavor text for the random junk you pick up throughout your travels. A wonderful experience but be ready for some sus stuff...oh yeah, Canada is pretty cool as well, the 8-bit music goes insanely hard in that segment. The main takeaway is to be wary of your local taco bell.",
    },
    {
      title: "TLOZ: The Windwaker",
      type: "Game",
      span: 3,
      review: "Came back to this after a LONG time, from HD back to the original, ",
    },
    {
      title: "Balatro",
      type: "Game",
      span: 3,
      review: "",
    },
    {
      title: "TLOZ: Breath of the Wild",
      type: "Game",
      span: 3,
      review: "",
    },
    {
      title: "Kirby and the Forgotten Land",
      type: "Game",
      span: 3,
      review: "Another strong entry in a Nintendo mainstay franchise which, like TLoZ, seemingly can do no wrong, this is a charming and energetic romp through yet another 'strange dimension' in keeping with the philosophy of past games being irrelevant. The plot is fine, the boss confrontations as usual do a good job of selling the threat, and like most Kirby games it's surprisingly strong on raw environmental storytelling, with every level having some VERY well-hidden secrets and tons of effort put into establishing this world's history and character. I had some of Prof. Jelani Nelson's lectures on in the background while playing the early stages of this game which prevented me from learning of an OP dodging mechanic which apparently makes this one of the easiest games in the entire series...needless to say I wasn't aware of this and had to turn down the difficulty for the final boss just to get it done, though this probably wasn't necessary. The ability upgrade process is great, with CHALLENGING optional mastery stages for each ability which are quite fun and enjoyable to complete, resembling the badge challenges from Mario Wonder (although this predates that game lol). Overall a great return to 3D for Kirby after a very long time, excited to see what the pink puffball gets up to next time around.",
    },
    {
      title: "TLOZ: Echoes of Wisdom",
      type: "Game",
      span: 3,
      review: "",
    },
    {
      title: "Mario and Luigi: SS, PiT, BIS, Brothership, and tbh Super Mario RPG as well",
      type: "Game",
      span: 3,
      review: "Compiled this series into a single overall review. For me, the main draw of this series has always been the battle system, which basically primed me for the GOAT Expedition 33 (see above). Ever since I first gorged myself on ProsafiaGaming's boss compilations from this series at a young age, I've been obsessed with the core mechanics of effectively playing a rhythm game to maximize your offensive prowess and potentially avoid or counter any opponents' attacks. This core loop offers so much variety, substantial depth (at least when you're good enough at defending to avoid most attacks but not so perfect you can dodge everything, leading to tough decisions about when to dodge and how hard to strike to end fights fast), and satisfaction when you master a lengthy skill's sequence to get that legendary EXCELLENT rating, or finally evade a boss' moves perfectly. The stories in each game are pretty solid too, I think I enjoyed PiT the most which isn't a very common opinion, it's at least even with Bowser's Inside Story as my favorite pair. Superstar Saga was enjoyable especially with the core twist but felt a bit too straightforward, and I lowkey struggled the most in the battles here for some reason??? BiS and PiT were pretty much the peak with fascinating stories, tons of characters, and great humor. Brothership looks great but I have to agree with the core criticism of its bloatedness, the game does not deserve a 50 hour playtime and feels quite padded. The battle plug system makes fights fun but I think the core weakness is the fact that all the other characters are just extension cords/outlets/the same, Mario RPGs in general do a good job of introducing MANY unique 'species' of characters to interact with and that was sorely lacking here. The story took a while to warm up (which seems to be a trend with some of these long-winded RPGs) but of course delivered from Bowser's incursion onwards (if all the cutscenes were on the level of this one this game would be an utter masterpiece). Overall a strong series, SM RPG is the oldest and a clear ancestor, a quick and enjoyable RPG in the mold of Square classics and offers a healthy mix of fun battles with decent depth, the odd minigame here and there, and a simple equipment progression, although there is the notable 'Work Pants' gear which is quite better than some following 'upgrades' and warranted its own article. It goes without saying that the music throughout the franchise is excellent.",
    },
    {
      title: "Mario Odyssey and Wonder",
      type: "Game",
      span: 3,
      review: "",
    },
    {
      title: "Pokemon Violet",
      type: "Game",
      span: 3,
      review: "",
    },
    {
      title: "Pokemon Legends: Arceus",
      type: "Game",
      span: 3,
      review: "",
    },
    {
      title: "BTD6",
      type: "Game",
      span: 3,
      review: "This is one of those Overwhelmingly Positive GOATs which you can literally play forever, not because of endless permutations of runs like roguelikes or strategy game scenarios, but just because of the insane amount of raw content (ok, there's technically infinite content because of map creation but there's easily years worth of official content already). Probably a true must-play for everyone, affordable and endless fun with constant updates and deep, ever-shifting strategy (sometimes due to well-earned buffs or nerfs, other times because of bugs...looking at you The Final Harmonic). The towers are great, the music is strong, if you feel like seriously pushing on the economic side you can go for farming, co-op is enjoyable, Odysseys are a healthy challenge when you're up for it, bosses push the game to its limits, and daily challenges are healthy morning puzzles. Reminds me of Battle Cats, I guess they're both technically 'tower defense' games although this follows that mold much better and is probably emblematic of the genre as a whole (so is PvZ, in fact none of these games have true towers because they're all sentient animals or plants, weird), there's even a gacha although it's just for insta monkeys which are admittedly very useful. Personally love the naval towers since they're consistently effective and easy to set up, albeit costly and inherently situational because of map restrictions. There's a lot of underlying mechanics but they're not that critical to learn and aside from the hardest maps there's tons of room for creativity.",
    },
    {
      title: "Civilization VI",
      type: "Game",
      span: 3,
      review: "",
    },
    {
      title: "Catan",
      type: "Game",
      span: 3,
      review: "I guess this counts, it's a solid board game and I haven't played it much to be honest, mainly interesting as a sort of predecessor to Civ VI. The hexes are memorable, there's a good amount of strategic depth, but the competitiveness is kinda cooked, ties in to my general preference for PvE games and collaboration/achieving something with friends.",
    },
    {
      title: "The Battle Cats",
      type: "Game",
      span: 3,
      review: "Many MANY enjoyable hours in this game, went through a lot of mobile games back in the day and this is the one that stuck. Can effectively be played for free, especially with 'certain methods' of ensuring you can acquire good gacha units. The gameplay is simple and enjoyable, with surprising strategic depth involved in tailoring your loadout for each stage. SO SO MANY memorable bosses and stages whose names are infamous among the community, and practically infinite content; moved on after 100s of hrs and many years but there is still SO much more, probably never touching 4 crown UL tho. Some of the latest grinds are also concerning e.g. behemoth stones and dark catseyes, the fact that this mobile game managed to make such mechanics which AREN'T pay to win because you literally have to manually complete tons of stages for stones and can't even get more than a few catseyes period is kinda wild. Got drawn back into this purely by the great soundtrack, especially Into the Future's jazz infused battle theme, the confrontation at the Big Bang, and even the catchy classic battle theme from the very beginning. Got sucked into the grind for Manic units, then the Advent bosses and the Legends grind and the Aku Realms and...yeah. Also got me into Evangelion at a much younger age than I probably should have known about it, I think literally the same age as the pilots themselves, so I was similarly completely unequipped to understand the deeper madness & brilliance of that series until much later.",
    },
    {
      title: "Nostalgia...Yo-Kai Watch, Pokemon Gens 6 & 7 (seriously), and World of Tanks, I guess?",
      type: "Game",
      span: 3,
      review: "What a mix we've got here...YKW was great, totally obsessed with this, this brings to mind Yu-Gi-Oh as well though I only really got a few cards and some strange anime memories out of that, it was definitely enjoyable. Man, even PvZ2...anyways back to YKW, which I feel was pretty strong but unfairly maligned (this turn of phrase reminds me of Calvin and Hobbes...geez can we get any closer to peak suburban youth media consumption) for its similarities to Pokemon, which is quite absurd especially in light of Monster Hunter Stories, which I experienced MUCH later but honestly seems far closer to Pokemon's core mechanics and yet is now receiving a 3rd entry for global release on the Switch 2 to much fanfare while YKW is...in a catatonic state, to say the least. I'll admit the use of recolors to pad the Medallium probably wasn't the best, but like The Battle Cats the general creativity here was off the charts and deeply enjoyable, with much more intriguing plots. Not sure if it was the difficulty of translating over cultural elements (which I feel is actually a great opportunity to learn more about another nation's deep history, just saw Ne Zha 1+2 recently and this is quite a tangent but these were excellent and probably a great example of what can be done when a whole country locks in to produce its own take on an exciting medium replete with its own unique stories). So yeah...too bad the series has found itself on dire straits, though I fear they may have burned through their reserves for new mechanics and Yo-Kai way faster than necessary, leaving little for later entries that built on top of colossal foundations, which I guess is pretty unusual for Nintendo's general philosophy of being able to pick up and play any game in its franchises wholly independently of any other entries. Which brings to Alpha Sapphire, Moon, and Ultra Sun, aka my core experience with Pokemon on the good old 3DS (XL and new? the variants got weird with this device), which were pretty fun, although to be honest the insane randomizer playthroughs by TyranitarTube that got me to actually get Alpha Sapphire for myself was a lot cooler than the real deal, if absurdly hard and well beyond my abilities to complete, even now. Of course we have WoT, a product of my fascination with military vehicles, perhaps the finest examples of engineering in the world as they leverage the latest technologies, uncapped budgets, and the flashiest engines of destruction available to man to bring forth hell for 'the enemy.' Like a lot of games this one is probably more fun to watch as it looks great and it's really fun to see the tanks go at it, especially since most of the best ones in this game are experiments that never entered production (presumably to avoid introducing tech from the 1950s and beyond which would severely alter the core gameplay and introduce much more complex features, night vision comes to mind). Overall this was a peak era which makes for a VERY dense entry.",
    },
    {
      title: "Sabaton",
      type: "Band",
      span: 3,
      review: "Enjoyable music, historical themes are pretty cool and have taught me so much about specific heroes and events. Really complex themes, naturally, but the music goes hard and I think it's pretty respectful while acknowledging how messy history can be. Have been listening for quite a while now, in general probably the main standard band I listen to along with various video game soundtracks.",
    },
    {
      title: "TLOZ: Soundtracks in general",
      type: "Music",
      span: 3,
      review: "Wanted to highlight the sheer brilliance of the sound design across the entire franchise, there are so many iconic themes for practically every basic player action, environmental shift e.g. discoveries in a dungeon, acquiring an item from a chest, defeating a boss, even just healing and using classic items like the hookshot (you probably heard all these themes going off in your head as I listed them out). Koji Kondo is the core composer and an absolute genius, and every contributor to this series' masterful sound design has done a fantastic job. I don't know if there's any other series where every little sound effect perfectly captures the intended vibes of a moment, i.e. achieving exactly what's desired for a video game soundtrack.",
    },
  ],
};

