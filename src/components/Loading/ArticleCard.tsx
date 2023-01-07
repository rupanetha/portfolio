import { Box, Text } from '@chakra-ui/react';
import { pulseAnimation } from './constants';

export default function ArticleCard() {
  return (
    <Box
      borderRadius='6px'
    //   overflow='hidden'
      bgColor='whitesmoke'
      width='100%'
      maxW='350px'
      w='350px'
    >
      <Box w='100%' display={'flex'} flexDir='column' animation={pulseAnimation}>
        <Box bgColor={'#ccc'} height='300px' />
        <Box mt='2' mb='2' bgColor={'#ccc'} height='16px' />
        <Box bgColor={'#ccc'} height='16px' />
        <Box mt='2' bgColor={'#ccc'} height='16px' />
      </Box>
    </Box>
  );
}
