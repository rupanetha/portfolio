import { Box, Text } from '@chakra-ui/react';
import { pulseAnimation } from './constants';

export default function ExpertiseCard() {
  return (
    <Box w={{ base: '100%', md: '400px' }} mt='4' p='24px' bgColor='whitesmoke'>
      <Box display={'flex'} flexDir='column' animation={pulseAnimation} gap='3'>
        <Box bgColor={'#ccc'} height='16px' />
        <Box mt='2' mb='2' bgColor={'#ccc'} height='16px' />
        <Box bgColor={'#ccc'} height='16px' />
      </Box>
    </Box>
  );
}
