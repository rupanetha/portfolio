import { Footer, Layout, NavbarAlt } from '../../components/Global';
import { fetchAllBlogs, fetchAllCategories } from '../../services/blog.service';
import { MyArticlesBlock } from '../../components/Blog';

export const getStaticProps = async (context) => {
  const result = {
    props: {},
  };
  try {
    const { data: blogData } = await fetchAllBlogs();
    const { data: categoriesData } = await fetchAllCategories();

    result.props.articles = blogData;
    result.props.categories = categoriesData;
  } catch (error) {
    console.error(error);
  }

  return result;
};

export default function BlogPage(props) {
  return (
    <Layout>
      <NavbarAlt />
      <MyArticlesBlock
        articles={props.articles}
        categories={props.categories}
      />
      <Footer />
    </Layout>
  );
}
