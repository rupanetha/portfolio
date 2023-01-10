import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaTwitterSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
// import SVG from 'react-inlinesvg';

export default function SocialLinks({ isSidebar = false }) {
  return (
    <Box gap='4' display='flex'>
      <a target='_blank' href='https://twitter.com/NethaRupa' rel='noreferrer'>
        <FaTwitterSquare size='24px' color={isSidebar ? '#000' : '#fff'} />
      </a>
      <a
        target='_blank'
        href='https://www.linkedin.com/in/sai-rupa-netha-4704521b2/'
        rel='noreferrer'
      >
        <FaLinkedin size='24px' color={isSidebar ? '#000' : '#fff'} />
      </a>
      <a
        target='_blank'
        href='https://www.instagram.com/_thelenstories_/'
        rel='noreferrer'
      >
        <FaInstagramSquare size='24px' color={isSidebar ? '#000' : '#fff'} />
      </a>
    </Box>
  );
}
