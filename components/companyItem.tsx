import { companyItemType } from "@/types";
import Image from "next/image";
import React from "react";
type Props = {
  data: companyItemType;
};
export default function CompanyItem({ data }: Props) {
  return (
    <div className="flex flex-row gap-3 py-3 w-full ">
      <div className="border-[0.5px] relative grow flex-shrink-0 basis-1/3  w-full h-auto aspect-square">
        <Image src={data.logo} fill alt="company" />
      </div>

      <div className="flex flex-col flex-grow basis-2/3 min-w-0 ">
        <div className="flex items-center gap-1">
          <span className="font-bold">{data.name}</span>
          <img src="/assets/icon/new.svg" alt="new" />
        </div>

        <div className="flex items-center gap-1 text-xs">
          <img src="/assets/icon/new.svg" alt="star" />
          <span className="text-sm font-bold">{data.rating}</span>
          <span className="text-gray-500">
            ({data.reviewCount.toLocaleString("ko-KR")})
          </span>
          ㆍ <span className="text-gray-500">{data.category}</span>ㆍ
          <span className="text-gray-500">{data.location}</span>
        </div>

        <div className="flex flex-row"></div>
        <div className="p-2 bg-[#F0F4FF] rounded-lg w-fit flex gap-1">
          <img src="/assets/icon/coupon.svg" alt="gift" />
          {data.reward === "gift" ? (
            <span
              className="
            text-[#0066FF] text-sm font-bold"
            >
              사은품 추가 지급
            </span>
          ) : data.reward === "reward" ? (
            <span
              className="
            text-[#0066FF] text-sm font-bold"
            >
              지급혜택
            </span>
          ) : null}
        </div>
        <div className="truncate">
          <span className="text-sm">{data.description.substring(0, 21)}</span>
        </div>
      </div>
    </div>
  );
}
