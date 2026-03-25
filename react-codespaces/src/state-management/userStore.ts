import {create} from 'zustand';

interface UserState {
    userId: number;
  name: string;
  setName: (name: string) => void;
}

export const useUserStore = create<UserState>((set)=>({
 userId: 0,
 name: '',
 setName: (name: string) => set({name}),
}))