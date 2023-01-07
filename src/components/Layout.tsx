import { Box } from '@chakra-ui/react';

interface Props {
  children: Array<JSX.Element>;
}

export default function Layout({ children }: Props) {
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
