import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';
import { NavbarAlt } from '../../components/Navbar';
import ArticleBlock from './components/ArticleBlock';

export default function BlogDetails() {
  return (
    <Layout>
      <NavbarAlt />
      <ArticleBlock />
      <Footer />
    </Layout>
  );
}
