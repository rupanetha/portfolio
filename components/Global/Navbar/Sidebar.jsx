import { Box, chakra } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import Link from 'next/link';
import Button from '../Button';
import SocialLinks from '../Footer/components/SocialLinks';
import { menuItems } from './utils/menuConfig';

export default function Sidebar({ isActive, setIsActive }) {
  return (
    <Box
      height={'100vh'}
      width='100vw'
      zIndex={'99999'}
      bgColor='#fff'
      //   display={{ base: isActive ? 'block' : 'none', md: 'none' }}
      position={'fixed'}
      top='0'
      left={'0'}
      p='34px'
      transform={isActive ? 'translateX(0)' : 'translateX(-100vw)'}
      transition='transform .3s'
      display={'flex'}
      flexDir='column'
    >
      <Box display={'flex'} justifyContent='flex-end'>
        <MdClose size={'36px'} onClick={() => setIsActive(!isActive)} />
      </Box>
      <Box
        mt='4'
        flex='1'
        display={'flex'}
        justifyContent='center'
        alignItems={'center'}
        flexDir='column'
        gap='2'
      >
        <Box mb='12' w='100%' display='flex' flexDir={'column'} gap='2'>
          {menuItems.map((menuItem, idx) => (
            <Button
              key={idx + 1}
              variant='outlined'
              letterSpacing={'2px'}
              fontWeight='600'
              fontSize={'2xl'}
              w='100%'
              py='22px'
              textTransform={'uppercase'}
            >
              <Link href={`${menuItem.path}`}>{menuItem.name}</Link>
            </Button>
          ))}
        </Box>

        <Box mt='8'>
          <SocialLinks isSidebar />
        </Box>
      </Box>
    </Box>
  );
}
