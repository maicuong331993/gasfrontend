import { useRouter } from "next/router";

export default function ProductPost() {
  const router = useRouter();

  return (
    <div>
      <p>
        {router.query.mainNav}
        {" > "}
        {router.query.dropdown}
        {" > "}
        {router.query.productPost}
      </p>
      <a href="/">Back to home</a>
    </div>
  );
}
