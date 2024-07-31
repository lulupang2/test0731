import CompanyAll from "@/components/companyAll";
import CompanyList from "@/components/companyList";
import CompanyNotice from "@/components/companyNotice";
import Tabs from "@/components/tabs";
import useQueryParams from "@/hooks/useQueryParams";
import { useSearchStateStore, useTabStateStore } from "@/store";
import { companyItemType } from "@/types";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Company = () => {
  const [data, setData] = useState<companyItemType[]>([]);
  const searchParams = useSearchParams();
  const { getParams } = useQueryParams();
  const tab = getParams().tab;
  const getSearchResults = async () => {
    const response = await fetch("http://localhost:3000/api/search");
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <section>
      <Tabs />
      {tab === 1 ? (
        <CompanyList data={data} />
      ) : tab === 2 ? (
        <CompanyNotice />
      ) : (
        <CompanyAll data={data.slice(0, 3)} />
      )}
    </section>
  );
};

export default Company;
