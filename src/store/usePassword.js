import {create} from "zustand";

export const usePassword = create((set)=>({
    password:"",
    setPassword:(newPassword)=>set({password:newPassword})
}));