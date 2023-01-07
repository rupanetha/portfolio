import { Box } from '@chakra-ui/react';
import { pulseAnimation } from './constants';

export default function About() {
  return (
    <Box
      display='flex'
      flexDir='column'
      gap={{ base: '3', md: '6' }}
      py={{ base: '56px', md: '96px' }}
      px={{ base: '32px', md: 'unset' }}
      margin='0 auto'
      maxW='960px'
      w='100%'
    >
      <Box display={'flex'} flexDir='column' animation={pulseAnimation} gap='3'>
        <Box mb='8' bgColor={'#ccc'} height='16px' maxW={'20%'} />
        <Box bgColor={'#ccc'} height='16px' />
        <Box bgColor={'#ccc'} height='16px' />
        <Box bgColor={'#ccc'} height='16px' />
        <Box bgColor={'#ccc'} height='16px' />
        <Box bgColor={'#ccc'} height='16px' />
      </Box>
    </Box>
  );
}
