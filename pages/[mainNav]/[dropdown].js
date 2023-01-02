import { useRouter } from "next/router";

export default function DropDownPost() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <p>
        {router.query.mainNav}
        {" > "}
        {router.query.dropdown}
      </p>
      <a href="/">Back to home</a>
    </div>
  );
}
