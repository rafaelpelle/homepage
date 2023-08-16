export interface Project {
  title: string;
  description: string;
  githubURL: string;
  liveAtURL?: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    title: 'homepage',
    description: 'homepage-description',
    githubURL: 'https://github.com/rafaelpelle/homepage',
    liveAtURL: 'https://rafaelpelle.tech/',
    stack: [
      'React',
      'Hooks',
      'TypeScript',
      'Tailwind CSS',
      'Testing Library',
      'Cypress',
    ],
  },
  {
    title: 'routes-frontend-challenge',
    description: 'routes-description',
    githubURL: 'https://github.com/rafaelpelle/routes-frontend-challenge/',
    liveAtURL: 'https://routes-challenge.rafaelpelle.tech/',
    stack: [
      'React',
      'Redux',
      'Sagas',
      'Hooks',
      'TypeScript',
      'Material-UI',
      'Testing Library',
      'Cypress',
    ],
  },
  {
    title: 'checkout-frontend-challenge',
    description: 'checkout-description',
    githubURL: 'https://github.com/rafaelpelle/checkout-frontend-challenge/',
    liveAtURL: 'https://checkout-challenge.rafaelpelle.tech/',
    stack: [
      'React',
      'Redux',
      'Sagas',
      'Hooks',
      'JavaScript',
      'Styled Components',
      'Cypress',
    ],
  },
  {
    title: 'github-list-challenge',
    description: 'github-list-description',
    githubURL: 'https://github.com/rafaelpelle/github-challenge/',
    liveAtURL: 'https://github-list.rafaelpelle.tech/',
    stack: ['React', 'Redux', 'Sagas', 'TypeScript', 'Material-UI'],
  },
];
