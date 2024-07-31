import { companyItemType } from "@/types";
import React, { useCallback, useEffect, useState } from "react";
import CompanyItem from "./companyItem";
import useObserver from "@/hooks/useObserver";
type Props = {
  data: companyItemType[];
};
export default function CompanyList({ data }: Props) {
  const [items, setItems] = useState(data);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setItems(data.slice(0, page * 5));
  }, [data, page]);

  const loadMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const observerRef = useObserver(loadMore);

  return (
    <div className="p-4">
      <div className="text-2xl font-bold">업체</div>
      {items.map((item, index) => (
        <CompanyItem key={index} data={item} />
      ))}
      <div ref={observerRef}></div>
    </div>
  );
}
