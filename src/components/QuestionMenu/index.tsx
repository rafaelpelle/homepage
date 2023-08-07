import QuestionMenuItem from "./QuestionMenuItem";

export interface QuestionMenuProps {
  questions: string[];
}

export default function QuestionMenu({ questions }: QuestionMenuProps) {
  return (
    <div className="w-full flex justify-end">
      <div className="dropdown dropdown-left dropdown-end">
        <label tabIndex={0} className="btn btn-primary m-1">
          Questions
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content rounded menu p-5 shadow z-[1] w-52 bg-opacity-80 backdrop-blur"
        >
          {questions.map((question) => (
            <QuestionMenuItem key={question} question={question} />
          ))}
        </ul>
      </div>
    </div>
  );
}
