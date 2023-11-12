import HomeArticle from './HomeArticle';
import SortArticle from './SortArticle';
import Sidebar from '../sidebar/Sidebar';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import articlesArray from 'utils/articlesArray';

type Props = {
  likeState: {
    [id: number]: boolean;
  };
  changeLikeArticle(id: number, like: boolean): void;
  updateLikedState(hasLiked: boolean): void;
  likedCount: number;
};

type Category = 'All' | 'Fashion' | 'Health' | 'Astrology' | 'Psychology';

const HomeArticlesContainer = ({
  likeState,
  changeLikeArticle,
  updateLikedState,
  likedCount,
}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  const filteredArticles =
    selectedCategory === 'All'
      ? articlesArray
      : articlesArray.filter(
          (article) => article.category === selectedCategory
        );

  return (
    <Container>
      <Grid container spacing={3} sx={{ paddingTop: '0px!important' }}>
        <Grid
          item
          xs={12}
          md={12}
          lg={8}
          sx={{
            marginBottom: '40px',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              marginTop: '-10px',
              fontWeight: 'bold',
              fontSize: ['20px', '30px', '40px'],
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '20px',
            }}
          >
            Our articles
          </Typography>
          <SortArticle
            articles={articlesArray}
            onCategoryChange={handleCategoryChange}
          />
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', lg: 'space-between' },
            }}
          >
            {filteredArticles.map(
              ({
                id,
                alt,
                imageUrl,
                date,
                author,
                title,
                description,
                category,
              }) => (
                <HomeArticle
                  key={id}
                  alt={alt}
                  imageUrl={imageUrl}
                  category={category}
                  date={date}
                  author={author}
                  title={title}
                  description={description}
                  isLiked={likeState[id]}
                  id={id}
                  changeLikeArticle={changeLikeArticle}
                  updateLikedState={updateLikedState}
                  likedCount={likedCount}
                />
              )
            )}
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: { xs: 'none', lg: 'initial' },
            }}
          >
            <Sidebar
              likeState={likeState}
              changeLikeArticle={changeLikeArticle}
              articles={articlesArray.filter(
                (item) => item.inSidebar === 'yes'
              )}
              updateLikedState={updateLikedState}
              likedCount={likedCount}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeArticlesContainer;
