import type { Experience } from "@/features/profile/types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "calibraint",
    companyName: "Calibraint",
    companyLogo: "https://assets.chanhdai.com/images/companies/simplamo.webp",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Software Engineer Intern",
        employmentPeriod: {
          start: "02.2024",
          end: "06.2024",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Develop [Calibraint AI](https://calibraint.com/ai) features.`,
        skills: [
          "TypeScript",
          "Next.js",
          "Node.js", "Express", "MongoDB",
          "React",
          "Tailwind CSS",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "cybermindworks",
    companyName: "Cybermind Works",
    companyLogo: "https://assets.chanhdai.com/images/companies/quaric.svg",
    positions: [
      {
        id: "1",
        title: "Software Engineer Intern",
        employmentPeriod: {
          start: "07.2024",
          end: "02.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Develop [Cybermind Works](https://cybermindworks.com) features.`,
        skills: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "Docker", "Kubernetes","AWS"],
      },
      {
        id: "2",
        title: "Software Engineer - I",
        employmentPeriod: {
          start: "02.2025",
          end: "Present",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Develop [Cybermind Works](https://cybermindworks.com) features.`,
        skills: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "Docker", "Kubernetes","AWS"],
      },
    ],
  }
];
