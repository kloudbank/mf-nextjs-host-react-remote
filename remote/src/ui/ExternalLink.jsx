import * as React from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline';

const ExternalLink = ({
  children,
  href,
}) => {
  return (
    <a
      href={href}
      className="inline-flex gap-x-2 rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white"
    >
      <div>{children}</div>

      <ArrowRightIcon className="block w-4" />
    </a>
  );
};

export default ExternalLink;
