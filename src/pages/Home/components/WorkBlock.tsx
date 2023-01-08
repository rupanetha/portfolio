import React from 'react';
import { Box, chakra, useMediaQuery } from '@chakra-ui/react';
import { Carousel } from 'react-configurable-carousel';

import { WorkBlockLoader } from '../../../components/Loading';
import { useHomePageStore } from '../utils/store';
import { fetchWorkBlock } from '../../../services/landingpage.service';

export default function WorkBlock() {
  const [loading, setLoading] = React.useState(true);
  const [workMedia, setWorkMedia] = useHomePageStore((state: any) => [
    state.workMedia,
    state.setWorkMedia,
  ]);

  React.useEffect(() => {
    getWorkMediaData();
  }, []);

  async function getWorkMediaData() {
    try {
      let { data } = await fetchWorkBlock();
      data = data.map((media: any) => ({
        ...media,
        attributes: {
          ...media.attributes,
          images: media.attributes.images.data.map(
            (image: any) =>
              `https://api.saikiran.codes/rupanetha${image.attributes.url}`
          ),
        },
      }));
      setWorkMedia(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const carouselRef = React.useCallback(
    (carouselNode) => {
      if (carouselNode !== null && workMedia && !loading) {
        // console.log(carouselNode);
        const imgElements =
          carouselNode.childNodes[0].childNodes[0].childNodes[0].childNodes[0]
            .childNodes;
        if (imgElements) {
          for (const imgEl of imgElements) {
            imgEl.style.width = '85%';
            console.log(imgEl.style.width);
          }
        }
      }
    },
    [loading]
  );

  if (loading) {
    return <WorkBlockLoader />;
  }

  return (
    <Box
      w='100%'
      display='flex'
      py={{ base: '56px', md: '96px' }}
      px={{ base: '36px', md: 'unset' }}
    >
      {workMedia && (
        <Box ref={carouselRef} maxW='1280px' w='50%' margin='0 auto'>
          <Carousel
            arrows={false}
            dotsNavigation={false}
            dotsNavigationInside={true}
            width={'100%'}
            height={!isLargerThan768 ? '350px' : '500px'}
            carouselStyle={'3d'}
          >
            {workMedia[0].attributes.images.map((image: any) => (
              <chakra.img h='100%' w='100%' objectFit={'cover'} src={image} />
            ))}
          </Carousel>
        </Box>
      )}
    </Box>
  );
}
