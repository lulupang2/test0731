"use client";

import SearchField from "@/components/searchField";
import SearchPopularList from "@/components/searchPopularList";
import SearchRecently from "@/components/searchRecently";
import Tabs from "@/components/tabs";
import {
  useSearchRecentlyKeyword,
  useSearchStateStore,
  useTabStateStore,
} from "@/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Company from "../company-section";

type Props = {
  children?: React.ReactNode;
  searchData: any[];
  popularList: string[];
};

const Search = ({ searchData, popularList, children }: Props) => {
  const searchParams = useSearchParams();
  const { keyword, setSearchKeyword } = useSearchStateStore();
  const { setTab } = useTabStateStore();

  useEffect(() => {
    const keyword = searchParams.get("keyword") || "";
    const tab = Number(searchParams.get("tab")) || 0;
    setSearchKeyword(keyword);
    setTab(tab);
  }, [searchParams]);

  return (
    <>
      <SearchField />
      {!keyword ? (
        <>
          <SearchPopularList data={popularList} />
          <SearchRecently />
        </>
      ) : (
        <Company />
      )}
    </>
  );
};

export default Search;
