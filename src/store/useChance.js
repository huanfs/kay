import {create} from "zustand";

export const useChance = create((set)=>({
    chance:3,
    decreaseChance: () => set((state) => ({ chance: state.chance - 1 }))
}))