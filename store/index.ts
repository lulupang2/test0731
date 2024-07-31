import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type searchRecentlyKeywordType = {
    recentlyKeyword: string[]
    setRecentlyKeyword: (search: string) => void
    clearSearchHistory: () => void;
    clearOneSearchHistory: (search: string) => void;
}
type searchStateType = {
    keyword: string
    setSearchKeyword: (search: string) => void
    isFocused: boolean
    setIsFocused: (focused: boolean) => void;
}
type tabStateType = {
    tab: number
    setTab: (tab: number) => void
}


const useSearchRecentlyKeyword = create<searchRecentlyKeywordType>()(
    persist(
        (set) => ({
            recentlyKeyword: [],
            setRecentlyKeyword: (search: string) =>
                set((state) => {
                    if (state.recentlyKeyword.includes(search)) {
                        return {};
                    }
                    const newHistory = [search, ...state.recentlyKeyword.slice(0, 9)];
                    return { recentlyKeyword: newHistory };
                }),
            clearSearchHistory: () => set({ recentlyKeyword: [] }),
            clearOneSearchHistory: (search: string) =>
                set((state) => {
                    const newHistory = state.recentlyKeyword.filter((el) => el !== search);
                    return { recentlyKeyword: newHistory };
                }),
        }),
        {
            name: 'search-keyword',
        }
    )
);
const useSearchStateStore = create<searchStateType>((set) => ({
    keyword: "",
    isFocused: false,
    setSearchKeyword: (search: string) => set({ keyword: search }),
    setIsFocused: (focused: boolean) => set({ isFocused: focused }),
}));
const useTabStateStore = create<tabStateType>((set) => ({
    tab: 0,
    setTab: (tab: number) => set({ tab }),
}));

export { useSearchRecentlyKeyword, useSearchStateStore, useTabStateStore }