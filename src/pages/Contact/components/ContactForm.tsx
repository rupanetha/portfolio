import React from 'react';
import { Box, Input, Text, Textarea, chakra } from '@chakra-ui/react';
import { useForm, ValidationError } from '@formspree/react';
import { BsCheckCircleFill } from 'react-icons/bs';

import Button from '../../../components/Button';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mqkjrnlz');
  const [showFormState, setShowFormState] = React.useState('idle');

  React.useEffect(() => {
    if (state.succeeded) {
      setShowFormState('success');
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  }, [state]);

  if (showFormState === 'success') {
    return (
      <Box
        bgColor='whitesmoke'
        alignItems='center'
        display='flex'
        flexDir='column'
        p='5'
        borderRadius='6px'
        w={{ base: '100%', md: '450px' }}
      >
        <Box
          display={'flex'}
          justifyContent='center'
          alignItems='center'
          flexDirection={'column'}
          gap='3'
        >
          <BsCheckCircleFill size={'48px'} />
          <Text fontSize='3xl' fontWeight='700'>
            Thank You
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      bgColor='whitesmoke'
      alignItems='center'
      display='flex'
      flexDir='column'
      p='5'
      borderRadius='6px'
      w={{ base: '100%', md: '450px' }}
    >
      <Text fontSize='3xl' fontWeight='700'>
        Get In Touch
      </Text>
      <chakra.form w='100%' method='POST' onSubmit={handleSubmit}>
        <Box w='100%' display='flex' flexDir='column' gap='3' mt='5'>
          <Input name='name' bgColor='#fff' type='text' placeholder='Name' />
          <Input bgColor='#fff' name='email' type='email' placeholder='Email' />
          <Textarea
            bgColor='#fff'
            rows={3}
            name='message'
            placeholder='Message'
          />
        </Box>
        <Box w='100%' mt='5'>
          <Button type='submit' w='100%'>
            SUBMIT
          </Button>
        </Box>
      </chakra.form>
    </Box>
  );
}
