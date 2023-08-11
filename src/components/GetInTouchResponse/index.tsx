import { useTranslation } from '@/app/i18n/client';
import { Language } from '@/app/i18n/settings';
import Link from 'next/link';
import { Fragment } from 'react';

export interface GetInTouchResponseProps {
  lng: Language;
}

export default function GetInTouchResponse({ lng }: GetInTouchResponseProps) {
  const { t } = useTranslation(lng, 'chat', undefined);

  return (
    <Fragment>
      {t('send-email')}
      <Link
        className="text-primary cursor-pointer"
        target="_blank"
        href="mailto:rafapelle@gmail.com"
        prefetch={false}
      >
        rafapelle@gmail.com
      </Link>{' '}
      {t('send-message')}
      <Link
        className="text-primary cursor-pointer"
        target="_blank"
        href="https://www.linkedin.com/in/rafael-pelle-23429317a/"
        prefetch={false}
      >
        LinkedIn!
      </Link>
    </Fragment>
  );
}
