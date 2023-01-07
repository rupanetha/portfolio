import React from 'react';
import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';
import { NavbarAlt } from '../../components/Navbar';
import ContactFormBlock from './components/ContactFormBlock';

export default function Contact() {
  return (
    <Layout>
      <NavbarAlt />
      <ContactFormBlock />
      <Footer />
    </Layout>
  );
}
