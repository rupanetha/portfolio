import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import ExpertiseCard from './ExpertiseCard';

export default function ExpertisesBlock({ expData }) {
  const experienceData =
    expData && expData.filter((item) => item.attributes.type === 'work');
  const educationData =
    expData && expData.filter((item) => item.attributes.type === 'education');

  return (
    <Box
      w='100%'
      display='flex'
      py={{ base: '56px', md: '96px' }}
      px={{ base: '36px', md: 'unset' }}
    >
      <Box
        gap={{ base: '6', md: '12' }}
        display='flex'
        flexDirection={{ base: 'column', md: 'row' }}
        maxW='960px'
        margin='0 auto'
      >
        <Box flexBasis={'50%'}>
          <Text fontWeight='600' fontSize='2xl'>
            My Experience
          </Text>
          {experienceData &&
            experienceData.map((expItem, idx) => (
              <ExpertiseCard key={idx + 1} data={expItem} />
            ))}
        </Box>
        <Box flexBasis={'50%'}>
          <Text fontWeight='600' fontSize='2xl'>
            My Education
          </Text>

          {educationData &&
            educationData.map((eduItem, idx) => (
              <ExpertiseCard key={idx + 1} data={eduItem} />
            ))}
        </Box>
      </Box>
    </Box>
  );
}
