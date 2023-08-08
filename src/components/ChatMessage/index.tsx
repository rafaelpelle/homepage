'use client';

import { DoubleCheckIcon } from '@/components';
import dayjs, { Dayjs } from 'dayjs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

export interface ChatMessageProps {
  imgSrc?: string;
  senderName?: string;
  date?: Dayjs;
  text: string | ReactNode;
  align?: 'start' | 'end';
}

export default function ChatMessage({
  imgSrc = '/images/profile.png',
  senderName = '',
  date = dayjs(),
  text = '',
  align = 'start',
}: ChatMessageProps) {
  return (
    <motion.div
      initial={{ translate: '-100px 0px', opacity: 0 }}
      animate={{ translate: '0px 0px', opacity: 1 }}
      className={`chat chat-${align} mb-3 last:mb-0 sm:w-3/5`}
    >
      <div className="chat-image avatar">
        <div className="rounded-full bg-base-300">
          <Image src={imgSrc} width={50} height={50} alt="Profile picture" />
        </div>
      </div>
      <div className="chat-header">{senderName}</div>
      <div
        className={`chat-bubble ${
          align === 'end' ? 'bg-primary text-slate-900' : ''
        }`}
      >
        {text}
        <time className="text-xs opacity-50 text-right flex items-center justify-end">
          {date.format('HH:mm')}
          <span className="ml-1">
            <DoubleCheckIcon />
          </span>
        </time>
      </div>
    </motion.div>
  );
}
