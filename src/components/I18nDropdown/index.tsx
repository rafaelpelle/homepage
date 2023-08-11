import { I18nIcon } from '@/components';
import Link from 'next/link';

export default function I18nDropdown() {
  return (
    <details className="dropdown dropdown-end">
      <summary className="btn btn-ghost py-0 text-primary hover:bg-primary hover:text-slate-900">
        <I18nIcon />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-30 bg-base-100 rounded-box w-40">
        <li>
          <Link href="/pt" prefetch={false}>
            Português 🇧🇷
          </Link>
        </li>
        <li>
          <Link href="/en" prefetch={false}>
            English 🇬🇧
          </Link>
        </li>
      </ul>
    </details>
  );
}
