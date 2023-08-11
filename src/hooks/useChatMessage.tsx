'use client';

import { Language } from '@/app/i18n/settings';
import {
  AboutCareerResponse,
  GetInTouchResponse,
  ShowProjectsResponse,
} from '@/components';
import { ChatMessageProps } from '@/components/ChatMessage';
import { QuestionMenuItemProps } from '@/components/QuestionMenu/QuestionMenuItem';
import { ReactNode, useCallback, useEffect, useState } from 'react';

export type ChatQuestion =
  | 'Can you tell me about your career?'
  | 'Can you show me your projects?'
  | 'How do I get in touch with you?';

const rootMessages: ChatMessageProps[] = [
  { text: 'Hi,' },
  { text: "I'm Rafael Pelle!" },
  { text: 'You can ask me a question, or navigate through the menu.' },
];

const rootQuestions: ChatQuestion[] = [
  'Can you tell me about your career?',
  'Can you show me your projects?',
  'How do I get in touch with you?',
];

const responseTemplate: ChatMessageProps = {
  text: '',
  align: 'end',
  imgSrc: '/images/guest_profile.png',
};

export function useChatMessage(lng: Language) {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [questions, setQuestions] = useState<QuestionMenuItemProps[]>([]);

  const rootResponses: ReactNode[] = [
    <AboutCareerResponse key="AboutCareerResponse" lng={lng} />,
    <ShowProjectsResponse key="ShowProjectsResponse" lng={lng} />,
    <GetInTouchResponse key="GetInTouchResponse" lng={lng} />,
  ];

  const closeQuestionDropdown = () => {
    const dropdown = document.activeElement as HTMLElement;
    if (typeof dropdown?.blur === 'function') {
      dropdown.blur();
    }
  };

  const getQuestionMessage = (index: number) => ({
    ...responseTemplate,
    text: rootQuestions[index],
  });

  const questionClickHandler = useCallback(
    (question: ChatQuestion, msgs: ChatMessageProps[]) => {
      const index = rootQuestions.indexOf(question);
      closeQuestionDropdown();
      const newMessages = [...msgs, getQuestionMessage(index)];
      setMessages(newMessages);
      setQuestions([]);
      setIsTyping(true);
      setTimeout(() => {
        const response: ChatMessageProps = {
          text: rootResponses[index],
        };
        const newMsgs = [...newMessages, response];
        setMessages(newMsgs);
        setIsTyping(false);
        setQuestions(
          rootQuestions.map((question) => ({
            question,
            clickHandler: () => {
              questionClickHandler(question, newMsgs);
            },
          })),
        );
      }, 1500);
    },
    [rootResponses],
  );

  const scrollToBottom = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (messages.length < rootMessages.length) {
        const newMessages = [...messages, rootMessages[messages.length]];
        setMessages(newMessages);
        if (newMessages.length === rootMessages.length) {
          setIsTyping(false);
          setQuestions(
            rootQuestions.map((question) => ({
              question,
              clickHandler: () => {
                questionClickHandler(question, newMessages);
              },
            })),
          );
        }
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [messages, questionClickHandler]);

  useEffect(() => {
    if (messages.length >= 2) {
      scrollToBottom();
    }
  }, [messages.length, scrollToBottom]);

  return {
    messages,
    isTyping,
    questions,
  };
}
