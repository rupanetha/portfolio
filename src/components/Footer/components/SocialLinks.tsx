import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaTwitterSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
// import SVG from 'react-inlinesvg';

export default function SocialLinks({ isSidebar = false }) {
  return (
    <Box gap='4' display='flex'>
      <FaTwitterSquare size='24px' color={isSidebar ? '#000' : '#fff'} />
      <FaLinkedin size='24px' color={isSidebar ? '#000' : '#fff'} />
      <FaInstagramSquare size='24px' color={isSidebar ? '#000' : '#fff'} />
    </Box>
  );
}
