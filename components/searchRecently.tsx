import useQueryParams from "@/hooks/useQueryParams";
import { useSearchRecentlyKeyword, useSearchStateStore } from "@/store";
import Image from "next/image";

export default function SearchRecently() {
  const { recentlyKeyword, clearSearchHistory } = useSearchRecentlyKeyword();
  const { setSearchKeyword } = useSearchStateStore();
  const { setParams } = useQueryParams();
  const handleClick = (keyword: string) => {
    setParams(keyword);
    setSearchKeyword(keyword);
  };
  return (
    <div className="px-4">
      <div className="flex flex-row justify-between items-center">
        <div className="text-xl font-bold py-2">최근 검색한</div>
        <button onClick={() => clearSearchHistory()}>전체 지우기</button>
      </div>
      <div>
        {recentlyKeyword.map((el, index) => (
          <div
            className="flex flex-row justify-between items-center"
            key={index}
          >
            <span onClick={() => handleClick(el)}>{el}</span>
            <Image
              src="/assets/icon/close.svg"
              width={12}
              height={12}
              alt="delete"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
