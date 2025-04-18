import { create } from "zustand";


export const useStore = create(set => ({
  login: '',
  password: '',
  email: '',
  setLogin: (login) => set({login}),
  setPassword: (password) => set({password}),
  setEmail: (email => set({ email })),
  games: [],
  setGames: (games) => set({ games }),
  comments: [],
  setComments: (comments) => set({comments})
}));
