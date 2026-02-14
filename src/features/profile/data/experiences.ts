import type { Experience } from "@/features/profile/types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "cybermindworks",
    companyName: "Cybermind Works",
    companyLogo: "/assets/cmw_logo.svg",
    positions: [
      {
        id: "1",
        title: "Software Development Engineer - I",
        employmentPeriod: {
          start: "02.2025",
          end: "Present",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Develop [Cybermind Works](https://cybermindworks.com) features.`,
        skills: [
          "TypeScript",
          "Next.js",
          "React",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "MongoDB",
          "PostgreSQL",
          "Redis",
          "Docker",
          "Kubernetes",
          "AWS",
        ],
        isExpanded: true,
      },
      {
        id: "2",
        title: "Software Engineer Intern",
        employmentPeriod: {
          start: "07.2024",
          end: "02.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Develop [Cybermind Works](https://cybermindworks.com) features.`,
        skills: [
          "TypeScript",
          "Next.js",
          "React",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "MongoDB",
          "PostgreSQL",
          "Redis",
          "Docker",
          "Kubernetes",
          "AWS",
        ],
      },
    ],
  },
  {
    id: "calibraint",
    companyName: "Calibraint",
    companyLogo: "/assets/calibraint_company_logo.png",
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
        description: `Actively worked on learning and implementing JavaScript and Node.js, strengthening backend and core programming skills.`,
        skills: [
          "TypeScript",
          "Node.js",
          "Express",
          "MongoDB",
          "React",
          "Tailwind CSS",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
];
