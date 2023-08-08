'use client';

import { motion, useAnimationControls } from 'framer-motion';

export interface AnimatedLetterProps {
  letter: string;
}

export default function AnimatedLetter({ letter }: AnimatedLetterProps) {
  const controls = useAnimationControls();

  const rubberBandEffect = () => {
    controls.start({
      color: ['#FFF', '#3CCEFF', '#FFF'],
      transform: [
        'scale3d(1, 1, 1)',
        'scale3d(1.4, 0.55, 1)',
        'scale3d(0.75, 1.25, 1)',
        'scale3d(1.25, 0.85, 1)',
        'scale3d(0.9, 1.05, 1)',
        'scale3d(1, 1, 1)',
      ],
      transition: {
        times: [0, 0.9, 1, 1, 1, 1],
      },
    });
  };

  return (
    <motion.span
      className="inline-block font-bold"
      animate={controls}
      onMouseOver={rubberBandEffect}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </motion.span>
  );
}
