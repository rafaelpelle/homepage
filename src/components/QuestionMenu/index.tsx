import { useTranslation } from '@/app/i18n/client';
import { Language } from '@/app/i18n/settings';
import QuestionMenuItem, { QuestionMenuItemProps } from './QuestionMenuItem';

export interface QuestionMenuProps {
  questions: QuestionMenuItemProps[];
  lng: Language;
}

export default function QuestionMenu({ questions, lng }: QuestionMenuProps) {
  const { t } = useTranslation(lng, 'chat', undefined);

  return (
    <div className="w-full flex justify-end">
      <div className="dropdown dropdown-left dropdown-end dropdown-hover">
        <label tabIndex={0} className="btn btn-primary m-1">
          {t('questions')}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content rounded menu p-5 shadow z-[1] w-52 bg-opacity-80 backdrop-blur"
        >
          {questions.map(({ question, clickHandler }) => (
            <QuestionMenuItem
              key={question}
              question={question}
              clickHandler={clickHandler}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
