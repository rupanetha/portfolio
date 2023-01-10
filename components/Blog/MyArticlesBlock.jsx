import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import { ArticleCard } from '../Global';

import ArticlesFilter from './ArticlesFilter';

export default function MyArticlesBlock({ articles = [], categories }) {
  const [filteredArticles, setFilteredArticles] = React.useState(articles);
  const [articlesFilter, setArticlesFilter] = React.useState('all');

  React.useEffect(() => {
    if (articles && articlesFilter !== 'all') {
      console.log({ articlesFilter });
      const newArticlesData = articles.filter((data) => {
        return (
          data.attributes.blog_category.data.attributes.slug === articlesFilter
        );
      });

      setFilteredArticles(newArticlesData);
    }
    if (articlesFilter === 'all' && articles) {
      setFilteredArticles(articles);
    }
  }, [articlesFilter]);

  return (
    <Box w='100%' flex='1' display='flex' py={{ base: '56px', md: '96px' }}>
      <Box
        maxW='1280px'
        display='flex'
        flexDir='column'
        alignItems='center'
        margin='0 auto'
      >
        <Box
          gap='1'
          display='flex'
          flexDir='column'
          alignItems='center'
          pos='relative'
          w='-webkit-fit-content'
        >
          <Text
            letterSpacing={'2px'}
            fontSize={'16px'}
            fontWeight='600'
            color='#5e5e5e'
          >
            BLOG
          </Text>
          <Box
            _after={{
              bgImage:
                '-webkit-linear-gradient(left, rgba(0, 0, 0, 0), rgb(165, 165, 165), rgba(0, 0, 0, 0))',
              position: 'absolute',
              left: '0',
              right: '0',
              height: '1px',
              width: '100%',
              bottom: '-20px',
              content: '""',
            }}
          >
            <Text
              textTransform='uppercase'
              fontSize='4xl'
              color='#000'
              fontWeight='700'
              letterSpacing='2px'
            >
              My Articles
            </Text>
          </Box>
        </Box>
        <ArticlesFilter
          articlesFilter={articlesFilter}
          setArticlesFilter={setArticlesFilter}
          categories={categories}
        />
        <Box
          mt='46px'
          justifyContent='center'
          flexWrap={{ base: 'nowrap', md: 'wrap' }}
          display='flex'
          flexDir={{ base: 'column', md: 'row' }}
          gap='8'
        >
          {filteredArticles &&
            filteredArticles.map((item, idx) => (
              <ArticleCard key={idx + 1} item={item} />
            ))}
        </Box>
      </Box>
    </Box>
  );
}
