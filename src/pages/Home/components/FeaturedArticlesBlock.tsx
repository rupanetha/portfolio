import React from 'react';
import { Box } from '@chakra-ui/react';

import { useHomePageStore } from '../utils/store';
import { fetchAllBlogs } from '../../../services/blog.service';
import ArticleCard from '../../../components/ArticleCard';
import { ArticleCardLoader } from '../../../components/Loading';

export default function FeaturedArticlesBlock() {
  const [loading, setLoading] = React.useState(true);
  const [featuredArticles, setFeaturedArticles] = useHomePageStore(
    (state: any) => [state.featuredArticles, state.setFeaturedArticles]
  );

  React.useEffect(() => {
    getBlogsData();
  }, []);

  async function getBlogsData() {
    try {
      const { data } = await fetchAllBlogs();
      const featuredArticles = data.filter(
        (blog: any) => blog.attributes.featured
      );

      setFeaturedArticles(featuredArticles);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box w='100%' display='flex' py={{ base: '56px', md: '96px' }}>
      <Box maxW='1280px' margin='0 auto'>
        <Box
          gap='30px'
          display='flex'
          flexDir={{ base: 'column', md: 'row' }}
          w='100%'
        >
          {loading && [0, 1, 2].map(() => <ArticleCardLoader />)}
          {featuredArticles && featuredArticles.map((item: any) => <ArticleCard item={item} />)}
        </Box>
      </Box>
    </Box>
  );
}
