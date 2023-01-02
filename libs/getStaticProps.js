import { getJsonData } from "./getJsonData";
import { getSiteMap } from "./getSiteMap";

export async function getStaticProps() {
  try {
    const categories = await getJsonData("categories", 100);
    const posts = await getJsonData("posts", 100);
    const data = categories.concat(posts);
    const siteMap = getSiteMap(data);
    return {
      props: {
        data: data,
        categories: categories,
        posts: posts,
        siteMap: siteMap,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
