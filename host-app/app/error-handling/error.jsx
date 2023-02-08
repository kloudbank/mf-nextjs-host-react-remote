'use client';

import React from 'react';

export default function Error({ error }) {
  React.useEffect(() => {
    console.log('logging error:', error);
  }, [error]);

  return (
    <div></div>
  );
}
