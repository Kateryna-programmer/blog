import CssBaseline from '@mui/material/CssBaseline';
import Header from 'components/Header/Header';
import { StyledEngineProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/Home/HomePage';
import Footer from 'components/Footer/Footer';
import { useState, useEffect } from 'react';
import CategoryPage from 'pages/CategoryPage/CategoryPage';
import ArticlePage from 'pages/ArticlePage/ArticlePage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';

type Props = {};

type likeArticleType = {
  [id: number]: boolean;
};

const App = (props: Props) => {
  const [likeState, setLikeState] = useState<likeArticleType>({
    1: false,
    2: false,
  });

  const isLiked = false;
  const [hasLikedArticles, setHasLikedArticles] = useState<boolean>(false);

  const updateLikedState = (isLiked: boolean) => {
    setHasLikedArticles(isLiked);
  };

  const [likedCount, setLikedCount] = useState<number>(0);

  useEffect(() => {
    const countLikedArticles = () => {
      return Object.values(likeState).filter((isLiked) => isLiked).length;
    };

    const newLikedCount = countLikedArticles();
    setLikedCount(newLikedCount);
    setHasLikedArticles(newLikedCount > 0);
  }, [likeState]);

  const changeLikeArticle = (id: number) => {
    setLikeState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header hasLikedArticles={hasLikedArticles} likedCount={likedCount} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              likeState={likeState}
              changeLikeArticle={changeLikeArticle}
              updateLikedState={updateLikedState}
              likedCount={likedCount}
            />
          }
        ></Route>
        <Route
          path=":category"
          element={
            <CategoryPage
              category="Fashion"
              likeState={likeState}
              changeLikeArticle={changeLikeArticle}
              isLiked={isLiked}
              updateLikedState={updateLikedState}
              likedCount={likedCount}
            />
          }
        ></Route>
        <Route
          path=":category"
          element={
            <CategoryPage
              likeState={likeState}
              changeLikeArticle={changeLikeArticle}
              category="Health"
              isLiked={isLiked}
              updateLikedState={updateLikedState}
              likedCount={likedCount}
            />
          }
        ></Route>
        <Route
          path=":category"
          element={
            <CategoryPage
              likeState={likeState}
              changeLikeArticle={changeLikeArticle}
              category="Astrology"
              isLiked={isLiked}
              updateLikedState={updateLikedState}
              likedCount={likedCount}
            />
          }
        ></Route>
        <Route
          path=":category"
          element={
            <CategoryPage
              likeState={likeState}
              changeLikeArticle={changeLikeArticle}
              category="Psychology"
              isLiked={isLiked}
              updateLikedState={updateLikedState}
              likedCount={likedCount}
            />
          }
        ></Route>
        <Route
          path=":category/:title"
          element={
            <ArticlePage
              likeState={likeState}
              changeLikeArticle={changeLikeArticle}
              isLiked={isLiked}
              updateLikedState={updateLikedState}
              likedCount={likedCount}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              likeState={likeState}
              changeLikeArticle={changeLikeArticle}
              updateLikedState={updateLikedState}
              likedCount={likedCount}
            />
          }
        ></Route>
      </Routes>
      {/* <ScrollToTop /> */}
      <Footer />
    </StyledEngineProvider>
  );
};
export default App;
