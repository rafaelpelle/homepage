'use client';

import { BackgroundPattern, GitHubIcon, RedirectIcon } from '@/components';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from './data';

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

interface RenderProjectImageProps {
  title: string;
  index: 1 | 2;
  priority: boolean;
}

const RenderProjectImage = ({
  title,
  index,
  priority,
}: RenderProjectImageProps) => (
  <div
    className={`w-screen sm:w-full px-3 sm:px-0 swap-${
      index === 1 ? 'off' : 'on'
    }`}
  >
    <Image
      className="w-full h-auto rounded"
      alt={title + index}
      src={`/images/projects/${title}-${index}.png`}
      sizes="100vw"
      width={0}
      height={0}
      priority={priority}
    />
  </div>
);

export default function HistoryPage() {
  return (
    <>
      <div className="h-full w-full p-5 sm:p-0 mx-auto max-w-full sm:max-w-3xl">
        <h1 className="text-4xl mb-16 font-semibold">Projects</h1>

        <ul>
          {projects.map(
            ({ title, description, githubURL, liveAtURL }, index) => (
              <motion.li
                key={title}
                className="mb-32 grid grid-cols-12 gap-4"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={variants}
              >
                <div className="col-span-12 sm:col-span-6">
                  <label className="swap h-full w-full">
                    <input type="checkbox" />
                    <RenderProjectImage
                      title={title}
                      index={1}
                      priority={index === 0}
                    />
                    <RenderProjectImage
                      title={title}
                      index={2}
                      priority={false}
                    />
                  </label>
                </div>
                <div className="col-span-12 sm:col-span-6 flex flex-col justify-between">
                  <h2 className="text-primary text-lg">{title}</h2>
                  <p className="text-sm my-5 sm:-ml-24 sm:bg-base-100 sm:p-5 sm:rounded z-10 text-slate-300">
                    {description}
                  </p>
                  <div className="flex text-primary">
                    <Link className="mr-3" href={githubURL} target="_blank">
                      <GitHubIcon />
                    </Link>
                    {liveAtURL && (
                      <Link href={liveAtURL} target="_blank">
                        <RedirectIcon />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.li>
            ),
          )}
        </ul>
      </div>

      <div className="hidden sm:block absolute top-10 sm:top-60 left-0 sm:-rotate-90">
        <BackgroundPattern />
      </div>

      <div className="hidden sm:block absolute top-24 sm:top-96 right-0 sm:-rotate-45">
        <BackgroundPattern />
      </div>
    </>
  );
}
