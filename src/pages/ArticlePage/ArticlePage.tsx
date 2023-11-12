import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Form from 'components/Form/Form';
import LikeButton from 'components/UI/LikeButton';
import Review from 'components/reviews/Review';
import Sidebar from 'components/sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import articlesArray from 'utils/articlesArray';
import reviewsArray from 'utils/reviewsArray';
import avatar0 from '../../assets/images/avatar-0.jpg';

type ArticleData = {
  id: number;
  title: string;
  imageUrl: string;
  alt: string;
  author: string;
  date: string;
  description: string;
  full?: string;
};

type LikeState = {
  [id: number]: boolean;
};

type ArticlePageProps = {
  likeState: LikeState;
  changeLikeArticle(id: number, like: boolean): void;
  updateLikedState(hasLiked: boolean): void;
  likedCount: number;
  isLiked: boolean;
};

type CommentData = {
  fullName: string;
  email: string;
  comment: string;
  image?: string;
};

const ArticlePage = ({
  likeState,
  changeLikeArticle,
  updateLikedState,
  likedCount,
}: ArticlePageProps) => {
  const initialComments: CommentData[] = reviewsArray.map((review) => ({
    fullName: review.fullname,
    image: review.img,
    email: '',
    comment: review.text,
  }));

  const [allComments, setAllComments] =
    useState<CommentData[]>(initialComments);

  const addComment = (comment: CommentData) => {
    setAllComments((prevComments) => [...prevComments, comment]);
  };

  const { title } = useParams<{ title: string | undefined }>();

  if (!title) {
    return <Typography>Article not found</Typography>;
  }

  const article = articlesArray.find(
    (article: ArticleData) =>
      article.title.toLowerCase() === title.replace(/-/g, ' ').toLowerCase()
  );

  if (!article) {
    return <Typography>Article not found</Typography>;
  }

  return (
    <Container
      sx={{
        paddingTop: '120px',
        display: 'flex',
        justifyContent: { xs: 'center', lg: 'space-between' },
      }}
    >
      <Box sx={{ maxWidth: '700px' }}>
        <img
          src={article.imageUrl}
          alt={article.alt}
          style={{
            maxWidth: '700px',
            width: '100%',
            maxHeight: '300px',
            objectFit: 'cover',
          }}
        />
        <Typography
          variant="h2"
          component={'h3'}
          sx={{
            fontSize: ['30px', '32px'],
            marginBottom: '20px',
            fontWeight: 'bold',
          }}
        >
          {article.title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '18px', margin: '10px 0' }}>
            {article.date} | {article.author}
          </Typography>

          <LikeButton
            isLiked={likeState[article.id]}
            id={article.id}
            changeLikeArticle={changeLikeArticle}
            updateLikedState={updateLikedState}
            likedCount={likedCount}
          />
        </Box>

        {article.full && (
          <Typography sx={{ fontSize: ['18px', '20px'], marginBottom: '20px' }}>
            <div dangerouslySetInnerHTML={{ __html: article.full }}></div>
          </Typography>
        )}

        <Box>
          {allComments.map((comment, index) => (
            <Review
              key={index}
              userFullName={comment.fullName}
              userImg={comment.image || avatar0}
              commentText={comment.comment}
            />
          ))}
        </Box>

        <Form addComment={addComment} comments={allComments} />
      </Box>

      <Box
        sx={{
          display: { xs: 'none', lg: 'initial' },
        }}
      >
        <Sidebar
          likeState={likeState}
          changeLikeArticle={changeLikeArticle}
          articles={articlesArray.filter((item) => item.inSidebar === 'yes')}
          updateLikedState={updateLikedState}
          likedCount={likedCount}
        />
      </Box>
    </Container>
  );
};

export default ArticlePage;
