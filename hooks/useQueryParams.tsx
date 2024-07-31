import { useSearchStateStore, useTabStateStore } from "@/store";
import { useSearchParams } from "next/navigation";

const useQueryParams = () => {
  const searchParams = useSearchParams();
  const { keyword: currentKeyword } = useSearchStateStore();
  const { tab: currentTab } = useTabStateStore();

  const setParams = (keyword?: string, tab?: number) => {
    const newUrl = `/search?keyword=${keyword ?? currentKeyword}&tab=${
      tab ?? currentTab
    }`;
    history.pushState(null, "", newUrl);
  };

  const getParams = () => {
    const keyword = searchParams.get("keyword");
    const tab = Number(searchParams.get("tab"));
    return { keyword, tab };
  };

  return { getParams, setParams };
};

export default useQueryParams;
