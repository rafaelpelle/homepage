'use client';

import { useTranslation } from '@/app/i18n/client';
import { Language } from '@/app/i18n/settings';
import {
  AboutCareerResponse,
  GetInTouchResponse,
  ShowProjectsResponse,
} from '@/components';
import { ChatMessageProps } from '@/components/ChatMessage';
import { QuestionMenuItemProps } from '@/components/QuestionMenu/QuestionMenuItem';
import { useCallback, useEffect, useMemo, useState } from 'react';

const responseTemplate: ChatMessageProps = {
  text: '',
  align: 'end',
  imgSrc: '/images/guest_profile.png',
};

export function useChatMessage(lng: Language) {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [questions, setQuestions] = useState<QuestionMenuItemProps[]>([]);

  const { t } = useTranslation(lng, 'chat', undefined);

  const rootMessages: ChatMessageProps[] = useMemo(
    () => [
      { text: t('hi') },
      { text: t('myself') },
      { text: t('question-or-menu') },
    ],
    [t],
  );

  const rootQuestions: string[] = useMemo(
    () => [t('about-career'), t('about-projects'), t('contact')],
    [t],
  );

  const rootResponses = useMemo(
    () => [
      <AboutCareerResponse key="AboutCareerResponse" lng={lng} />,
      <ShowProjectsResponse key="ShowProjectsResponse" lng={lng} />,
      <GetInTouchResponse key="GetInTouchResponse" lng={lng} />,
    ],
    [lng],
  );

  const closeQuestionDropdown = () => {
    const dropdown = document.activeElement as HTMLElement;
    if (typeof dropdown?.blur === 'function') {
      dropdown.blur();
    }
  };

  const getQuestionMessage = useCallback(
    (index: number) => ({
      ...responseTemplate,
      text: rootQuestions[index],
    }),
    [rootQuestions],
  );

  const questionClickHandler = useCallback(
    (question: string, msgs: ChatMessageProps[]) => {
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
    [getQuestionMessage, rootQuestions, rootResponses],
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
  }, [messages, questionClickHandler, rootMessages, rootQuestions]);

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
