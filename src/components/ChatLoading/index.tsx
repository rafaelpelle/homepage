import Image from "next/image";

export interface ChatLoadingProps {
  imgSrc?: string;
}

export default function ChatMessage({
  imgSrc = "/images/profileCropped.jpg",
}: ChatLoadingProps) {
  return (
    <div className="chat chat-start mb-3 last:mb-0">
      <div className="chat-image avatar">
        <div className="rounded-full">
          <Image src={imgSrc} width={40} height={40} alt="Profile picture" />
        </div>
      </div>
      <div className="chat-bubble flex items-center">
        <span className="loading loading-dots loading-md" />
      </div>
    </div>
  );
}
