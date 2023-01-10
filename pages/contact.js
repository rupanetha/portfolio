import { Footer, Layout, NavbarAlt } from '../components/Global';
import { ContactFormBlock } from '../components/Contact';

export default function ContactPage() {
  return (
    <Layout>
      <NavbarAlt />
      <ContactFormBlock />
      <Footer />
    </Layout>
  );
}
