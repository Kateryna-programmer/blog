import { Box, Card, CardContent, Typography } from '@mui/material';

type ReviewProps = {
  userFullName: string;
  userImg: string;
  commentText: string;
};

const Review = ({ userFullName, userImg, commentText }: ReviewProps) => {
  return (
    <Box sx={{ marginBottom: '50px' }}>
      <Card
        sx={{
          marginBottom: '30px',
          boxShadow: '5px -5px 14px 1px rgba(25,118,210, 0.3)',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            gap: ['5px', '20px'],
          }}
        >
          <div>
            <img
              width="50"
              height="50"
              style={{ borderRadius: '50%' }}
              src={userImg}
              alt="avatar"
            />
          </div>
          <div>
            <Typography sx={{ fontWeight: 'bold' }}>{userFullName}</Typography>
            <Typography>{commentText}</Typography>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Review;
