import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

export const useBlogPageStore = create(
  devtools(
    immer((set) => ({
      articles: null,
      filteredArticles: null,
      articlesFilter: 'all',
      categories: [],
      setArticles: (data: any) =>
        set((state: any) => {
          state.articles = data;
        }),
      setFilteredArticles: (data: any) =>
        set((state: any) => {
          state.filteredArticles = data;
        }),
      setArticlesFilter: (filters: any) =>
        set((state: any) => {
          state.articlesFilter = filters;
        }),
      setCategories: (categories: any) =>
        set((state: any) => {
          state.categories = categories;
        }),
    }))
  )
);
