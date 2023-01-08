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
