import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import SocialLinks from './components/SocialLinks';

export default function Footer() {
  return (
    <Box bgColor='rgba(5,5,5,.9)' w='100%'>
      <Box
        display='flex'
        flexDir='column'
        margin='0 auto'
        maxW='960px'
        boxSizing='content-box'
        alignItems='center'
        gap='8'
        w='100%'
        p={{ base: '66px 0', md: '80px 8%' }}
      >
        <SocialLinks />
        <Text letterSpacing='1px' fontWeight='500' fontSize='18px' color='#fff'>
          Copyright @. All Rights Reserved.
        </Text>
      </Box>
    </Box>
  );
}
