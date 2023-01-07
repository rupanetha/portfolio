import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import ArticleCard from '../../../components/ArticleCard';
import { ArticleCardLoader } from '../../../components/Loading';
import {
  fetchAllBlogs,
  fetchAllCategories,
} from '../../../services/blog.service';
import { useBlogPageStore } from '../utils/store';
import ArticlesFilter from './ArticlesFilter';

export default function MyArticlesBlock() {
  const [loading, setLoading] = React.useState(true);

  const [
    articles,
    filteredArticles,
    articlesFilter,
    categories,
    setArticles,
    setFilteredArticles,
    setArticlesFilter,
    setCategories,
  ] = useBlogPageStore((state: any) => [
    state.articles,
    state.filteredArticles,
    state.articlesFilter,
    state.categories,
    state.setArticles,
    state.setFilteredArticles,
    state.setArticlesFilter,
    state.setCategories,
  ]);

  React.useEffect(() => {
    getBlogsandCategoriesData();
  }, []);

  React.useEffect(() => {
    if (articles && articlesFilter !== 'all') {
      console.log({ articlesFilter });
      const newArticlesData = articles.filter((data: any) => {
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

  async function getBlogsandCategoriesData() {
    try {
      const { data: blogData } = await fetchAllBlogs();
      const { data: categoriesData } = await fetchAllCategories();

      setArticles(blogData);
      setFilteredArticles(blogData);
      setCategories(categoriesData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

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
          <Text fontSize={'14px'} fontWeight='600' color='#5e5e5e'>
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
          {loading && [0, 1, 2].map(() => <ArticleCardLoader />)}
          {filteredArticles &&
            filteredArticles.map((item: any) => <ArticleCard item={item} />)}
        </Box>
      </Box>
    </Box>
  );
}
