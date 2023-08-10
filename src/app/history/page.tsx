import { BackgroundPattern } from '@/components';
import { workHistory } from './data';

export default function HistoryPage() {
  return (
    <>
      <div className="h-full w-full p-5 sm:p-0 mx-auto max-w-full sm:max-w-3xl">
        <h1 className="text-4xl mb-16 font-semibold">Work History</h1>

        <ul>
          {workHistory.map(
            ({ period, company, jobTitle, description, stack }) => (
              <li key={period} className="mb-16">
                <div className="grid sm:grid-cols-8 sm:gap-8">
                  <p className="whitespace-nowrap sm:col-span-2 mb-3 text-sm text-slate-400">
                    {period}
                  </p>
                  <div className="container sm:ml-2 sm:col-span-6">
                    <p>{company}</p>
                    <p className="text-sm">{jobTitle}</p>
                    <p className="text-sm my-3 text-slate-400">{description}</p>
                    {stack.map((item) => (
                      <div
                        key={item}
                        className="badge badge-primary badge-outline py-3 px-4 mr-2 mb-2 text-xs hover:bg-primary hover:text-slate-900 transition-all"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="hidden sm:block absolute top-10 sm:top-60 left-0 sm:-rotate-90">
        <BackgroundPattern />
      </div>

      <div className="hidden sm:block absolute top-24 sm:top-96 right-0 sm:-rotate-45">
        <BackgroundPattern />
      </div>
    </>
  );
}
