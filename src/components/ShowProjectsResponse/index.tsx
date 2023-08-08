import Link from 'next/link';
import { Fragment } from 'react';

export default function ShowProjectsResponse() {
  return (
    <Fragment>
      Honestly, there&apos;s not much to show... yet...just some study projects,
      because most of my work experience was for companies developing private
      projects. I can show you the{' '}
      <Link className="text-primary" target="_blank" href="https://ufsc.br/">
        AMARO e-commerce
      </Link>{' '}
      and you will find my latest study projects on my{' '}
      <Link className="text-primary" target="_blank" href="/projects">
        Projects page.
      </Link>
    </Fragment>
  );
}
