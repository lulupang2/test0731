"use client";
import { useSearchRecentlyKeyword, useSearchStateStore } from "@/store";
import { debounce } from "lodash";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function SearchField() {
  const router = useRouter();
  const { setRecentlyKeyword } = useSearchRecentlyKeyword();
  const { isFocused, keyword, setIsFocused, setSearchKeyword } =
    useSearchStateStore();

  const handleSearch = () => {
    if (keyword.trim()) {
      setRecentlyKeyword(keyword);
      setSearchKeyword("");
    }
  };

  const handleClear = () => {
    setSearchKeyword("");
    history.pushState(null, "", "/search");
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const debouncedSetSearchKeyword = useCallback(
    debounce((value) => {
      setSearchKeyword(value);
    }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchKeyword(value);
    debouncedSetSearchKeyword(value);
  };
  const handleBack = () => {
    router.push("/search", undefined);
  };
  return (
    <div className="flex flex-row items-center p-2">
      <div className="p-4">
        <Image
          src="/assets/icon/chevron-left.svg"
          width={24}
          height={24}
          alt="back"
          className="cursor-pointer"
          onClick={handleBack}
        />
      </div>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={keyword}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="bg-[#f8f9fb] p-2 w-full"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {keyword && (
          <Image
            onClick={handleClear}
            src={"/assets/icon/clear.svg"}
            width={24}
            height={24}
            alt="clear"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}
