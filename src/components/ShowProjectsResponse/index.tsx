import { useTranslation } from '@/app/i18n/client';
import { Language } from '@/app/i18n/settings';
import Link from 'next/link';
import { Fragment } from 'react';

export interface ShowProjectsResponseProps {
  lng: Language;
}

export default function ShowProjectsResponse({
  lng,
}: ShowProjectsResponseProps) {
  const { t } = useTranslation(lng, 'chat', undefined);

  return (
    <Fragment>
      {t('about-projects-part1')}
      <Link
        className="text-primary"
        target="_blank"
        href="https://amaro.com/br/pt/"
        prefetch={false}
      >
        {t('amaro-ecommerce')}
      </Link>
      {t('about-projects-part2')}
      <Link className="text-primary" href={`/${lng}/projects`} prefetch={false}>
        {t('projects-page')}
      </Link>
    </Fragment>
  );
}
