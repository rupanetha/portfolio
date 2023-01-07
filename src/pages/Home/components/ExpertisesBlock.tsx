import React from 'react';
import { Box, Text } from '@chakra-ui/react';


import { useHomePageStore } from '../utils/store';
import ExpertiseCard from './ExpertiseCard';
import { ExpertiseCardLoader } from '../../../components/Loading';
import { fetchExperiencesBlock } from '../../../services/landingpage.service';

export default function ExpertisesBlock() {
  const [loading, setLoading] = React.useState(true);
  const [experiences, setExperiences] = useHomePageStore((state: any) => [
    state.experiences,
    state.setExperiences,
  ]);

  React.useEffect(() => {
    getExperiencesData();
  }, []);

  async function getExperiencesData() {
    try {
      const { data } = await fetchExperiencesBlock();
      setExperiences(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const experienceData =
    experiences &&
    experiences.filter((item: any) => item.attributes.type === 'work');
  const educationData =
    experiences &&
    experiences.filter((item: any) => item.attributes.type === 'education');

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
          {loading && [1, 2].map(() => <ExpertiseCardLoader />)}
          {experienceData &&
            experienceData.map((expItem: any) => (
              <ExpertiseCard data={expItem} />
            ))}
        </Box>
        <Box flexBasis={'50%'}>
          <Text fontWeight='600' fontSize='2xl'>
            My Education
          </Text>
          {loading && [1, 2].map(() => <ExpertiseCardLoader />)}

          {educationData &&
            educationData.map((eduItem: any) => (
              <ExpertiseCard data={eduItem} />
            ))}
        </Box>
      </Box>
    </Box>
  );
}
