import { Box } from '@chakra-ui/react';
import ContactForm from './ContactForm';

export default function ContactFormBlock() {
  return (
    <Box
      w='100%'
      display='flex'
      alignItems='center'
      flex='1'
      py='96px'
      px={{ base: '36px', md: 'unset' }}
    >
      <Box w={{ base: '100%', md: 'unset' }} maxW='960px' margin='0 auto'>
        <ContactForm />
      </Box>
    </Box>
  );
}
