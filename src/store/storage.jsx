/* eslint-disable no-unused-vars */
import { create } from 'zustand'


export const useStorage = create((set) => ({
  alight: 0,
  ambientlight: "sunset",
  setLight: (intensity) => set((state) => ({ alight: intensity })),
  setAmbientLight: (ambient) => set((state) => ({ ambientlight: ambient })),
}))