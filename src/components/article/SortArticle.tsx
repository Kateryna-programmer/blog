import React, { useState } from 'react';
import { Button, Box } from '@mui/material';

type ArticleData = {
  id: number;
  imageUrl: string;
  author: string;
  alt: string;
  category: string;
  date: string;
  title: string;
  description: string;
  inSidebar: string;
};

type Props = {
  articles: ArticleData[];
  onCategoryChange(category: string): void;
};

const SortArticle = ({ articles, onCategoryChange }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: ['10px', '20px'],
      }}
    >
      <Button
        variant={selectedCategory === 'All' ? 'contained' : 'outlined'}
        sx={{
          fontWeight: 'bold',
          fontSize: ['12px', '14px'],
        }}
        onClick={() => handleCategoryClick('All')}
      >
        All
      </Button>
      <Button
        variant={selectedCategory === 'Fashion' ? 'contained' : 'outlined'}
        sx={{
          marginLeft: ['15px', '20px'],
          fontWeight: 'bold',
          fontSize: ['12px', '14px'],
        }}
        onClick={() => handleCategoryClick('Fashion')}
      >
        Fashion
      </Button>
      <Button
        variant={selectedCategory === 'Health' ? 'contained' : 'outlined'}
        sx={{
          marginLeft: ['15px', '20px'],
          fontWeight: 'bold',
          fontSize: ['12px', '14px'],
        }}
        onClick={() => handleCategoryClick('Health')}
      >
        Health
      </Button>
      <Button
        variant={selectedCategory === 'Astrology' ? 'contained' : 'outlined'}
        sx={{
          marginLeft: ['15px', '20px'],
          fontWeight: 'bold',
          fontSize: ['12px', '14px'],
        }}
        onClick={() => handleCategoryClick('Astrology')}
      >
        Astrology
      </Button>
      <Button
        variant={selectedCategory === 'Psychology' ? 'contained' : 'outlined'}
        sx={{
          marginLeft: ['15px', '20px'],
          fontWeight: 'bold',
          fontSize: ['12px', '14px'],
        }}
        onClick={() => handleCategoryClick('Psychology')}
      >
        Psychology
      </Button>
    </Box>
  );
};

export default SortArticle;
