import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';
import { NavbarAlt } from '../../components/Navbar';
import MyArticlesBlock from './components/MyArticlesBlock';

export default function Blog() {
  return (
    <Layout>
      <NavbarAlt />
      <MyArticlesBlock />
      <Footer />
    </Layout>
  );
}
