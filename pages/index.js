import { Footer, Layout } from '../components/Global';
import {
  CoverBlock,
  AboutBlock,
  BlockSeperator,
  ExpertisesBlock,
  WorkBlock,
  FeaturedArticlesBlock,
} from '../components/Home';
import {
  fetchAboutMeBlock,
  fetchExperiencesBlock,
  fetchWorkBlock,
} from '../services/landingpage.service';
import { fetchAllBlogs } from '../services/blog.service';

export const getStaticProps = async (context) => {
  const result = {
    props: {},
  };
  try {
    const { data: aboutMeData } = await fetchAboutMeBlock();
    const { data: expData } = await fetchExperiencesBlock();
    let { data: workData } = await fetchWorkBlock();
    workData = workData.map((media) => ({
      ...media,
      attributes: {
        ...media.attributes,
        images: media.attributes.images.data.map(
          (image) =>
            `https://api.saikiran.codes/rupanetha${image.attributes.url}`
        ),
      },
    }));
    let { data: featuredArticles } = await fetchAllBlogs();
    featuredArticles = featuredArticles.filter(
      (blog) => blog.attributes.featured
    );

    result.props.aboutMeData = aboutMeData[0];
    result.props.expData = expData;
    result.props.workData = workData;
    result.props.featuredArticles = featuredArticles;
  } catch (error) {
    console.error(error);
  }

  return result;
};

function HomePage(props) {
  return (
    <Layout>
      <CoverBlock />
      <AboutBlock about={props.aboutMeData} />
      <BlockSeperator title='MY EXPERTISE' />
      <ExpertisesBlock expData={props.expData} />
      <BlockSeperator title='MY DESIGNS' />
      <WorkBlock workData={props.workData} />
      <BlockSeperator title='LATEST ARTICLES' />
      <FeaturedArticlesBlock featuredArticles={props.featuredArticles} />
      <Footer />
    </Layout>
  );
}

export default HomePage;
