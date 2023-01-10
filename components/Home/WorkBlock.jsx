import React from 'react';
import { Box, chakra, useMediaQuery } from '@chakra-ui/react';
import { Carousel } from 'react-configurable-carousel';

export default function WorkBlock({ workData }) {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const carouselRef = React.useCallback((carouselNode) => {
    if (carouselNode !== null && workData) {
      // console.log(carouselNode);
      const imgElements =
        carouselNode.childNodes[0].childNodes[0].childNodes[0].childNodes[0]
          .childNodes;
      if (imgElements) {
        for (const imgEl of imgElements) {
          imgEl.style.width = '85%';
        }
      }
    }
  }, []);

  return (
    <Box
      w='100%'
      display='flex'
      py={{ base: '56px', md: '96px' }}
      px={{ base: '36px', md: 'unset' }}
    >
      {workData && (
        <Box
          ref={carouselRef}
          maxW={{ base: '100%', md: '1280px' }}
          w={{ base: '100%', md: '50%' }}
          margin='0 auto'
        >
          <Carousel
            arrows={false}
            dotsNavigation={false}
            dotsNavigationInside={true}
            width={'100%'}
            height={!isLargerThan768 ? '350px' : '500px'}
            carouselStyle={'3d'}
          >
            {workData[0].attributes.images.map((image, idx) => (
              <chakra.img
                key={idx + 1}
                h='100%'
                w='100%'
                objectFit={'cover'}
                src={image}
              />
            ))}
          </Carousel>
        </Box>
      )}
    </Box>
  );
}
