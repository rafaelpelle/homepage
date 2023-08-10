'use client';

import { AnimatedLetter } from '@/components';
import { useMemo } from 'react';

export default function AnimatedFullName() {
  const firstName = useMemo(
    () =>
      'Rafael'
        .split('')
        .map((letter, index) => <AnimatedLetter key={index} letter={letter} />),
    [],
  );

  const lastName = useMemo(
    () =>
      'Pelle'
        .split('')
        .map((letter, index) => <AnimatedLetter key={index} letter={letter} />),
    [],
  );

  return (
    <>
      <h1 className="hidden sm:block text-5xl">
        <p className="whitespace-nowrap">{firstName}</p>
        <p className="text-8xl whitespace-nowrap">{lastName}</p>
      </h1>
      <h1 className="sm:hidden text-2xl text-center">
        {firstName} {lastName}
      </h1>
    </>
  );
}
