export type Work = {
  title: string;
  date: string;
  tags: string[];
  imageSrc: string;
  description?: JSX.Element | string;
};

const sampleWorks: Work[] = [
  // {
  //   date: "2018 - 2023",
  //   title: "Lens Light Life",
  //   imageSrc: "/images/works/1.png",
  //   tags: ["Web Development", "UI Design"]
  // },
  {
    date: "2018 - 2019",
    title: "Social Media",
    imageSrc: "/images/works/2.png",
    tags: ["Mobile App", "Frontend Dev"]
  },
  // {
  //   tags: ["Product Design", "UI/UX Design"],
  //   date: "2019 - 2020",
  //   title: "Smart Glasses",
  //   imageSrc: "/images/works/3.png"
  // },
  {
    tags: ["UI/UX Design", "Inspiration"],
    date: "2020 - 2021",
    title: "Explore Nature",
    imageSrc: "/images/works/4.png"
  },
  {
    tags: ["UI/UX Design", "web Developement"],
    date: "2022 - 2023",
    title: "Unlock Brains",
    imageSrc: "/images/works/5.png"
  }
];

export default sampleWorks;
