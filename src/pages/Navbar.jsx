import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: 'gray',
        padding: '10px',
        display: 'flex',
        // justifyContent: 'flex-end',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
      }}
    >
      <Link
        to="/"
        style={{
          margin: '5px',
          color: 'white',
          textDecoration: 'none',
          fontSize: '30px',
        }}
      >
        ticketnest
      </Link>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to="/signup" style={{ margin: '5px' }}>
          <button>Sign Up</button>
        </Link>
        <Link to="/login" style={{ margin: '5px' }}>
          <button>Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
