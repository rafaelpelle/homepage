import { useTranslation } from '@/app/i18n/client';
import { Language } from '@/app/i18n/settings';
import Link from 'next/link';
import { Fragment } from 'react';

export interface DownloadCVResponseProps {
  lng: Language;
}

export default function DownloadCVResponse({ lng }: DownloadCVResponseProps) {
  const { t } = useTranslation(lng, 'chat', undefined);

  return (
    <Fragment>
      {t('about-cv')}
      <Link
        className="text-primary cursor-pointer"
        href={`/${lng}/cv.pdf`}
        target="_blank"
        prefetch={false}
      >
        {t('here')}
      </Link>
    </Fragment>
  );
}
