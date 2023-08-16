export interface WorkExperience {
  period: string;
  company: string;
  jobTitle: string;
  description: string;
  stack: string[];
}

export const workHistory: WorkExperience[] = [
  {
    period: 'amaro-date',
    company: 'AMARO',
    jobTitle: 'amaro-job-title',
    description: 'amaro-job-description',
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
    period: 'supero-date',
    company: 'SUPERO TECNOLOGIA',
    jobTitle: 'supero-job-title',
    description: 'supero-job-description',
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
    period: 'getmore-date',
    company: 'GETMORE SERVIÇOS LTDA.',
    jobTitle: 'getmore-job-title',
    description: 'getmore-job-description',
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
