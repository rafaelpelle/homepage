'use client';

import { Language } from '@/app/i18n/settings';
import { ChatLoading, ChatMessage, QuestionMenu } from '@/components';
import { useChatMessage } from '@/hooks/useChatMessage';

export interface ChatContainerProps {
  lng: Language;
}

export default function ChatContainer({ lng }: ChatContainerProps) {
  const { messages, isTyping, questions } = useChatMessage(lng);

  return (
    <div className="w-12/12">
      {messages.map((message, index) => (
        <ChatMessage key={index} {...message} />
      ))}
      {isTyping && <ChatLoading />}

      {!isTyping && questions.length > 0 && (
        <QuestionMenu questions={questions} lng={lng} />
      )}
    </div>
  );
}
