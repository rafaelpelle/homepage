import { Language } from '@/app/i18n/settings';
import Link from 'next/link';
import { Fragment } from 'react';

export interface ShowProjectsResponseProps {
  lng: Language;
}

export default function ShowProjectsResponse({
  lng,
}: ShowProjectsResponseProps) {
  return (
    <Fragment>
      Honestly, there&apos;s not much to show... yet...just some study projects,
      because most of my work experience was for companies developing private
      projects. I can show you the{' '}
      <Link
        className="text-primary"
        target="_blank"
        href="https://amaro.com/br/pt/"
        prefetch={false}
      >
        AMARO e-commerce
      </Link>{' '}
      and you will find my latest study projects on my{' '}
      <Link className="text-primary" href={`/${lng}/projects`} prefetch={false}>
        Projects page.
      </Link>
    </Fragment>
  );
}
