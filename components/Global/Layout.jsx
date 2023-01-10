import { Box } from '@chakra-ui/react';

export default function Layout({ children }) {
  return (
    <Box
      overflowX={{ base: 'hidden' }}
      display='flex'
      flexDir='column'
      width={'100vw'}
      minH='100vh'
    >
      {children}
    </Box>
  );
}
