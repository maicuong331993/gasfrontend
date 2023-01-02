import { useRouter } from "next/router";
import { getJsonData } from "../libs/getJsonData";
import Layout from "../components/layout";
import getTitle from "../libs/getTitle";
import { getPostByRouter } from "../libs/getPostByRouter";

export { getStaticProps } from "../libs/getStaticProps";

export async function getStaticPaths() {
  try {
    const categories = await getJsonData("categories", 100);
    const mainCategories = categories.filter((c) => c.parent === 0);
    const paths = mainCategories.map((c) => ({ params: { mainNav: c.slug } }));
    return { paths, fallback: false };
  } catch (error) {
    console.error(error);
  }
}
export default function MainNavPost({ siteMap, data }) {
  const router = useRouter();
  const { mainNav } = router.query;
  const title = getTitle(mainNav, data);
  const post = getPostByRouter(mainNav, data);
  const curentObj = siteMap.filter((obj) => obj.slug === mainNav);

  return (
    <Layout siteMap={siteMap}>
      <div className="flex relative w-full h-72 overflow-hidden">
        <img
          className="absolute h-full w-full object-cover"
          src="../assets/images/about-us-title.jpg"
        />
        <div className="flex flex-col space-y-10 absolute w-full items-center bottom-1/3">
          <h1 className="text-white font-normal font-sans md:text-5xl text-2xl">
            {title}
          </h1>
          <div className="flex space-x-2">
            <a href="/">
              <span className="text-slate-100 hover:text-slate-300">Home</span>
            </a>
            <p className="text-slate-100">{">"}</p>
            <a
              className="text-slate-100 hover:text-slate-300"
              href={`/${mainNav}`}
            >
              {title}
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-slate-50">
        <div className="flex flex-col mt-10 relative bg-transparent w-4/5 lg:w-2/3 animate-fade-in-up">
          {post.map((p) => (
            <p className="mb-8 mt-8 text-2xl">
              {p.excerpt.rendered.replace(/[<p></p>]/gm, "")}
            </p>
          ))}
        </div>
        <div className="flex w-4/5 lg:w-2/3 mt-20 mb-20 bg-white shadow-slate-400 shadow-xl">
          <div className="flex flex-col space-y-3 text-justify m-8">
            {mainNav === "compressed-air-technique" ||
            mainNav === "gas-generation-technique" ? (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 mb-8 w-full justify-items-stretch items-stretch">
                {curentObj[0]["items"].map((item) => (
                  <div className=" justify-self-stretch self-stretch p-2 text-sky-900 bg-transparent border border-black text-center">
                    {item.name}
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}

            {post.map((p) => (
              <p className="mb-8 mt-8">
                {p.content.rendered.replace(/[<p></p>]/gm, "")}
              </p>
            ))}

            {mainNav === "about-us" ? (
              <div className="flex border border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 w-full justify-items-stretch items-stretch text-black text-xl font-semibold leading-6 text-center">
                  {curentObj[0]["items"].map((item) => (
                    <div className=" justify-self-stretch self-stretch p-8 text-slate-800 bg-transparent hover:bg-sky-200">
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
