import { Box, Text } from '@chakra-ui/react';

export default function BlockSeperator({ title = '' }) {
  return (
    <Box
      w='100%'
      py={{ base: '36px', md: '48px' }}
      bgColor='#000'
      display='flex'
      justifyContent='center'
    >
      <Text
        textTransform='capitalize'
        fontSize={{ base: '3xl', md: '4xl' }}
        color='#fff'
      >
        {title}
      </Text>
    </Box>
  );
}
