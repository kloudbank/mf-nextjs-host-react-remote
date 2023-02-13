import * as React from 'react';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handle = () => setIsOpen(!isOpen);
  // const isOpen = true;
  // const handle = () => { isOpen = false;}

  return (
    <>
      <button 
        onClick={handle}
      >
      TEST {(isOpen === false)?'block':'flex'}
      </button>
      <div
        style={{
          background: 'cadetblue',
          width: '100%',
          height: '100px',
          color: 'white',
          textAlign: 'center',
          display: (isOpen === false)?'block':'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
        }}
      >
        This component is from the Remote React App, hosted at port 3030
      </div>
    </>
  );
};

export default Nav;
