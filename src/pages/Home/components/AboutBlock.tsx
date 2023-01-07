import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { AboutBlockLoader } from '../../../components/Loading';
import { useHomePageStore } from '../utils/store';
import { fetchAboutMeBlock } from '../../../services/landingpage.service';

export default function AboutBlock() {
  const [loading, setLoading] = React.useState(true);
  const [about, setAbout] = useHomePageStore((state: any) => [
    state.about,
    state.setAbout,
  ]);

  React.useEffect(() => {
    getAboutMeData();
  }, []);

  async function getAboutMeData() {
    try {
      const { data } = await fetchAboutMeBlock();
      setAbout(data[0]);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) {
    return <AboutBlockLoader />;
  }

  return (
    <Box
      display='flex'
      flexDir='column'
      gap={{ base: '3', md: '6' }}
      py={{ base: '56px', md: '96px' }}
      px={{ base: '32px', md: 'unset' }}
      margin='0 auto'
      maxW='960px'
      w='100%'
    >
      <Text
        letterSpacing='1px'
        textTransform='uppercase'
        fontSize={{ base: '2xl', md: '3xl' }}
        fontWeight={{ base: '600', md: 'unset' }}
      >
        About {about && about.attributes.name}
      </Text>
      <Text
        lineHeight={{ base: '26px', md: '32px' }}
        fontSize={{ base: '16px', md: '18px' }}
      >
        {about && about?.attributes.about_me}
      </Text>
      {/* <Box mt='4'>
        <Button variant='contained'>Read More</Button>
      </Box> */}
    </Box>
  );
}
