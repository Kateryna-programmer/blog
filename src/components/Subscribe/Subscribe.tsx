import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

type SubscribeProps = {
  onSubscribe: () => void;
};

const Subscribe: React.FC<SubscribeProps> = ({ onSubscribe }) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribeClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      onSubscribe();
      setIsSubscribed(true);
      setError('');
      setShowForm(false);
    } else {
      setError('Invalid email format');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '30px',
      }}
    >
      {!isSubscribed ? (
        !showForm ? (
          <Button
            sx={{
              maxWidth: '300px',
              width: '100%',
              background: 'transparent',
              padding: '20px 30px',
              borderRadius: '8px',
              boxShadow: '0 0 25px 10px rgba(25,118,210, 0.4)',
              textAlign: 'center',
              color: '#1976d2',
              fontSize: '16px',
              '&:hover': {
                color: 'white',
              },
            }}
            onClick={handleSubscribeClick}
            variant="contained"
            color="primary"
          >
            Subscribe to us
          </Button>
        ) : (
          <Box
            sx={{
              maxWidth: '300px',
              width: '100%',
              textAlign: 'center',
              padding: '20px',
              backgroundColor: 'transpatent',
              borderRadius: '8px',
              boxShadow: '0 0 25px 10px rgba(25,118,210, 0.4)',
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                marginBottom: '15px',
                width: '100%',
                borderRadius: '10px',
                background: 'rgba(25,118,210, 0.5)',
              }}
              inputProps={{
                style: {
                  color: 'white',
                  fontSize: '18px',
                },
              }}
              InputLabelProps={{
                sx: {
                  color: 'white',
                },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                width: '100%',
                borderRadius: '10px',
                background: 'rgba(25,118,210, 0.5)',
              }}
              inputProps={{
                style: {
                  color: 'white',
                  fontSize: '18px',
                },
              }}
              InputLabelProps={{
                sx: {
                  color: 'white',
                },
              }}
            />
            {error && (
              <Typography
                sx={{
                  marginBottom: '10px',
                  fontSize: ['14px', '14px', '16px'],
                  color: 'red',
                }}
              >
                {error}
              </Typography>
            )}
            <Button
              sx={{ marginTop: '20px' }}
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Subscribe
            </Button>
          </Box>
        )
      ) : (
        <Typography
          sx={{
            maxWidth: '300px',
            width: '100%',
            backgroundColor: '#1976d2',
            textAlign: 'center',
            borderRadius: '8px',
            padding: '25px',
            marginTop: '20px',
            fontSize: ['14px', '14px', '16px'],
            color: '#fff',
          }}
        >
          PLEASE CHECK YOUR INBOX TO CONFIRM YOUR SUBSCRIPTION
        </Typography>
      )}
    </div>
  );
};

export default Subscribe;
