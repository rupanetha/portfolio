import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

export const useBlogDetailsPageStore = create(
  devtools(
    immer((set) => ({
      blog: null,
      setBlog: (data: any) =>
        set((state: any) => {
          state.blog = data;
        }),
    }))
  )
);
