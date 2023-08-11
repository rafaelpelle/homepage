import { useTranslation } from '@/app/i18n';
import { Language } from '@/app/i18n/settings';
import { AnimatedFullName, BackgroundPattern } from '@/components';
import ChatContainer from '@/components/ChatContainer';
import Head from 'next/head';
import Image from 'next/image';
import { blurDataURL } from './profileBlurDataURL';

export interface IndexPageProps {
  params: {
    lng: Language;
  };
}

export default async function IndexPage({ params: { lng } }: IndexPageProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'index-page');

  return (
    <>
      <Head>
        <link rel="preload" href="/images/profile.jpg" as="image" />
      </Head>

      <div className="flex flex-col justify-evenly sm:justify-between h-full w-full p-3 mx-auto max-w-full sm:max-w-4xl relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-20">
          <Image
            className="rounded-full bg-blur w-52 sm:w-72"
            alt="Rafael Pelle picture"
            src="/images/profile.jpg"
            width={300}
            height={300}
            priority
            loading="eager"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <div className="container flex flex-col items-center sm:items-start mt-5 sm:ml-5">
            <AnimatedFullName />
            <p className="text-slate-500 sm:pl-2 text-center sm:text-left w-3/4 sm:w-full">
              {t('profile-subtitle')}
            </p>
          </div>
        </div>

        <ChatContainer lng={lng} />
      </div>

      <div className="absolute top-10 sm:top-60 left-0 sm:-rotate-90">
        <BackgroundPattern />
      </div>

      <div className="absolute top-24 sm:top-96 right-0 sm:-rotate-45">
        <BackgroundPattern />
      </div>
    </>
  );
}
