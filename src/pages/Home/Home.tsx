import { Helmet } from 'react-helmet';

import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';
import AboutBlock from './components/AboutBlock';
import BlockSeperator from './components/BlockSeperator';
import CoverBlock from './components/CoverBlock';
import ExpertisesBlock from './components/ExpertisesBlock';
import FeaturedArticlesBlock from './components/FeaturedArticlesBlock';
import WorkBlock from './components/WorkBlock';

function HomePage() {
  return (
    <Layout>
      <Helmet>
        <meta name='description' content='A personal Portfolio and Blog' />
        <meta name='og:description' content='A personal Portfolio and Blog' />
        <meta
          property='og:image'
          content='https://api.saikiran.codes/rupanetha/uploads/site_screen_517a289a92.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <title>Rupa Netha | Portfolio - Home</title>
      </Helmet>
      <CoverBlock />
      <AboutBlock />
      <BlockSeperator title='MY EXPERTISE' />
      <ExpertisesBlock />
      <BlockSeperator title='MY DESIGNS' />
      <WorkBlock />
      <BlockSeperator title='LATEST ARTICLES' />
      <FeaturedArticlesBlock />
      <Footer />
    </Layout>
  );
}

export default HomePage;
