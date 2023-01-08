import React from 'react';
import { Box, chakra, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

import { useBlogDetailsPageStore } from '../utils/store';
import { fetchOneBlog } from '../../../services/blog.service';

export default function ArticleBlock() {
  const { slug } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [blog, setBlog] = useBlogDetailsPageStore((state: any) => [
    state.blog,
    state.setBlog,
  ]);

  React.useEffect(() => {
    getBlogData();
  }, []);

  async function getBlogData() {
    try {
      const { data } = await fetchOneBlog(slug);
      setBlog(data[0]);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box w='100%' display='flex' flexDir={'column'} bgColor='whitesmoke'>
      {blog && (
        <Box w={'100%'}>
          <chakra.img
            // objectFit={'cover'}
            height='450px'
            width='100%'
            src={`https://api.saikiran.codes/rupanetha${blog.attributes.cover_image.data.attributes.url}`}
          />
        </Box>
      )}
      <Box
        bgColor='white'
        display='flex'
        maxW={{ base: '95%', md: '760px' }}
        margin='0 auto'
        minH={'800px'}
        transform='translateY(-120px)'
        borderRadius={'12px'}
        p={{ base: '3', md: '6' }}
        flexDir={'column'}
      >
        <Box mb='6'>
          <Text
            fontSize={{ base: '2xl', md: '3xl' }}
            letterSpacing={{ base: '1.2px', md: '1.4px' }}
            fontWeight='bold'
            lineHeight={{ base: '28px', md: 'unset' }}
          >
            {blog && blog.attributes.title}
          </Text>
        </Box>
        <Box mb='10' display={'flex'} justifyContent='space-between'>
          <Box display={'flex'} gap='3' w='100%' alignItems={'center'}>
            <Box borderRadius={'6px'} overflow='hidden'>
              <chakra.img
                height='64px'
                width='64px'
                objectFit={'cover'}
                src={
                  blog &&
                  `https://api.saikiran.codes/rupanetha${blog.attributes.author.data.attributes.profile_pic.data.attributes.url}`
                }
              />
            </Box>
            <Box>
              <Text fontWeight={'700'}>
                {blog && blog.attributes.author.data.attributes.name}
              </Text>
              <Text fontSize={'14px'} color='#888'>
                {blog &&
                  format(new Date(blog.attributes.createdAt), 'do MMM yyyy')}
              </Text>
            </Box>
          </Box>
          <Box mr='4' alignItems={'center'} display={'flex'}>
            <Text
              letterSpacing={'1.4px'}
              px='2'
              fontWeight={'600'}
              py='1'
              bgColor={'#000'}
              textTransform='uppercase'
              color={'#fff'}
            >
              {blog && blog.attributes.blog_category.data.attributes.name}
            </Text>
          </Box>
        </Box>
        <Box
          className='ck-content'
          dangerouslySetInnerHTML={{ __html: blog && blog.attributes.body }}
        ></Box>
      </Box>
    </Box>
  );
}
