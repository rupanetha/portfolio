import { chakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Props {
  menuItems: Array<{
    name: string;
    path: string;
  }>;
  type?: string;
}

export default function MenuItems({ menuItems = [], type }: Props) {
  return (
    <>
      {menuItems.map((menuItem) => (
        <chakra.span
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
          <Link to={`${menuItem.path}`}>{menuItem.name}</Link>
        </chakra.span>
      ))}
    </>
  );
}
