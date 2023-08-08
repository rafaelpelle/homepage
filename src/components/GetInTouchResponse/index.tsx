import Link from 'next/link';
import { Fragment } from 'react';

export default function GetInTouchResponse() {
  return (
    <Fragment>
      You can send an e-mail to{' '}
      <Link
        className="text-primary cursor-pointer"
        target="_blank"
        href="mailto:rafapelle@gmail.com"
      >
        rafapelle@gmail.com
      </Link>{' '}
      or a message on{' '}
      <Link
        className="text-primary cursor-pointer"
        target="_blank"
        href="https://www.linkedin.com/in/rafael-pelle-23429317a/"
      >
        LinkedIn!
      </Link>
    </Fragment>
  );
}
