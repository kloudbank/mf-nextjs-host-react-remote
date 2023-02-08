import * as React from 'react';

const Nav = () => {
  return (
    <nav
      style={{
        background: 'cadetblue',
        width: '100%',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}
    >
      This component is from the Remote React App, hosted at port 3030
    </nav>
  );
};

export default Nav;
