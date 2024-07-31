"use client";

import useQueryParams from "@/hooks/useQueryParams";
import { useTabStateStore } from "@/store";

export default function Tabs() {
  const { setTab, tab } = useTabStateStore();
  const { setParams } = useQueryParams();
  const handleClick = (index: number) => {
    setTab(index);
    setParams(undefined, index);
  };
  return (
    <div className="columns-3 gap-0 text-center tracking-[-0.5%]">
      <div
        className={
          tab === 0 ? "font-bold border-b-black border-b-2" : " border-b"
        }
      >
        <button className="w-full" onClick={() => handleClick(0)}>
          전체
        </button>
      </div>
      <div
        className={
          tab === 1 ? "font-bold border-b-black border-b-2" : " border-b"
        }
      >
        <button className="w-full" onClick={() => handleClick(1)}>
          업체
        </button>
      </div>
      <div
        className={
          tab === 2 ? "font-bold border-b-black border-b-2" : " border-b"
        }
      >
        <button className="w-full" onClick={() => handleClick(2)}>
          업체소식
        </button>
      </div>
    </div>
  );
}
