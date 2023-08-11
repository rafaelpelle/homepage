import Image from 'next/image';

export interface ChatLoadingProps {
  imgSrc?: string;
}

export default function ChatMessage({
  imgSrc = '/images/profile.png',
}: ChatLoadingProps) {
  return (
    <div className="chat chat-start mb-3 last:mb-0">
      <div className="chat-image avatar">
        <div className="rounded-full bg-base-300">
          <Image src={imgSrc} width={50} height={50} alt="Profile picture" />
        </div>
      </div>
      <div className="chat-bubble flex items-center">
        <span className="loading loading-dots loading-md" />
      </div>
    </div>
  );
}
