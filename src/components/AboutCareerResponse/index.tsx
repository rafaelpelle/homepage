import { Language } from '@/app/i18n/settings';
import Link from 'next/link';
import { Fragment } from 'react';

export interface AboutCareerResponseProps {
  lng: Language;
}

export default function AboutCareerResponse({ lng }: AboutCareerResponseProps) {
  return (
    <Fragment>
      I did computer science at{' '}
      <Link
        className="text-primary cursor-pointer"
        target="_blank"
        prefetch={false}
        href="https://ufsc.br/"
      >
        UFSC
      </Link>{' '}
      between 2013 and 2019. My first full-time job as front-end developer was
      May 2018, and I&apos;ve been working with React, Redux, TypeScript...
      since then. Between September 2021 and March 2023 I was working at an
      e-commerce and had some experience with Next.js, SEO, error monitoring...
      Wanna know more? Check my{' '}
      <Link
        className="text-primary cursor-pointer"
        href={`/${lng}/history`}
        prefetch={false}
      >
        Work History page.
      </Link>
    </Fragment>
  );
}
