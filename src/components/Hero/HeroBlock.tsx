import { Box, Container, Typography } from '@mui/material';
import heroBg from '../../assets/images/hero-bg.jpg';
import Subscribe from 'components/Subscribe/Subscribe';

type Props = {};

const HeroBlock = (props: Props) => {
  const handleSubscribe = () => {};
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: ['65% 0%', 'top right'],
        backgroundSize: 'cover',
        paddingTop: '150px',
        height: '100vh',
      }}
    >
      <Container sx={{ position: 'relative' }}>
        <Typography
          variant="h1"
          sx={{
            marginTop: '150px',
            fontSize: ['30px', '50px', '70px'],
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: '#fff',
          }}
        >
          Contemporary <br />
          fashion
        </Typography>
        <Typography
          sx={{
            marginTop: '100px',
            fontSize: ['20px', '30px', '40px'],
            textTransform: 'uppercase',
            letterSpacing: '5px',
            color: '#fff',
          }}
        >
          What is this
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: '40%',
          }}
        >
          <Subscribe onSubscribe={handleSubscribe} />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroBlock;
