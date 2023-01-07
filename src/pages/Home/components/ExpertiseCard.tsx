import { Box, Text } from '@chakra-ui/react';

export default function ExpertiseCard({ data }: any) {
  const { attributes: fields } = data;
  return (
    <Box mt='4' p='24px' bgColor='whitesmoke'>
      <Text fontSize='20px' fontWeight='bold'>
        {fields.title}
      </Text>
      <Box mt='2' mb='2' display='flex'>
        <Text
          fontSize='14px'
          lineHeight='5'
          px='2'
          borderRadius='6px'
          bgColor='#000'
          color='#fff'
        >
          {fields.status}
        </Text>
      </Box>
      <Text lineHeight='5' fontWeight='400'>
        {fields.short_description}
      </Text>
    </Box>
  );
}
