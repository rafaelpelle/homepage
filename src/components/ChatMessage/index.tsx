"use client";

import { DoubleCheckIcon } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";

export interface ChatMessageProps {
  imgSrc?: string;
  senderName?: string;
  date?: Date;
  text: string;
}

export default function ChatMessage({
  imgSrc = "/images/profileCropped.jpg",
  senderName = "",
  date = new Date(),
  text = "",
}: ChatMessageProps) {
  return (
    <motion.div
      initial={{ translate: "-100px 0px", opacity: 0 }}
      animate={{ translate: "0px 0px", opacity: 1 }}
      className="chat chat-start mb-3 last:mb-0"
    >
      <div className="chat-image avatar">
        <div className="rounded-full">
          <Image src={imgSrc} width={40} height={40} alt="Profile picture" />
        </div>
      </div>
      <div className="chat-header">{senderName}</div>
      <div className="chat-bubble">
        {text}
        <time className="text-xs opacity-50 text-right flex items-center justify-end">
          {date.getHours()}:{date.getMinutes()}
          <span className="ml-1">
            <DoubleCheckIcon />
          </span>
        </time>
      </div>
    </motion.div>
  );
}
