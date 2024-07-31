import React from "react";
import CompanyItem from "./companyItem";
import { companyItemType } from "@/types";
import { useTabStateStore } from "@/store";
import useQueryParams from "@/hooks/useQueryParams";
type Props = {
  data: companyItemType[];
};
export default function CompanyAll({ data }: Props) {
  const { setTab } = useTabStateStore();
  const { setParams } = useQueryParams();
  const handleMoreClick = () => {
    setTab(1);
    setParams(undefined, 1);
  };
  return (
    <div className="p-4">
      <div className="text-2xl font-bold">업체</div>
      {data?.map((item, index) => (
        <CompanyItem key={index} data={item} />
      ))}
      <div
        className="flex flex-row items-center justify-center p-4 bg-[#EEF1F4] h-full"
        onClick={handleMoreClick}
      >
        <span className="font-bold">업체 더 보기</span>
        <img src="/assets/icon/chevron-down.svg" alt="arrow" />
      </div>
    </div>
  );
}
