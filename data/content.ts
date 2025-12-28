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

export interface Content {
  profile: Profile;
  research: Project[];
  projects: Project[];
}

export const content: Content = {
  profile: {
    name: "Divij Muthu",
    tagline: "Computer Science Student at UC Berkeley",
    bio: "Hi! I'm Divij Muthu...welcome to my personal website! I'm passionate about machine learning, software applications, and research.",
    image: "/images/profile.jpg",
    social: {
      github: "https://github.com/divijmuthu",
      linkedin: "https://www.linkedin.com/in/divij-muthu-1a55b72aa/",
      email: "divij_muthu@berkeley.edu",
    },
  },
  research: [
    {
      title: "Analysis and Implementation of Machine Learning Approaches to Identifying DDoS & Benign Network Traffic",
      thumbnail: "/images/ddos-research.png",
      authors: "Divij Muthu",
      venue: "UCIxGATI Science Journal",
      description: "Studied various machine learning models such as Decision Trees, Random Forest, and SVM; implemented these models to identify hostile network traffic using the CICDDoS2019 dataset, a common industry benchmark for testing. Compared and contrasted pros and cons of these models; provided recommendations for future machine learning approaches to isolating and throttling traffic associated with a DDoS attack.",
      links: [
        { name: "Paper", url: "https://scienceyouth.org/web/viewer.php?id=175" },
      ],
      tags: ["Machine Learning", "Network Security", "DDoS Detection"],
    },
    {
      title: "Tabu Search-guided Sigmoid Heuristic for Identification of the Longest Common Subsequence of Multiple Sequences",
      thumbnail: "/images/lcs-research.png",
      authors: "Divij Muthu",
      venue: "Pioneer Academics",
      description: "The problem of determining the longest common subsequence for an arbitrary number of strings is NP hard...the optimal approach is of exponential time complexity when the number of input strings varies; as such, a heuristic-based solution is appealing, since it can return a reasonably accurate solution relatively quickly.",
      links: [],
      tags: ["Algorithms", "Heuristics", "Optimization"],
    },
  ],
  projects: [
    {
      title: "Project 1",
      thumbnail: "/images/project1.png",
      authors: "Divij Muthu",
      venue: "Personal Project",
      description: "Description of project 1.",
      links: [
        { name: "Code", url: "https://github.com/divijmuthu" },
      ],
      tags: ["Software", "Web Development"],
    },
    {
      title: "Project 2",
      thumbnail: "/images/project2.png",
      authors: "Divij Muthu",
      venue: "Personal Project",
      description: "Description of project 2.",
      links: [
        { name: "Code", url: "https://github.com/divijmuthu" },
      ],
      tags: ["Software", "Machine Learning"],
    },
  ],
};

