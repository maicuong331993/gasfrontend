import Layout from "../components/layout";
import News from "../components/news";
import SlideShow from "../components/slideshow";

export default function Home({ siteMap }) {
  return (
    <Layout siteMap={siteMap}>
      <SlideShow />
      <News />
    </Layout>
  );
}

export { getStaticProps } from "../libs/getStaticProps";
