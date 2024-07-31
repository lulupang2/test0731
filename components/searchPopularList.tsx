import useDragScroll from "@/hooks/useDragScroll";
import useQueryParams from "@/hooks/useQueryParams";
import { useSearchRecentlyKeyword, useSearchStateStore } from "@/store";
import React from "react";
import SearchPopularListItem from "./searchPopularListItem";
type Props = {
  data: string[];
};
export default function SearchPopularList({ data }: Props) {
  const { setRecentlyKeyword } = useSearchRecentlyKeyword();
  const { setSearchKeyword } = useSearchStateStore();
  const { setParams } = useQueryParams();
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  useDragScroll(scrollRef);
  const handleClick = (keyword: string) => {
    setRecentlyKeyword(keyword);
    setSearchKeyword(keyword);
    setParams(keyword);
  };

  return (
    <div className="">
      <h1 className="text-xl font-bold px-4 py-2">요즘 많이 찾는 검색어</h1>
      <div
        className="flex gap-3 pl-4 py-2  overflow-x-auto whitespace-nowrap scrollbar-hide"
        ref={scrollRef}
      >
        {data.map((el, index) => (
          <SearchPopularListItem
            key={index}
            keyword={el}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
