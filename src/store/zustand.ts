import create from 'zustand';
import type { StateCreator } from 'zustand';

import { DEFAULT_STORE } from '../constants';
import type { Store } from '../types';
import { setValue } from '../utils';

export const useStore = create<Store>((set, get, api) => {
  return {
    ...DEFAULT_STORE,
    updateState: (path, value) => {
      set((state) => {
        return setValue(state, path, value);
      });
    },
  };
});
