import { NextSeo } from 'next-seo';

import { Footer, Layout, NavbarAlt } from '../../components/Global';
import { fetchAllBlogs, fetchOneBlog } from '../../services/blog.service';
import { ArticleBlock } from '../../components/Blog';

export const getStaticProps = async ({ params }) => {
  const result = {
    props: {},
  };
  try {
    const { data: blogData } = await fetchOneBlog(params.slug);

    result.props.blog = blogData[0];
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const getStaticPaths = async (context) => {
  let paths = [];
  try {
    const { data: blogData } = await fetchAllBlogs();

    paths = blogData.map((blog) => ({
      params: { slug: blog.attributes.slug },
    }));
  } catch (error) {
    console.error(error);
  }

  return {
    paths,
    fallback: false,
  };
};

export default function BlogPage(props) {
  const host =
    typeof window !== 'undefined' && window.location.host
      ? window.location.host
      : '';
  return (
    <>
      <NextSeo
        title={`Rupa Netha | ${props.blog.attributes.title}`}
        description={props.blog.attributes.short_description}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: props.blog.attributes.publishedAt,
            modifiedTime: props.blog.attributes.updatedAt,
            tags: [props.blog.attributes.blog_category.data.attributes.slug],
          },
          url: `${host}/blog/${props.blog.attributes.slug}`,
          images: [
            {
              url: `https://api.saikiran.codes/rupanetha/${props.blog.attributes.thumbnail_image.data?.attributes.url}`,
              width: 850,
              height: 650,
              alt: 'Thumbnail Image',
            },
          ],
          site_name: 'Rupa Netha | Blog',
        }}
        twitter={{
          handle: '@NethaRupa',
          site: '@rupanetha.com',
          cardType: 'summary_large_image',
        }}
      />
      <Layout>
        <NavbarAlt />
        <ArticleBlock blog={props.blog} />
        <Footer />
      </Layout>
    </>
  );
}
