import './HomePage.module.scss';
import { Container } from '@mui/material';
import Slider from 'components/Slider/Slider';
import HeroBlock from 'components/Hero/HeroBlock';
import HomeArticlesContainer from 'components/article/HomeArticlesContainer';
import Subscribe from 'components/Subscribe/Subscribe';

type Props = {
  likeState: {
    [id: number]: boolean;
  };
  changeLikeArticle(id: number, like: boolean): void;
  updateLikedState(hasLiked: boolean): void;
  likedCount: number;
};

const HomePage = ({
  likeState,
  changeLikeArticle,
  updateLikedState,
  likedCount,
}: Props) => {
  const handleSubscribe = () => {};
  return (
    <>
      <HeroBlock />
      <Container
        sx={{
          paddingTop: '30px',
        }}
      >
        <Slider />
        <HomeArticlesContainer
          likeState={likeState}
          changeLikeArticle={changeLikeArticle}
          updateLikedState={updateLikedState}
          likedCount={likedCount}
        />
        <Subscribe onSubscribe={handleSubscribe} />
      </Container>
    </>
  );
};

export default HomePage;
