import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

import '../styles/globals.css';
import '../styles/ck-content.css';

const theme = extendTheme({
  fonts: {
    body: `'Raleway', sans-serif`,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      {/* <DefaultSeo
        title='Rupa Netha | Portfolio'
        description='A personal Portfolio and Blog'
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://rupanetha.com/',
          siteName: 'Rupa Netha | Portfolio',
          images: [
            {
              url: 'https://api.saikiran.codes/rupanetha/uploads/site_screen_517a289a92.png',
              width: 850,
              height: 650,
              alt: 'Thumbnail Image',
            },
          ],
        }}
        twitter={{
          handle: '@NethaRupa',
          site: '@rupanetha.com',
          cardType: 'summary_large_image',
        }}
      /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
