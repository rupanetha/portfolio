import { Box, chakra } from '@chakra-ui/react';
import { GoPrimitiveDot } from 'react-icons/go';

import { Navbar } from '../Global';

const CGoPrimitiveDot = chakra(GoPrimitiveDot);

export default function CoverBlock() {
  return (
    <Box
      pos='relative'
      bgPos='center'
      bgSize='cover'
      bgRepeat='no-repeat'
      bgAttachment='fixed'
      minH='100vh'
      bg='linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url("/assets/img/cover.png") fixed'
    >
      <Navbar />
      <Box
        pos='absolute'
        top={{ base: '40%', md: '50%' }}
        width='100%'
        textAlign='center'
        color='#000'
        fontSize='27px'
        letterSpacing='8px'
        display='flex'
        alignItems={'center'}
        justifyContent='center'
        flexDir={{ base: 'column', md: 'row' }}
        //   textTransform='uppercase'
      >
        <chakra.span fontSize='4xl' color='#fff'>
          Branding
        </chakra.span>
        <CGoPrimitiveDot
          size={'24px'}
          display={{ base: 'none', md: 'block' }}
          color='#fff'
        />
        <chakra.span ml='2' fontSize='4xl' color='#fff'>
          Marketing
        </chakra.span>
        <CGoPrimitiveDot
          display={{ base: 'none', md: 'block' }}
          size={'24px'}
          color='#fff'
        />
        <chakra.span ml='2' fontSize='4xl' color='#fff'>
          Design
        </chakra.span>
      </Box>
    </Box>
  );
}
