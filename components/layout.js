import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";

export default function Layout({ children, siteMap }) {
  return (
    <>
      <Meta />
      <Header siteMap={siteMap} />

      <main className="flex flex-col w-full relavite">{children}</main>
      <Footer />
    </>
  );
}
