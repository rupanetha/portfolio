import { Box, Text, chakra } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function ArticleCard({ item }) {
  const router = useRouter();
  const { attributes: fields } = item;

  function handleArticleClick(slug) {
    router.push(`/blog/${slug}`);
  }

  return (
    <Box
      borderRadius='6px'
      overflow='hidden'
      bgColor='whitesmoke'
      width='100%'
      maxW='350px'
      cursor={'pointer'}
      onClick={() => handleArticleClick(fields.slug)}
    >
      <Box>
        <chakra.img
          height='300px'
          w='100%'
          objectFit='cover'
          src={`https://api.saikiran.codes/rupanetha/${fields.thumbnail_image.data?.attributes.url}`}
        />
      </Box>
      <Box p='4'>
        <Text fontWeight='500'>{fields.title}</Text>
        <Box mt='4' display='flex' justifyContent='center'>
          <Text fontSize='18px' fontWeight='bold'>
            {fields.blog_category.data.attributes.name}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
