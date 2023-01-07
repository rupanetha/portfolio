import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

export const useHomePageStore = create(
  devtools(
    immer((set) => ({
      about: null,
      featuredArticles: null,
      experiences: null,
      workMedia: null,
      setAbout: (data: any) =>
        set((state: any) => {
          state.about = data;
        }),
      setFeaturedArticles: (data: any) =>
        set((state: any) => {
          state.featuredArticles = data;
        }),
      setExperiences: (data: any) =>
        set((state: any) => {
          state.experiences = data;
        }),
      setWorkMedia: (data: any) =>
        set((state: any) => {
          state.workMedia = data;
        }),
    }))
  )
);
