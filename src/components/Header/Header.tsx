import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Container } from '@mui/material';
import Logo from './Logo/Logo';
import HeaderMenu from './HeaderMenu/HeaderMenu';

type Props = {
  hasLikedArticles: boolean;
  likedCount: number;
};
const Header: React.FC<Props> = ({ hasLikedArticles, likedCount }) => {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'white',
        padding: '10px',
        position: 'fixed',
        zIndex: '1',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Logo />
          <HeaderMenu
            hasLikedArticles={hasLikedArticles}
            likedCount={likedCount}
          />
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
