'use client';

import { CloseIcon } from '@/components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function I18nToast() {
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    const hasClosedToast = localStorage.getItem('hasClosedToast');
    setTimeout(() => {
      setShouldRender(!Boolean(hasClosedToast));
    }, 2000);
  }, []);

  return (
    shouldRender && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute toast toast-top toast-start sm:toast-end mt-10 z-50"
      >
        <div className="alert alert-info flex flex-col gap-0">
          <button
            className="absolute right-5 top-5 ml-auto"
            onClick={() => {
              setShouldRender(false);
              localStorage.setItem('hasClosedToast', 'true');
            }}
          >
            <CloseIcon />
          </button>
          <p className="w-32 whitespace-break-spaces">
            First time? You can change the language here!
          </p>
          ---------------
          <p className="w-32 whitespace-break-spaces">
            Primeira vez? Você pode trocar o idioma aqui!
          </p>
        </div>
      </motion.div>
    )
  );
}
