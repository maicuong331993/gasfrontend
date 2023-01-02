import { getSiteMap } from "../libs/getSiteMap";
export default function Test({ all }) {
  const menuForm = getSiteMap(all);

  return (
    <div>
      <p>Bo await cung dc sao?</p>
      <p>Why it hidden?</p>

      {/* {JSON.stringify(menuForm)} */}
    </div>
  );
}
export { getStaticProps } from "../libs/getStaticProps";
