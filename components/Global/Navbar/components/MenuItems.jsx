import { chakra } from '@chakra-ui/react';
import Link from 'next/link';

export default function MenuItems({ menuItems = [], type }) {
  return (
    <>
      {menuItems.map((menuItem, idx) => (
        <chakra.span
          key={idx + 1}
          fontWeight='600'
          letterSpacing='2px'
          textTransform='uppercase'
          px='4'
          fontSize={'14px'}
          _hover={{
            color: type === 'alt' ? '#000' : '#ccc',
          }}
          color={type === 'alt' ? '#5e5e5e' : undefined}
        >
          <Link href={`${menuItem.path}`}>{menuItem.name}</Link>
        </chakra.span>
      ))}
    </>
  );
}
