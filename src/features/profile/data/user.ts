import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Nikhil",
  lastName: "S A",
  displayName: "Nikhil",
  username: "nikhil",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: ["Software Engineer", "Open Source Contributor"],
  address: "",
  phoneNumber: "ODU5MDMwNzI4Mg==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "bmlraGlsc2FiYnpAZ21haWwuY29t", // base64 encoded
  website: "https://nikhil.com",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Engineer",
      company: "Cybermind Works",
      website: "https://www.cybermindworks.com/",
    },
  ],
  about: `
I’m a full-stack developer who enjoys turning complex problems into clean, scalable solutions.
With experience across modern web frameworks, cloud infrastructure, and databases, I build products end-to-end.
I focus on performance, maintainability, and real-world impact.
Always curious, I keep learning and adapting to new technologies.
I value clarity in code, collaboration in teams, and growth through challenges.

  `,
  avatar: "/assets/avatar.jpeg",
  ogImage: "",
  namePronunciationUrl: "",
  keywords: ["nikhil", "nikhil7282", "nikhil sa", "nikhil", "nik", "ni"],
  dateCreated: "2023-10-20", // YYYY-MM-DD
};
