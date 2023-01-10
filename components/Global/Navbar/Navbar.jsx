import React from 'react';
import { Box, chakra } from '@chakra-ui/react';
import SVG from 'react-inlinesvg';
import { GiHamburgerMenu } from 'react-icons/gi';

import MenuItems from './components/MenuItems';
import { menuItems } from './utils/menuConfig';
import Sidebar from './Sidebar';

export default function Navbar() {
  const [isSidebarActive, setIsSidebarActive] = React.useState(false);
  return (
    <>
      {<Sidebar isActive={isSidebarActive} setIsActive={setIsSidebarActive} />}
      <Box
        px={{ base: '32px', md: '76px' }}
        py='24px'
        justifyContent='space-between'
        color='#fff'
        display='flex'
        alignItems='center'
      >
        <Box display='flex' alignItems='center' gap='4'>
          <SVG width='28px' height='28px' src='/assets/img/logo.svg' />
          <chakra.span
            fontWeight='800'
            textTransform='uppercase'
            letterSpacing='3px'
            fontSize='18px'
          >
            Rupa Netha
          </chakra.span>
        </Box>
        <Box display={{ base: 'none', md: 'flex' }}>
          <MenuItems menuItems={menuItems} />
        </Box>
        <Box display={{ base: 'flex', md: 'none' }}>
          <GiHamburgerMenu
            onClick={() => setIsSidebarActive(!isSidebarActive)}
            size={'24px'}
          />
        </Box>
      </Box>
    </>
  );
}
