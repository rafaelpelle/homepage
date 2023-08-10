import rafaelPictureSrc from '@/../public/images/profile.jpg';
import { AnimatedFullName, BackgroundPattern } from '@/components';
import ChatContainer from '@/components/ChatContainer';
import Head from 'next/head';
import Image from 'next/image';

export default function IndexPage() {
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
            src={rafaelPictureSrc}
            priority
          />
          <div className="container flex flex-col items-center sm:items-start mt-5 sm:ml-5">
            <AnimatedFullName />
            <p className="text-slate-500 sm:pl-2 text-center sm:text-left w-3/4 sm:w-full">
              Front-end web developer specialized in React
            </p>
          </div>
        </div>

        <ChatContainer />
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
