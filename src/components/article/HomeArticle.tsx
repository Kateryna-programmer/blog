import classes from './HomeArticle.module.scss';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LikeButton from 'components/UI/LikeButton';

type ArticleData = {
  id: number;
  imageUrl: string;
  author: string;
  alt: string;
  category: string;
  date: string;
  title: string;
  description: string;
  isLiked: boolean;
  likedCount: number;
  changeLikeArticle(id: number, like: boolean): void;
  updateLikedState(hasLiked: boolean): void;
};

type CategoryClassMap = {
  [key: string]: string;
};

const categoryClassMap: CategoryClassMap = {
  Health: 'green-bg',
  Astrology: 'violet-bg',
  Psychology: 'brown-bg',
  Fashion: 'blue-bg',
};

const HomeArticle = ({
  id,
  imageUrl,
  author,
  alt,
  category,
  date,
  title,
  description,
  isLiked,
  changeLikeArticle,
  updateLikedState,
  likedCount,
}: ArticleData) => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const categoryClass = categoryClassMap[category] || '';

  return (
    <Box
      sx={{
        maxWidth: ['580px', '780px', '800px', '350px'],
        position: 'relative',
        overflow: 'hidden',
        display: { xs: 'flex', sm: 'initial' },

        flexDirection: { xs: 'column' },
      }}
    >
      <img className={classes.image} src={imageUrl} alt={alt} />
      <span className={`${classes.category} ${classes[categoryClass]}`}>
        {category}
      </span>
      <Link
        to={`/${category.toLowerCase()}/${title
          .toLowerCase()
          .replace(/ /g, '-')}`}
        className={classes.title}
        onClick={handleLinkClick}
      >
        {title}
      </Link>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '14px',
          }}
        >
          {date} | by {author}
        </Typography>

        <LikeButton
          key={id}
          isLiked={isLiked}
          id={id}
          changeLikeArticle={changeLikeArticle}
          updateLikedState={updateLikedState}
          likedCount={likedCount}
        />
      </Box>

      <Typography> {description}</Typography>
      <Link
        to={`/${category}/${title.toLowerCase().replace(/ /g, '-')}`}
        className={classes.readMore}
        onClick={handleLinkClick}
      >
        Read more
      </Link>
    </Box>
  );
};

export default HomeArticle;
