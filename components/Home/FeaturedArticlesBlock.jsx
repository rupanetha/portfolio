import React from 'react';
import { Box } from '@chakra-ui/react';

import { ArticleCard } from '../Global';

export default function FeaturedArticlesBlock({ featuredArticles }) {
  return (
    <Box w='100%' display='flex' py={{ base: '56px', md: '96px' }}>
      <Box maxW='1280px' margin='0 auto'>
        <Box
          gap='30px'
          display='flex'
          flexDir={{ base: 'column', md: 'row' }}
          w='100%'
        >
          {featuredArticles &&
            featuredArticles.map((item, idx) => (
              <ArticleCard item={item} key={idx + 1} />
            ))}
        </Box>
      </Box>
    </Box>
  );
}
