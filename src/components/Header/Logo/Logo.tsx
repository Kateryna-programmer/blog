import React from 'react';
import logo from 'assets/images/logo.png';
import { Typography } from '@mui/material';

type Props = {};

const Logo = (props: Props) => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <div>
          <a href="/" style={{ display: 'block' }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: '60px', verticalAlign: 'bottom' }}
            />
          </a>
        </div>
      </Typography>
    </>
  );
};

export default Logo;
