export interface Project {
  title: string;
  description: string;
  githubURL: string;
  liveAtURL?: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    title: 'routes-frontend-challenge',
    description:
      'Requested by a recruiter as a technical challenge. An app that will allow people to perform searches to know the distance of a route that may consist of 2 or more cities, to enable them to plan their travel.',
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
    description:
      "Requested by a recruiter as a technical challenge. An app that let users select between anually or montly membership, fill a payment form, and receive a success/error feedback. Integrated with the company's API.",
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
];
