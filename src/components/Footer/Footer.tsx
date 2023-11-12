import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Copyright from '@mui/icons-material/Copyright';
import Logo from '../Header/Logo/Logo';

type Props = {};

const Footer = (props: Props) => {
  const iconStyles = {
    cursor: 'pointer',
    marginRight: '30px',
    '&:hover, &:focus': {
      color: 'red',
    },
  };

  return (
    <Box
      sx={{
        background: 'white',
        padding: '10px',
        boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.5)',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Logo />
          <Box
            sx={{
              flexGrow: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box>
              <Link
                href="https://www.facebook.com/profile.php?id=100001342192909"
                target="_blank"
                rel="noopener noreferrer"
                sx={iconStyles}
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://www.instagram.com/ekatellina/"
                target="_blank"
                rel="noopener noreferrer"
                sx={iconStyles}
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://twitter.com/?lang=ru"
                target="_blank"
                rel="noopener noreferrer"
                sx={iconStyles}
              >
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  ...iconStyles,
                  '&:last-child': {
                    marginRight: 0,
                  },
                }}
              >
                <YouTubeIcon />
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Copyright sx={{ fontSize: '16px' }} />
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '18px',
                  margin: '0',
                }}
              >
                kostewakateryna
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
