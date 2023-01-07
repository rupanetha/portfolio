import { Box, Text } from '@chakra-ui/react';
import { pulseAnimation } from './constants';

export default function WorkBlock() {
  return (
    <Box
      w='100%'
      display='flex'
      py={{ base: '56px', md: '96px' }}
      px={{ base: '36px', md: 'unset' }}
    >
      <Box w={{ base: '100%', md: '50%' }} maxW='1280px' margin='0 auto'>
        <Box w='100%' animation={pulseAnimation}>
          <Box
            w='100%'
            bgColor={'#ccc'}
            height={{ base: '350px', md: '500px' }}
          />
        </Box>
      </Box>
    </Box>
  );
}
