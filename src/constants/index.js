export const myProjects = [
  {
    id: 1,
    title: "Food Delivery Application",
    description:
      "A full-stack food delivery platform with category-based listings, secure payments, and cloud media management.",
    subDescription: [
      "Built a production-ready web app with Spring Boot for backend and MongoDB for data storage.",
      "Implemented category-based listings, JWT authentication, and role-based access control.",
      "Integrated RazorPay API for secure, real-time payment processing.",
      "Used AWS S3 for scalable, secure product image storage and retrieval.",
    ],
    href: "https://github.com/adityaBhatt02/FoodDelivery",
    logo: "",
    image: "/assets/projects/food-delivery.png",
    tags: [
      { id: 1, name: "Java", path: "/assets/logos/java.png" },
      { id: 2, name: "Spring Boot", path: "/assets/logos/springboot.png" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.png" },
      { id: 4, name: "AWS S3", path: "/assets/logos/aws.png" },
      { id: 4, name: "Razorpay", path: "/assets/logos/razorpay.png" },
    ],
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
    "A web app that generates AI-powered real-time content based on user prompts using Gemini AI.",
    subDescription: [
      "Integrated Gemini AI API for topic-based content generation.",
      "Implemented authentication and session management with Clerk.",
      "Developed API routes in Next.js to process prompts server-side.",
      "Built a responsive UI with Tailwind CSS and TypeScript.",
    ],
    href: "https://github.com/adityaBhatt02/AI_Content_Generator",
    logo: "",
    image: "/assets/projects/ai-content.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.png" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.png" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Gemini AI", path: "/assets/logos/gemini.png" },
    ],
  },
  {
    id: 3,
    title: "AI-Doctor Medical Chatbot",
    description:
      "An intelligent medical chatbot capable of understanding text and image inputs for context-aware, multi-modal responses.",
    subDescription: [
      "Powered by Meta’s LLaMA 3 models via GROQ API for natural and accurate medical responses.",
      "Accepts both text and image inputs, including X-rays and skin lesion photos.",
      "Provides dual responses: general answers and medical-grade analysis.",
      "Responsive, modern UI with real-time low-latency interaction.",
    ],
    href: "https://github.com/adityaBhatt02/AI-Doctor_MedicalChatbot",
    logo: "",
    image: "/assets/projects/ai-doctor.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.png" },
      { id: 2, name: "FastAPI", path: "/assets/logos/fastapi.webp" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "LLaMA 3", path: "/assets/logos/llama.png" },
    ],
  },
  {
    id: 4,
    title: "Web3 Crowdfunding dApp",
    description:
      "A decentralized crowdfunding platform enabling blockchain-based campaign creation and contributions.",
    subDescription: [
      "Developed smart contracts in Solidity for secure tiered funding.",
      "Integrated Thirdweb SDK and CrowdfundingFactory for scalable campaign deployment.",
      "Connected blockchain logic with wallet-based frontend interactions.",
      "Ensured seamless dApp performance and transaction flow.",
    ],
    href: "https://github.com/adityaBhatt02/CrowdFunding",
    logo: "",
    image: "/assets/projects/web3-crowdfunding.png",
    tags: [
      { id: 1, name: "Solidity", path: "/assets/logos/solidity.png" },
      { id: 2, name: "Thirdweb", path: "/assets/logos/thirdweb.png" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "Hardhat", path: "/assets/logos/hardhat.png" },
    ],
  },
];


export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/aditya-bhatt-170a26227/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/adit_yabhatt234/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "Github",
    href: "https://github.com/adityaBhatt02/",
    icon: "/assets/socials/github.png",
  }
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "Ensured data privacy for customers and partners through industry-compliant protocols.",
      "Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];


