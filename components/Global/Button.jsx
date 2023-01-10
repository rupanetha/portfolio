import { Button as CButton } from '@chakra-ui/react';

export default function Button({ variant = 'contained', children, ...props }) {
  const styles =
    variant === 'contained'
      ? {
          borderRadius: '0',
          backgroundColor: 'black',
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontWeight: '300',
        }
      : {
          borderRadius: '0',
          backgroundColor: 'white',
          color: '#000',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontWeight: '500',
          border: '1px solid #000',
        };
  return (
    <CButton
      {...styles}
      _hover={
        variant === 'contained'
          ? {
              backgroundColor: 'white',
              color: '#000',
              border: '1px solid #000',
            }
          : {
              backgroundColor: 'black',
              color: '#fff',
            }
      }
      {...props}
    >
      {children}
    </CButton>
  );
}
