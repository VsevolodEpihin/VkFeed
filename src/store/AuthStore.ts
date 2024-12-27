import { create } from 'zustand';

import { UserDto } from '../api/dto/UserDto';
import { createUser, loginUser } from '../backMoc/auth';
import { Nullable } from '../api/types/Nullable';

interface AuthStore {
  user: Nullable<UserDto>;
  error: string;
  isLoading: boolean;
  signUp: (body: UserDto) => Promise<void>;
  signIn: (body: UserDto) => Promise<void>;
}

const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  error: '',
  isLoading: false,
  signUp: async (body: UserDto) => {
    set({ isLoading: true });
    try {
      const response = await createUser(body);
      console.log(response)
      set({ user: response, error: '' });
    } catch (err) {
      if(err instanceof Error) {
        console.log(err.message)
        set({error: err.message});
      } else {
        set({ error: 'Unexpected error occured' });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  signIn: async (body: UserDto) => {
    set({ isLoading: true });
    try {
      const response = await loginUser(body);
      console.log(response)
      set({ user: response, error: '' });
    } catch(err) {
      console.log(err)
      if(err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: 'Unexpected error occured' });
      }
    } finally {
      set({ isLoading: false })
    }
  }
}
))
export default useAuthStore;
