import { useTranslation } from '@/app/i18n/client';
import { Language } from '@/app/i18n/settings';
import Link from 'next/link';
import { Fragment } from 'react';

export interface AboutCareerResponseProps {
  lng: Language;
}

export default function AboutCareerResponse({ lng }: AboutCareerResponseProps) {
  const { t } = useTranslation(lng, 'chat', undefined);

  return (
    <Fragment>
      {t('about-career-part1')}
      <Link
        className="text-primary cursor-pointer"
        target="_blank"
        prefetch={false}
        href="https://ufsc.br/"
      >
        UFSC
      </Link>
      {t('about-career-part2')}
      <Link
        className="text-primary cursor-pointer"
        href={`/${lng}/history`}
        prefetch={false}
      >
        {t('work-history-page')}
      </Link>
    </Fragment>
  );
}
