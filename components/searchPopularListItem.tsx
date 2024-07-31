import React from "react";
type Props = {
  keyword: string;
  onClick: (keyword: string) => void;
};
export default function SearchPopularListItem({ keyword, onClick }: Props) {
  return (
    <button
      className="border rounded-2xl border-[#EEF1F4 px-3 py-1 cursor-pointer"
      onClick={() => onClick(keyword)}
    >
      {keyword}
    </button>
  );
}
