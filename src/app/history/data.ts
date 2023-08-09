export interface WorkExperience {
  period: string;
  company: string;
  jobTitle: string;
  description: string;
  stack: string[];
}

export const workHistory: WorkExperience[] = [
  {
    period: 'SEP 2021 - Mar 2023',
    company: 'AMARO',
    jobTitle: 'FRONT-END DEVELOPER',
    description:
      "Working at AMARO I was responsible for maintaining features and create new ones on the company's e-commerce. It was my first time working with design system, micro front-ends, web vitals, data analytics and SEO. Had daily experience with error logging and monitoring. Also had the opportunity to collaborate in a large team of front-end developers with pair programming sessions and code review.",
    stack: [
      'React',
      'Redux',
      'Next.js',
      'TypeScript',
      'SASS',
      'Figma',
      'E-commerce',
    ],
  },
  {
    period: 'OCT 2019 - SEP 2021',
    company: 'SUPERO TECNOLOGIA',
    jobTitle: 'FRONT-END DEVELOPER',
    description:
      "At Supero software factory I've worked with multiple projects for different clients, maintaining legacy code and building projects from scratch. Usually working as the only front-end developer on the project, without code review, but delivering reliable features and fixes.",
    stack: [
      'React',
      'Redux',
      'JavaScript',
      'Bootstrap',
      'Material-UI',
      'Figma',
    ],
  },
  {
    period: 'MAY 2018 - OCT 2019',
    company: 'GETMORE SERVIÇOS LTDA.',
    jobTitle: 'FRONT-END DEVELOPER',
    description:
      "It was my first internship and then full-time job. I had the opportunity to collaborate not only in software development, but in the business development too, because it was a startup without a well defined product. I was the only front-end developer at my squad and we created a white-label cashback platform from scratch to rent to multiple clients. It was rented to the next bank. I was mentored by a more experienced developer and I saw how important it is. That's why I like to help less experienced developers to improve their skills.",
    stack: [
      'React',
      'Redux',
      'TypeScript',
      'Material-UI',
      'Figma',
      'Financial',
    ],
  },
];
