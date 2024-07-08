import { create } from "zustand";

export const userStore = create<UserStore>()((set, get) => ({
  profile: null,

  setProfile: (profile) => set(() => ({ profile })),

  getInitials: () => {
    const profile = get().profile;

    const firstInitial = profile?.first_name.charAt(0).toUpperCase();
    const lastInitial = profile?.last_name.charAt(0).toUpperCase();

    return `${firstInitial}${lastInitial}`;
  },
}));
