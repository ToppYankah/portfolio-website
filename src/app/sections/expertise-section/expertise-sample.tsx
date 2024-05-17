export type Expertise = {
  name: string;
  years: number;
  level: string;
};

const sampleExpertise: Expertise[] = [
  {
    years: 5,
    name: "HTML5 & CSS3",
    level: "Professional",
  },
  {
    years: 5,
    name: "Javascript",
    level: "Experienced",
  },
  {
    years: 3,
    level: "Senior",
    name: "React / React Native",
  },
  {
    level: "Senior",
    name: "Dart / Flutter",
    years: 3,
  },
  {
    level: "Senior",
    name: "Figma UI Tool",
    years: 2,
  },
  {
    level: "Intermediate",
    name: "Adobe Illustrator",
    years: 2,
  },
  {
    level: "Senior",
    name: "Wordpress",
    years: 3,
  },
];

export default sampleExpertise;
