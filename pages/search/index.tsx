import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  return <div id="title"> 검색 결과 : {q} </div>;
}
