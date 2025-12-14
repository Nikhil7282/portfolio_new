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
Hello, World! I am Nikhil— a Software Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

With 2+ years of experience, I specialize in building high-quality web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

Let's connect and collaborate!
  `,
  avatar: "/assets/avatar.jpeg",
  ogImage: "",
  namePronunciationUrl: "",
  keywords: ["nikhil", "nikhil7282", "nikhil sa", "nikhil", "nik", "ni"],
  dateCreated: "2023-10-20", // YYYY-MM-DD
};
