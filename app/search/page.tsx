import Search from "@/containers/search-page";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

async function getSearchList() {
  const res = await fetch("http://localhost:3000/api/search");
  if (!res.ok) throw new Error("API Error");
  return res.json();
}
async function getSearchPopularList() {
  const res = await fetch("http://localhost:3000/api/popularlist");
  if (!res.ok) throw new Error("API Error");
  return res.json();
}

export default async function Page() {
  const searchList = await getSearchList();
  const popularList = await getSearchPopularList();

  return (
    <main className="flex flex-col">
      <Suspense fallback={<Loading />}>
        <Search searchData={searchList} popularList={popularList} />
      </Suspense>
    </main>
  );
}
